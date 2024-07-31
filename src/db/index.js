import express, { query } from "express";
import bodyParser from "body-parser";
import sql from "mssql";

// Configuración de la base de datos
const dbConfig = {
  user: "sa",
  password: "<YourStrong@Passw0rd>",
  server: "localhost",
  database: "webapp",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Crear la aplicación Express
const app = express();

// Configurar bodyParser para parsear JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Establecer la conexión a la base de datos
let pool;
(async () => {
  try {
    pool = await sql.connect(dbConfig);
    console.log("Conexión exitosa a la base de datos");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
})();

app.post("/login", async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const result = await pool
      .request()
      .input("usuario", sql.VarChar, usuario)
      .input("contrasena", sql.VarChar, contrasena)
      .query(
        "SELECT name_user, pin, hierarchy FROM users WHERE name_user = @usuario AND pin = @contrasena"
      );

    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      res.json({
        success: true,
        message: "Inicio de sesión exitoso",
        hierarchy: user.hierarchy,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales inválidas" });
    }
  } catch (err) {
    console.error("Error al ejecutar la consulta:", err);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: err.message,
    });
  }
});

app.post("/api/usuarios", async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const result = await pool
      .request()
      .input("name_user", sql.VarChar, nombre)
      .input("email", sql.VarChar, email)
      .input("pin", sql.VarChar, password)
      .input("hierarchy", sql.VarChar, "user")
      .query(
        "INSERT INTO users (name_user, email, pin, hierarchy) VALUES (@name_user, @email, @pin, @hierarchy)"
      );

    res.status(200).send("Usuario registrado exitosamente");
    window.location.reload();
  } catch (err) {
    console.error("Error al ejecutar la consulta:", err);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

export default app;
