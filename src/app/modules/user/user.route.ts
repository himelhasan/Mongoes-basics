import express from "express";
import { createUser, getUsers } from "./user.controller";

const router = express.Router();

// create user
router.post("/create-user", createUser);
router.get("/", getUsers);
export default router;
