import { Request, Response } from 'express';
import { createPatients, getPatients} from '../services/PatientService';
import { Patients } from '../interfaces/IPatient';


export const handleCreatePatients = async ( req : Request, res : Response ) => {
    const { name, age, gender, phone_number, email, address, medical_history } = req.body;

    const patients : Patients = {
      id:0,
      name : name,
      age : age,
      gender : gender,
      phone_number : phone_number,
      email : email,
      address : address,
      medical_history : medical_history,
      created_at : new Date,
      updated_at : new Date,
    }

    try{
      const newPatient = await createPatients(patients);
      res.redirect('/patients');
    }catch(err){
      res.status(500).send('Error creating patients');
    }
};

export const showPatients = async ( req : Request, res : Response )=> {
  try{
    const patients = await getPatients();
    res.render('partials/patients', { title : 'Hostpital Management System', patients });
  }catch(err){
    res.status(500).send('Error fetching patients');
  }
};