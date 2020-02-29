import File from '../models/File';

class FileController {
  async show(req, res) {
    const { url } = await File.findByPk(req.params.id);

    return res.json({ url });
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
