import { Router } from "express";
import panel from "../controllers/socket.controller.js";

const router = Router();

router.get("/api/socket/panel", panel.PANEL);
router.get("/api/socket/stats", panel.STATS);

export default router;