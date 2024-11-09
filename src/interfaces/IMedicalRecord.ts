interface IMedicalRecord {
  recordId: number;
  patientId: number;
  diagnosis: string;
  treatment: string;
  medications: string[];
  doctorId: number;
  notes: string;
  createdDate: Date;
  updatedDate: Date;
}
