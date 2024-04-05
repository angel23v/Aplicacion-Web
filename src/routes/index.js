import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Iniciar Sesion" }));

router.get("/admin", (req, res) =>
  res.render("admin", { title: "Administrador" })
);

router.get("/user", (req, res) => res.render("user", { title: "Usuario" }));

export default router;
