import * as Yup from 'yup';

import Attraction from '../schemas/Attractions';
import Admin from '../models/Admin';
import File from '../models/File';

class AttractionController {
  async index(req, res) {
    const {
      topLatitude, bottomLatitude, leftLongitude, rightLongitude, kind,
    } = req.query;

    if (topLatitude && bottomLatitude && leftLongitude && rightLongitude) {
      const attractions = await Attraction.find({
        $or: [{ kind }, { kind: 'b' }],
        location: {
          $geoWithin: {
            $geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [parseFloat(leftLongitude), parseFloat(bottomLatitude)],
                  [parseFloat(leftLongitude), parseFloat(topLatitude)],
                  [parseFloat(rightLongitude), parseFloat(topLatitude)],
                  [parseFloat(rightLongitude), parseFloat(bottomLatitude)],
                  [parseFloat(leftLongitude), parseFloat(bottomLatitude)],
                ],
              ],
            },
          },
        },
      });
      return res.json(attractions);
    }

    const attractions = await Attraction.find().sort({ title: 1 });
    return res.json(attractions);
  }

  /*
    $geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ -43.199232, -22.98998],
                [ -43.1980279, -22.987557],
                [-43.1931915, -22.987194],
                [-43.193481, -22.990197],
                [-43.199232, -22.98998],
              ],
            ],
          },
  */

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
      picture_id: Yup.number().required(),
      kind: Yup.string().required(),
      longitude: Yup.number().required(),
      latitude: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can save an attraction point.' });
    }

    const {
      title, description, picture_id, kind, latitude, longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    };

    const attraction = await Attraction.create({
      title, description, picture_id, kind, location,
    });

    return res.json(attraction);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      kind: Yup.string(),
      picture_id: Yup.number(),
      longitude: Yup.number(),
      latitude: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can save an attraction point.' });
    }

    const {
      title, description, picture_id, kind, latitude, longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    };

    const attraction = await Attraction.findOne({ _id: req.params.id });

    if (picture_id !== attraction.picture_id) {
      const file = await File.findByPk(attraction.picture_id);
      await file.destroy();
    }

    const newAttraction = await attraction.update({
      title, description, picture_id, kind, location,
    }, { new: true });

    return res.json(
      newAttraction,
    );
  }

  async delete(req, res) {
    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can save an attraction point.' });
    }

    const { picture_id } = await Attraction.findOne({ _id: req.params.id });


    await Attraction.findByIdAndDelete(req.params.id);

    await File.destroy({ where: { id: picture_id } });

    return res.json({ okay: true });
  }
}

export default new AttractionController();
