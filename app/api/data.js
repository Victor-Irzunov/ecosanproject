const formidable = require('formidable');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const { DataInfo } = require('../../models/models');

const createDataInfo = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).send();
  }
  try {
    const form = new formidable.IncomingForm();
    const uploadDir = './public/uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    form.uploadDir = uploadDir;
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
		console.log('-------->>>fields::: ', fields);
		console.log('---------???files::: ', files);
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ error: 'Failed to parse form data' });
      }

      const { id, ...data } = fields;
		console.log('-----id::: ', id);
      const existingData = await DataInfo.findOne({ where: { id } });
		console.log('-------existingData::: ', existingData);

      if (existingData && Object.keys(files).length) {
        const fileExtension = files.img_fon.originalFilename.split('.').pop();
        const imageName = `${uuidv4()}.${fileExtension}`;
        fs.renameSync(files.img_fon.filepath, `${uploadDir}/${imageName}`);

        await DataInfo.update(
          { img_fon: imageName, ...data },
          { where: { id } }
        );
      } else if (existingData) {
        await DataInfo.update(data, { where: { id } });
      } else if (Object.keys(files).length) {
        const fileExtension = files.img_fon.originalFilename.split('.').pop();
        const imageName = `${uuidv4()}.${fileExtension}`;
        fs.renameSync(files.img_fon.filepath, `${uploadDir}/${imageName}`);

        await DataInfo.create({ img_fon: imageName, ...data });
      } else {
        await DataInfo.create(data);
      }
      res.status(200).json({ message: 'Данные успешно сохранены!' });
    });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
};

module.exports = {
  createDataInfo,
};
