"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import dotenv from 'dotenv';
// dotenv.config();     
//OR
require("dotenv/config");
console.log(process.env.temp);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
mongoose_1.default.connect(process.env.MONGO_URI);
const db_conn = mongoose_1.default.connection;
db_conn.on('error', () => {
    console.log('❌ error connecting to the db');
});
db_conn.once('open', () => {
    console.log('✅ connected to the db');
});
app.get('/test', (req, res) => {
    res.send('hello, world');
});
app.listen(PORT, () => {
    console.log(`✅ server is running on ${PORT}`);
});
