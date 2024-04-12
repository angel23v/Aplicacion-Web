import sql from "mssql";

const dbSetting = {
  user: "sa",
  password: "<YourStrong@Passw0rd>",
  server: "localhost",
  database: "webapp",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const getconnection = async () => {
  try {
    const pool = await sql.connect(dbSetting);

    const result = await pool.request().query("SELECT GETDATE()");
    console.log(result);

    return pool;
  } catch (err) {
    console.log(err);
  }
};

getconnection();
