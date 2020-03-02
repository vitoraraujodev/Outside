import * as Yup from 'yup';

import Request from '../models/Request';
import Admin from '../models/Admin';

class RequestsController {
  async index(req, res) {
    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can see requests.' });
    }

    const requests = await Request.findAll();

    return res.json(requests);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
      kind: Yup.string().required(),
      longitude: Yup.number().required(),
      latitude: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const {
      title, description, kind, latitude, longitude,
    } = req.body;

    const user_id = req.userId;

    const request = await Request.create({
      title, description, kind, latitude, longitude, user_id,
    });

    return res.json(request);
  }

  async delete(req, res) {
    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can delete a request.' });
    }

    await Request.findByIdAndDelete(req.params.id);


    return res.json({ okay: true });
  }
}

export default new RequestsController();
