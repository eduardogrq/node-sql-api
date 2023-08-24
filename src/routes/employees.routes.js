import { Router } from "express";
import { createUser, deleteUser, getUsers, findUser, updateUser } from "../controllers/employees.controller.js";

const router = Router();

router.get("/", getUsers)

router.get("/:id", findUser)

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser)

export default router;