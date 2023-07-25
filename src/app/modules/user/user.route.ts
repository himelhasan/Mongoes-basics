import express from "express";
import { createUser, findUser, getUsers } from "./user.controller";

const router = express.Router();

// create user
router.get("/", getUsers);
router.get("/find-a-user/:id", findUser);
router.post("/create-user/", createUser);
export default router;
