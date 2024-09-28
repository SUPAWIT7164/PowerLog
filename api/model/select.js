const { sqlcmd } = require('../config/dbConnect')

class SELECTAPI {
  constructor(args) {
    Object.assign(this, args)
  }

  static get_device_data() {
    const query =
      "SELECT TOP 1 *FROM [powerMeter].[dbo].[GetTimeChartPowerLog] (201, '2024-09-26 00:00:00', '2024-09-27 00:00:00', 1)ORDER BY time_interval DESC"
    return sqlcmd(query)
  }
}

module.exports = SELECTAPI
