import axiosPrivateProfileServcie from "../../../api/axiosPrivateProfileServcie";
import { ApiResponse } from "../../../features/auth/authType";

export class StudentProfileDTOForUpdate {
    fullName!: string;
    major!: string;
    dateOfBirth!: string;
    address!: string;
    university!: string;
    academicYearStart!: string;
    academicYearEnd?: string | null; // ✅ chỉ cần ? là đủ
    phoneNumber!: string;
    studentCardUrlId!: string[];

    constructor(init?: Partial<StudentProfileDTOForUpdate>) {
        Object.assign(this, init);
    }
}



export class UpdateProfileService {
    async updateStudentProfile(dto: StudentProfileDTOForUpdate): Promise<boolean> {
        try {
            const response = await axiosPrivateProfileServcie.put<ApiResponse<object>>("/student_profiles/update", dto);
            console.log(response.data);
            return true;
        } catch (error) {
            console.error("❌ Lỗi khi cập nhật hồ sơ:", error);
            return false;
        }
    }
}