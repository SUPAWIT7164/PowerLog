const SELECTAPI = require('../model/select')

const handleSelectLog = async (req, res, next) => {
  try {
    const results = await SELECTAPI.get_device_data()
    res.send(results)
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  handleSelectLog,
}
