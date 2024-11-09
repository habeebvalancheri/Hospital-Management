import { pool } from '../database/db';
import { Patients } from '../interfaces/IPatient';

export const createPatients = async (patients : Patients) => {

  const { name, age, gender, phone_number, email, address, medical_history} = patients;

  const query = 'INSERT INTO patients ( name, age, gender, phone_number, email, address, medical_history) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING *;';

  const values = [name,age,gender,phone_number,email,address,medical_history];

  const result = await pool.query(query,values)
  return result.rows[0];
};

export const getPatients = async () => {

  const query = 'SELECT * FROM patients';
  const result = await pool.query(query);
  return result.rows;
}