import { pool } from '../database/db';
import { Appointments } from '../interfaces/IAppointment';


export const createAppointment = async (appointment : Appointments) => {
  const { patientName, doctorName, date, time, reason, status } = appointment;

  const query = `INSERT INTO appointments (patient_name, doctor_name, date, time, reason, status) VALUES ($1, $2, $3, $4 ,$5, $6) RETURNING *;`;

  const values = [patientName, doctorName, date, time, reason, status];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getAppointment = async () => {
  const query = `SELECT * FROM appointments;`;

  const result = await pool.query(query);
  return result.rows;
};


