import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

//  Defining Client configuration
const pool = new Pool({
  user : process.env.DB_USER,  // User Name
  host : process.env.DB_HOST,      // Host Name
  database : process.env.DB_NAME, // Database Name
  password : process.env.DB_PASSWORD, // User Password
  port : Number(process.env.DB_PORT), // PostgreSQL Default port.
});


// connect to database
const connectDB = async () => {
  try{
    await pool.connect();
    console.log('Connected to PostgreSQL');
  }catch (err){
    console.error('Connection error', err);
  }
}

export { pool, connectDB }