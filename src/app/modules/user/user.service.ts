import { IUser } from "./user.interface";
import User from "./user.model";

// get all users
export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

// create a new user

export const createUserToDB = async (data: IUser): Promise<IUser> => {
  const user = await new User(data);
  await user.save();
  return user;
};

// find a new user

export const findAUser = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, password: 1 }); /// filter fields
  console.log(user?.fullName());
  return user;
};
