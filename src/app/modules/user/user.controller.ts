import { NextFunction, Request, Response } from "express";
import { createUserToDB, findAUser, findAdmin, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const findUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await findAUser(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const findAdmins = async (req: Request, res: Response) => {
  const admins = await findAdmin();

  res.status(200).json({
    status: "success",
    data: admins,
  });
};

// Pattern

// route -> controller -> service
