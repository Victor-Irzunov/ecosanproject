const { Service } = require('../../models/models')
const getDataService = async (req, res) => {
	
	if (req.method === 'GET') {
		try {
			const id = req.query.id
			const services = await Service.findOne({ where: { id}});
			res.status(200).json(services);
		} catch (error) {
			console.error('Error retrieving data:', error);
			res.status(500).json({ error: 'Failed to retrieve data' });
		}
	}
}
module.exports = {
	getDataService
}