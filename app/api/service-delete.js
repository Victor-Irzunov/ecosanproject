const { Service } = require('../../models/models');

const deleteDataService = async (req, res) => {
	if (req.method !== 'DELETE') {
	  return res.status(404).send();
	}
	try {
		const id = req.query.id
		await Service.destroy({ where: { id } });
		res.status(200).json({ message: 'Данные успешно удалены!' });
	} catch (error) {
	  console.error('Error delete data:', error);
	  res.status(500).json({ error: 'Ошибка запроса на удаление' });
	}
 };
 module.exports = {
	deleteDataService,
 };
 