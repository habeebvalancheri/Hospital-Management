import { Request, Response } from 'express';
import { createAppointment ,getAppointment } from '../services/AppointmentService';
import { Appointments } from '../interfaces/IAppointment';
import { AppointmentStatus } from '../enums/AppointmentStatus';

export const handleCreateAppointment = async (req: Request, res: Response ) => {
  const { patientName , doctorName, date, time, reason } = req.body;

  const appointmentTime = new Date(`${date}T${time}`).toLocaleTimeString('en-GB', { hour12:false });
  
  const appointment : Appointments = {
    id:0,
    patientName : patientName,
    doctorName : doctorName,
    date : new Date(date),
    status : AppointmentStatus.SCHEDULED,
    time : appointmentTime,
    reason : reason,
    createdAt : new Date(),
    updatedAt : new Date(),
  };

  try {
    const newAppointment = await createAppointment(appointment);
    res.redirect('/appointments');
  }catch (err){
    res.status(500).send('Error creating appointment');
  }
};

export const showAppoinments = async (req: Request, res : Response) => {
try{
  const appointments = await getAppointment();
  console.log(appointments)
  res.render('partials/appointments', { title: 'Hospital Management System' ,appointments });
}catch(err){
  res.status(500).send('Error fetching appointments');
}
};