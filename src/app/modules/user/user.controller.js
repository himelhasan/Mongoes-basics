"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAdmins = exports.findUser = exports.getUsers = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield (0, user_service_1.createUserToDB)(data);
    res.status(200).json({
        status: "success",
        data: user,
    });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getUsersFromDB)();
    res.status(200).json({
        status: "success",
        data: users,
    });
});
exports.getUsers = getUsers;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.findAUser)(id);
    res.status(200).json({
        status: "success",
        data: user,
    });
});
exports.findUser = findUser;
const findAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield (0, user_service_1.findAdmin)();
    res.status(200).json({
        status: "success",
        data: admins,
    });
});
exports.findAdmins = findAdmins;
// Pattern
// route -> controller -> service
