const formidable = require('formidable');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Service } = require('../../models/models');

const updateDataService = async (req, res) => {
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
		 if (err) {
			console.error('Error parsing form data:', err);
			return res.status(500).json({ error: 'Failed to parse form data' });
		 }
		 const { id, ...data } = fields;
		 const existingData = await Service.findOne({ where: { id } });
		 if (!existingData) {
			return res.status(404).json({ error: 'Data not found' });
		 }
 
		 if (Object.keys(files).length) {
			const fileExtension = files.img.originalFilename.split('.').pop();
			const imageName = `${uuidv4()}.${fileExtension}`;
			fs.renameSync(files.img.filepath, `${uploadDir}/${imageName}`);
			data.img = imageName;
		 }
		 await Service.update(data, { where: { id } });
		 res.status(200).json({ message: 'Данные успешно обновлены!' });
	  });
	} catch (error) {
	  console.error('Error updating data:', error);
	  res.status(500).json({ error: 'Failed to update data' });
	}
 };
 module.exports = {
	updateDataService,
 };
 