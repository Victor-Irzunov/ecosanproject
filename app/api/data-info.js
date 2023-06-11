const { DataInfo } = require('../../models/models')

const getDataInfo = async (req, res) => {
	// console.log('getDataInfo-------------------------->')
	if (req.method === 'GET') {
		try {
			const services = await DataInfo.findAll();
			res.status(200).json(services);
		} catch (error) {
			console.error('Error retrieving data:', error);
			res.status(500).json({ error: 'Failed to retrieve data' });
		}
	}
}
module.exports = {
	getDataInfo
}