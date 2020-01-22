import * as Yup from 'yup';
import Attraction from '../schemas/Attractions';
import Admin from '../models/Admin';

class AttractionController {
  async index(req, res) {
    const attractions = await Attraction.find();

    return res.json(attractions);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
      history: Yup.string(),
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
      title, description, history, kind, latitude, longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const attraction = await Attraction.create({
      title, description, history, kind, location,
    });

    return res.json(attraction);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      history: Yup.string(),
      kind: Yup.string(),
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
      title, description, history, kind, latitude, longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const attraction = await Attraction.findByIdAndUpdate(req.params.id, {
      title, description, history, kind, location,
    }, { new: true });

    return res.json(
      attraction,
    );
  }

  async delete(req, res) {
    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can save an attraction point.' });
    }

    await Attraction.findByIdAndDelete(req.params.id);

    return res.json({ okay: true });
  }
}

export default new AttractionController();
