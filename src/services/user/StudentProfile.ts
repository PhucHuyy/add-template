import { StudentCard } from "./StudentCard";

export class StudentProfile {
  profileId: string;
  fullName: string;
  major: string;
  dateOfBirth: string;
  address: string;
  university: string;
  avatarUrl: string;
  academicYearStart: Date;
  academicYearEnd: Date | null;
  phoneNumber: string;
  isApproved: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  studentCardDTOS: StudentCard[];
  approved: number;

  constructor(
    profileId: string,
    fullName: string,
    major: string,
    dateOfBirth: string,
    address: string,
    university: string,
    avatarUrl: string,
    academicYearStart: string,  // Sửa kiểu thành string vì bạn sẽ chuyển thành Date
    academicYearEnd: string | null, // Kiểu string hoặc null, bạn sẽ chuyển thành Date
    phoneNumber: string,
    isApproved: boolean,
    status: string,
    createdAt: string,  // Sửa kiểu thành string vì bạn sẽ chuyển thành Date
    updatedAt: string,  // Sửa kiểu thành string vì bạn sẽ chuyển thành Date
    studentCardDTOS: StudentCard[],
    approved: number
  ) {
    this.profileId = profileId;
    this.fullName = fullName;
    this.major = major;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.university = university;
    this.avatarUrl = avatarUrl;
    
    // Chuyển đổi các giá trị kiểu string thành đối tượng Date
    this.academicYearStart = new Date(academicYearStart);
    this.academicYearEnd = academicYearEnd ? new Date(academicYearEnd) : null;

    this.phoneNumber = phoneNumber;
    this.isApproved = isApproved;
    this.status = status;
    
    // Chuyển đổi chuỗi thành đối tượng Date
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);

    // Khởi tạo mảng các đối tượng StudentCard
    this.studentCardDTOS = studentCardDTOS;
    this.approved = approved;
  }
}
