import { Router } from "express";
import panel from "../controllers/socket.controller.js";

const router = Router();

router.post("/api/socket/panel", panel.PANEL);
router.post("/api/socket/stats", panel.STATS);

export default router;