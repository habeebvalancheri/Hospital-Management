import { Router, Request, Response } from 'express';
import * as appointmentController from './controller/appointmentController';
import * as doctorController from './controller/doctorController';
import * as patientController from './controller/patientController';
const route = Router();

route.get('/',( req : Request, res : Response) => {
  res.render('partials/index', {title : 'Hospital Management System'});
});


route.get('/appointments', appointmentController.showAppoinments);
route.get('/appointments/new',( req: Request, res : Response) => {
  res.render('partials/addAppointments', { title: 'Hospital Management System'} );
});
route.post('/addappointments',appointmentController.handleCreateAppointment);


route.get('/doctors',doctorController.showDoctors);
route.get('/doctors/new',( req : Request, res : Response) => {
  res.render('partials/addDoctors', { title: 'Hospital Management System'});
});
route.post('/adddoctors',doctorController.handleCreateDoctor);


route.get('/patients',patientController.showPatients);
route.get('/patients/new',( req : Request, res : Response) => {
  res.render('partials/addPatients', { title: 'Hospital Management System'});
})
route.post('/addPatients',patientController.handleCreatePatients);

export default route;