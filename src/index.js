"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes")); // Import the routes.
const app = (0, express_1.default)();
// set View engine to EJS.
app.set('view engine', 'ejs');
// Middlewares for parsing JSON and URL-encoded data.
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Use routes.
app.use('/', routes_1.default);
// Define the port.
const port = 8000;
// Start the server.
app.listen(() => {
    console.log(`Hospital system server running on : http://localhost://"${port}`);
});
