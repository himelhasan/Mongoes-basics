"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// create user
router.get("/", user_controller_1.getUsers);
router.get("/find-a-user/:id", user_controller_1.findUser);
router.get("/find-admins/", user_controller_1.findAdmins);
router.post("/create-user/", user_controller_1.createUser);
exports.default = router;
