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
const mongoose_1 = require("mongoose");
// type UserModel = Model<IUser, {}, IUserMethods>;
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: "student" },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false },
        lastName: { type: String, required: true },
    },
    gender: { type: String, enum: ["male", "female"] },
    dob: { type: String, required: false },
    email: { type: String, required: false },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
});
userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
});
userSchema.static("getAdminUsers", function getAdminUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const admins = yield this.find({ role: "admin" });
        return admins;
    });
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
