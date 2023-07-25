import express from "express";
import { createUser, findAdmins, findUser, getUsers } from "./user.controller";

const router = express.Router();

// create user
router.get("/", getUsers);
router.get("/find-a-user/:id", findUser);
router.get("/find-admins/", findAdmins);
router.post("/create-user/", createUser);
export default router;
