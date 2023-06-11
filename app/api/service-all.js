const { Service } = require('../../models/models')
const getDataServiceAll = async (req, res) => {
	
	if (req.method === 'GET') {
		// console.log('-----------getDataServiceAll------- ');
		try {
			const services = await Service.findAll();
			res.status(200).json(services);
		} catch (error) {
			console.error('Error retrieving data:', error);
			res.status(500).json({ error: 'Failed to retrieve data' });
		}
	}
}
module.exports = {
	getDataServiceAll
}