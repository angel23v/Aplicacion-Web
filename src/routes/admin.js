import { Router } from "express";
const router = Router();

router.get("/admin/users", (req, res) =>
  res.render("admin/users", { title: "Administrador" })
);

router.get("/admin/proveedores", (req, res) =>
  res.render("admin/proveedores", { title: "Administrador" })
);

router.get("/admin/reportes", (req, res) =>
  res.render("admin/reportes", { title: "Administrador" })
);

export default router;
