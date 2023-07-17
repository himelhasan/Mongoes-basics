import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();
// using cors
app.use(cors());

// parsing data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data

  /*
    STEP 1: interface
    step 2: schema
    step 3: model
    step 4: database query

    */

  // step 1 : Create an interface representing a document in MongoDB.

  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dob?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // step 2: Create a Schema corresponding to the document interface.

  const userSchema = new Schema<IUser>({
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

  //   res.send("Hello World!");
});

export default app;
