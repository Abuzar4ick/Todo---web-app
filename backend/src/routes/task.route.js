import { Router } from "express";
const router = Router();
import {
  createNewTask,
  getAllTasks,
  deleteTaskById,
  updateTaskById,
} from "../controllers/task.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";

// router.use(protectRouter);

router.post("/", createNewTask);
router.get("/", getAllTasks);
router.delete("/:id", deleteTaskById);
router.patch("/:id", updateTaskById);

export default router;
