import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "169989",
    role: "student",
    password: "examplePassword",
    name: {
      firstName: "hey John",
      middleName: "Doe",
      lastName: "Smith",
    },
    dob: "1990-01-01",
    gender: "male",
    email: "john.doe@example.com",
    contactNo: "1234567890",
    emergencyContactNo: "9876543210",
    presentAddress: "123 Main St, City, Country",
    permanentAddress: "456 Park Ave, City, Country",
  });
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};
