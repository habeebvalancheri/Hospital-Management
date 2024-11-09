import { Pool } from 'pg';


//  Defining Client configuration
const pool = new Pool({
  user : 'postgres',  // User Name
  host : 'localhost', // Host Name
  database : 'postgres', // Database Name
  password : 'newpassword', // User Password
  port : 5432, // PostgreSQL Default port.
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