import File from '../models/File';
import Admin from '../models/Admin';

class FileController {
  async store(req, res) {
    const admin = await Admin.findOne({ where: { user_id: req.userId } });

    if (!admin) {
      return res.status(401).json({ error: 'Only administrators can save an files point.' });
    }

    const { originalname: name, filename: path } = req.file;


    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
