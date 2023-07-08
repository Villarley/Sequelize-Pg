import { Router } from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProject,
} from "../controllers/projectscontroller.js";
const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProject);

export default router;
