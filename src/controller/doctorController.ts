import { Request, Response } from 'express';
import { createDoctor, getDoctors } from "../services/DoctorService";
import { Doctors } from '../interfaces/IDoctor';

export const handleCreateDoctor = async ( req:Request, res:Response ) => {
  const { name, specialization, phone_number, email } = req.body;

  const doctors : Doctors = {
    id : 0,
    name : name,
    specialization : specialization,
    phone_number : phone_number,
    email : email,
    create_at : new Date(),
    updated_at : new Date(),
  }
try{
  const newDoctor = await createDoctor(doctors);
  res.redirect('/doctors');
}catch(err){
  res.status(500).send('Error creating doctors');
}
};

export const showDoctors = async ( req : Request, res : Response ) => {
  try{
    const doctors = await getDoctors();
    res.render('partials/doctors', { title: 'Hospital Management System' ,doctors });
  }catch(err){
    res.status(500).send('Error fetching doctors');
  }
};
