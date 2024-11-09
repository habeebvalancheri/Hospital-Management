import { StaffTypes } from '../enums/StaffType';

interface IStaffMembers {
  id: number;
  name: string;
  role: StaffTypes;
  department: string;
  contactNumber: string;
  email: string;
  isAvailable: boolean; 
  joinDate: Date;
}

export { IStaffMembers };