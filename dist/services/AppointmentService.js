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
exports.getAppointment = exports.createAppointment = void 0;
const db_1 = require("../database/db");
const createAppointment = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientName, doctorName, date, time, reason, status } = appointment;
    const query = `INSERT INTO appointments (patient_name, doctor_name, date, time, reason, status) VALUES ($1, $2, $3, $4 ,$5, $6) RETURNING *;`;
    const values = [patientName, doctorName, date, time, reason, status];
    const result = yield db_1.pool.query(query, values);
    return result.rows[0];
});
exports.createAppointment = createAppointment;
const getAppointment = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM appointments;`;
    const result = yield db_1.pool.query(query);
    return result.rows;
});
exports.getAppointment = getAppointment;
