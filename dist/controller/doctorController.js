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
exports.showDoctors = exports.handleCreateDoctor = void 0;
const DoctorService_1 = require("../services/DoctorService");
const handleCreateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, specialization, phone_number, email } = req.body;
    const doctors = {
        id: 0,
        name: name,
        specialization: specialization,
        phone_number: phone_number,
        email: email,
        create_at: new Date(),
        updated_at: new Date(),
    };
    try {
        const newDoctor = yield (0, DoctorService_1.createDoctor)(doctors);
        res.redirect('/doctors');
    }
    catch (err) {
        res.status(500).send('Error creating doctors');
    }
});
exports.handleCreateDoctor = handleCreateDoctor;
const showDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctors = yield (0, DoctorService_1.getDoctors)();
        res.render('partials/doctors', { title: 'Hospital Management System', doctors });
    }
    catch (err) {
        res.status(500).send('Error fetching doctors');
    }
});
exports.showDoctors = showDoctors;
