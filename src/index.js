import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(indexRoutes);
app.use(adminRoutes);
app.use(userRoutes);

app.use(express.static(join(__dirname, "stylesheet")));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
