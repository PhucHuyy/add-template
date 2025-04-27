import { StudentCard } from "./StudentCard";
import { StudentProfile } from "./StudentProfile";


export class RequestStudents {
    requestId: string;
    studentId: string;
    reason: string;
    sendTime: Date;
    status: 'pending' | 'approve' | 'reject';
    isDeleted: boolean;

    constructor(
        requestId: string,
        studentId: string,
        reason: string,
        sendTime: Date,
        status: 'pending' | 'approve' | 'reject',
        isDeleted: boolean
    ) {
        this.requestId = requestId;
        this.studentId = studentId;
        this.reason = reason;
        this.sendTime = sendTime;
        this.status = status;
        this.isDeleted = isDeleted;
    }
}

export class StudentProfileService {
    private apiUrl: string = 'http://localhost:8888/api/student_profiles/viewprofile';
    private token: string = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodXlidWkudm4iLCJzdWIiOiJ0aGVmbGFzaEBnbWFpbC5jb20iLCJ1aWQiOiI4YzRlMzUyZS02OWVjLTRkZjQtYWQ4OS0xM2M3MGRkYTc4NWIiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTc0NTg0MDMyOCwiaWF0IjoxNzQ1MjM1NTI4fQ.QhHnyF1MmtjbtgN8QaDHcuT5Edaq4lA8eN5qINQrKJjbrtDz2LMZat-ztpbJlo2KplaCroCOXol7RGR5Mu-so8axpNW7KdwuPxM56l6J78DaJj7IAIDbgyEmpYOAFX9-sbzHM1C8zbI972dye_CtRzD5Qq4zu4MowBm9Q69ZGRZCbc3L7cpsE-XCeziYkPCjxc2g4bvJaS7TiFQigLCJF_A3eh1jU0B4lr5THirdekmFiUohnVss7X93qsIdQRIjz3YnNtcauvgJe29DQy0_HgBMKI5IJ7ANREefMu5fo9ILMKBocLJLig4ATd5b3cCAuLznrEzBvDYa2uQvimztUg';
    private requestStudentUrl: string = 'http://localhost:8888/api/requeststudent/getrequest';

    // Hàm này sẽ gọi API và trả về dữ liệu kiểu StudentProfile
    async getStudentProfile(): Promise<StudentProfile> {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.code === 200) {
                // Chuyển đổi API response thành đối tượng StudentProfile
                const studentProfile = new StudentProfile(
                    data.data.profileId,
                    data.data.fullName,
                    data.data.major,
                    data.data.dateOfBirth,
                    data.data.address,
                    data.data.university,
                    data.data.avatarUrl,
                    data.data.academicYearStart,
                    data.data.academicYearEnd,
                    data.data.phoneNumber,
                    data.data.status,
                    data.data.createdAt,
                    data.data.updatedAt,
                    data.data.studentCardDTOS.map(
                        (card: any) => new StudentCard(card.cardId, card.studentCardUrl, card.deleted)
                    ),
                    data.data.deleted,
                    data.data.approved
                );
                console.log(studentProfile);
                return studentProfile;
            } else {
                throw new Error(data.message || 'Unexpected API error');
            }
        } catch (error) {
            console.error('Error fetching student profile:', error);
            throw error;
        }
    }

    async getRequestStudent(): Promise<RequestStudents> {
        try {
            const response = await fetch(this.requestStudentUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.code === 200) {
                const requestStudent = new RequestStudents(
                    data.data.requestId,
                    data.data.studentId,
                    data.data.reason,
                    new Date(data.data.sendTime), // parse chuỗi ISO thành Date
                    data.data.status,
                    data.data.deleted
                );
                console.log(requestStudent);
                return requestStudent;
            } else {
                throw new Error(data.message || 'Unexpected API error');
            }
        } catch (error) {
            console.error('Error fetching request student:', error);
            throw error;
        }
    }
}
