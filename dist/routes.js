"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController = __importStar(require("./controller/appointmentController"));
const doctorController = __importStar(require("./controller/doctorController"));
const patientController = __importStar(require("./controller/patientController"));
const route = (0, express_1.Router)();
route.get('/', (req, res) => {
    res.render('partials/index', { title: 'Hospital Management System' });
});
route.get('/appointments', appointmentController.showAppoinments);
route.get('/appointments/new', (req, res) => {
    res.render('partials/addAppointments', { title: 'Hospital Management System' });
});
route.post('/addappointments', appointmentController.handleCreateAppointment);
route.get('/doctors', doctorController.showDoctors);
route.get('/doctors/new', (req, res) => {
    res.render('partials/addDoctors', { title: 'Hospital Management System' });
});
route.post('/adddoctors', doctorController.handleCreateDoctor);
route.get('/patients', patientController.showPatients);
route.get('/patients/new', (req, res) => {
    res.render('partials/addPatients', { title: 'Hospital Management System' });
});
route.post('/addPatients', patientController.handleCreatePatients);
exports.default = route;
