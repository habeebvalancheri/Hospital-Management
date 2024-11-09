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
exports.getDoctors = exports.createDoctor = void 0;
const db_1 = require("../database/db");
const createDoctor = (doctors) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, specialization, phone_number, email } = doctors;
    const query = 'INSERT INTO doctors ( name, specialization, phone_number, email) VALUES ( $1, $2, $3, $4) RETURNING *;';
    const values = [name, specialization, phone_number, email];
    const result = yield db_1.pool.query(query, values);
    return result.rows[0];
});
exports.createDoctor = createDoctor;
const getDoctors = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM doctors;`;
    const result = yield db_1.pool.query(query);
    return result.rows;
});
exports.getDoctors = getDoctors;
