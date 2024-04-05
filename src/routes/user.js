import { Router } from "express";
const router = Router();

router.get("/user/inventario", (req, res) =>
  res.render("user/inventario", { title: "Usuario" })
);

router.get("/user/sells", (req, res) =>
  res.render("user/sells", { title: "Usuario" })
);

export default router;
