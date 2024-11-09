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
exports.connectDB = exports.pool = void 0;
const pg_1 = require("pg");
//  Defining Client configuration
const pool = new pg_1.Pool({
    user: 'postgres', // User Name
    host: 'localhost', // Host Name
    database: 'postgres', // Database Name
    password: 'newpassword', // User Password
    port: 5432, // PostgreSQL Default port.
});
exports.pool = pool;
// connect to database
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pool.connect();
        console.log('Connected to PostgreSQL');
    }
    catch (err) {
        console.error('Connection error', err);
    }
});
exports.connectDB = connectDB;
