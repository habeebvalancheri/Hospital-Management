import { pool } from '../database/db';
import { Doctors } from '../interfaces/IDoctor';

export const createDoctor = async (doctors : Doctors) => {

  const { name, specialization, phone_number, email } = doctors;

  const query = 'INSERT INTO doctors ( name, specialization, phone_number, email) VALUES ( $1, $2, $3, $4) RETURNING *;';

  const values = [name, specialization, phone_number, email];

  const result = await pool.query(query,values);
  return result.rows[0];
}

export const getDoctors = async () => {
  const query = `SELECT * FROM doctors;`;

  const result = await pool.query(query);
  return result.rows;
};