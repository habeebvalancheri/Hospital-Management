interface ISchedule {
  id: number;
  staffId: number;
  date: Date;
  startTime: string;
  endTime: string;
  patientId?: number;
  type: 'shift' | 'appointment' | 'surgery' | 'consultation';
  location: string; 
}
