"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Application routes
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
// using cors
app.use((0, cors_1.default)());
// parsing data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", user_route_1.default);
app.get("/", (req, res) => {
    res.send("hello world!");
});
exports.default = app;
// breakdown process
/*
- interface -> interface.ts
- model and schema -> model.ts
- routes
- route functions -> controller.ts

 - database queries -> server.ts
*/
