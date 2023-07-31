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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAdmin = exports.findAUser = exports.createUserToDB = exports.getUsersFromDB = void 0;
const user_model_1 = __importDefault(require("./user.model"));
// get all users
const getUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find();
    return users;
});
exports.getUsersFromDB = getUsersFromDB;
// create a new user
const createUserToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new user_model_1.default(data);
    yield user.save();
    return user;
});
exports.createUserToDB = createUserToDB;
// find a new user
const findAUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ id: payload }, { name: 1, password: 1 }); /// filter fields
    console.log(user === null || user === void 0 ? void 0 : user.fullName());
    return user;
});
exports.findAUser = findAUser;
// find admin
const findAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield user_model_1.default.getAdminUsers();
    return admins;
});
exports.findAdmin = findAdmin;
