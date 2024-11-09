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
exports.getPatients = exports.createPatients = void 0;
const db_1 = require("../database/db");
const createPatients = (patients) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, gender, phone_number, email, address, medical_history } = patients;
    const query = 'INSERT INTO patients ( name, age, gender, phone_number, email, address, medical_history) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING *;';
    const values = [name, age, gender, phone_number, email, address, medical_history];
    const result = yield db_1.pool.query(query, values);
    return result.rows[0];
});
exports.createPatients = createPatients;
const getPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM patients';
    const result = yield db_1.pool.query(query);
    return result.rows;
});
exports.getPatients = getPatients;
