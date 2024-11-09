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
exports.showAppoinments = exports.handleCreateAppointment = void 0;
const AppointmentService_1 = require("../services/AppointmentService");
const AppointmentStatus_1 = require("../enums/AppointmentStatus");
const handleCreateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientName, doctorName, date, time, reason } = req.body;
    const appointmentTime = new Date(`${date}T${time}`).toLocaleTimeString('en-GB', { hour12: false });
    const appointment = {
        id: 0,
        patientName: patientName,
        doctorName: doctorName,
        date: new Date(date),
        status: AppointmentStatus_1.AppointmentStatus.SCHEDULED,
        time: appointmentTime,
        reason: reason,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    try {
        const newAppointment = yield (0, AppointmentService_1.createAppointment)(appointment);
        res.redirect('/appointments');
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error creating appointment');
    }
});
exports.handleCreateAppointment = handleCreateAppointment;
const showAppoinments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, AppointmentService_1.getAppointment)();
        res.render('partials/appointments', { title: 'Hospital Management System', appointments });
    }
    catch (err) {
        res.status(500).send('Error fetching appointments');
    }
});
exports.showAppoinments = showAppoinments;
