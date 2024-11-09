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
exports.showPatients = exports.handleCreatePatients = void 0;
const PatientService_1 = require("../services/PatientService");
const handleCreatePatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, gender, phone_number, email, address, medical_history } = req.body;
    const patients = {
        id: 0,
        name: name,
        age: age,
        gender: gender,
        phone_number: phone_number,
        email: email,
        address: address,
        medical_history: medical_history,
        created_at: new Date,
        updated_at: new Date,
    };
    try {
        const newPatient = yield (0, PatientService_1.createPatients)(patients);
        res.redirect('/patients');
    }
    catch (err) {
        res.status(500).send('Error creating patients');
    }
});
exports.handleCreatePatients = handleCreatePatients;
const showPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield (0, PatientService_1.getPatients)();
        console.log(patients);
        res.render('partials/patients', { title: 'Hostpital Management System', patients });
    }
    catch (err) {
        res.status(500).send('Error fetching patients');
    }
});
exports.showPatients = showPatients;
