import express from 'express';
import routes from './routes'; // Import the routes.
import path from 'path';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

// set View engine to EJS.
app.set('view engine','ejs');

// set the views directory
app.set('views', path.join(__dirname, '/views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

const viewsDirectory = path.join(__dirname, 'views');
const publicDirectory = path.join(__dirname, '../public');

// Middlewares for parsing JSON and URL-encoded data.
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Use routes.
app.use('/',routes);

// Define the port.
const port = 8000;

// Start the server.
app.listen(port,() => {
  console.log(`Hospital system server running on: http://localhost://"${port}`)
});

