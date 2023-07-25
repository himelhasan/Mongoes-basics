import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.method("fullName", function fullname() {});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
