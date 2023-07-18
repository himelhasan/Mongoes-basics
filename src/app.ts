import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Application routes

import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

// parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;

// breakdown process
/* 
- interface -> interface.ts
- model and schema -> model.ts
- routes 
- route functions -> controller.ts

 - database queries -> server.ts
*/
