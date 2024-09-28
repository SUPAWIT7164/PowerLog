const sql = require('mssql');

const config = {
    user: 'powermeter',
    password: 'LC@powermeter@2024',
    server: '10.3.2.5',  // IP ของเซิร์ฟเวอร์
    database: 'powerMeter',
    port: 1433,           // พอร์ตสำหรับเชื่อมต่อ
    options: {
        encrypt: false,   // ไม่เข้ารหัส (สำหรับ SQL Server ที่ใช้ self-signed certificate)
        trustServerCertificate: true // เชื่อใบรับรองเซิร์ฟเวอร์
    }
};
const sqlcmd = (query, params = []) => {
  return new Promise(async (resolve, reject) => {
    try {
      // สร้างการเชื่อมต่อใหม่ทุกครั้งที่มีการรันคำสั่ง
      const pool = await sql.connect(config)
      const result = await pool.request().query(query) // ส่งคำสั่ง SQL

      resolve(result.recordset) // ส่งผลลัพธ์กลับ
    } catch (err) {
      console.log('SQL error:', err)
      reject(err)
    } finally {
      sql.close() // ปิดการเชื่อมต่อทุกครั้ง
    }
  })
}
module.exports = {
  sqlcmd,
}
