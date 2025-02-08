export interface Employee {
  id?: string;
  name: string;
  email: string;
  employmentDate: Date;
  employmentType: string;
  department: string;
  notification: string;
  profileImageUrl?: string;
  createdAt: Date;
}
