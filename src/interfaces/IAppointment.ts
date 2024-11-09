import { AppointmentStatus } from "../enums/AppointmentStatus";

interface Appointments {
  id: number,
  patientName : string,
  doctorName : string,
  date : Date,
  status : AppointmentStatus,
  time : string,
  reason : string,
  createdAt : Date,
  updatedAt : Date,
};

export { Appointments };