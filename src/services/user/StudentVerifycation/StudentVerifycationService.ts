import { StudentVerifycation } from "./StudentVerifycation";
import axiosPrivate from "../../../api/axiosPrivate";
import axiosPrivateProfileServcie from "../../../api/axiosPrivateProfileServcie";
import { ApiResponse } from "../../../features/auth/authType";
export class StudentVerifycationService {
    private apiUrl: string = 'http://localhost:8888/api/student_profiles/create';
    //const tokenSTr = localStorage.getItem('accessToken');
    private token: string;;
    private uploadCardUrl: string = 'http://localhost:8888/api/student_profiles/uploadStudentCard';
    private sendRequestUrl = 'http://localhost:8888/api/requeststudent/sendrequest';

    constructor() {
        this.token = localStorage.getItem('accessToken') ?? '';
    }

    async createStudentProfile(profile: StudentVerifycation): Promise<boolean> {
        try {
            const response = await axiosPrivateProfileServcie.post<ApiResponse<StudentVerifycation>>('/student_profiles/create', profile);

            const apiResponse = response.data;

            if (response.status === 200 && apiResponse.code === 200) {
                console.log('✅ Profile created successfully:', apiResponse.data);
                return true;
            } else {
                console.error(`❌ API error: ${apiResponse.message || 'Unknown error'}`);
                return false;
            }
        } catch (error) {
            console.error('❌ Failed to create student profile:', error);
            return false;
        }
    }

    async uploadAvatar(file: File): Promise<string | null> {
        try {
            const formData = new FormData();
            formData.append('file', file); // key đúng là "file"

            const response = await axiosPrivateProfileServcie.post<string>(
                '/student_profiles/uploadAvatar',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.status === 200) {
                console.log('✅ Avatar uploaded successfully:', response.data);
                const responseText = response.data;
                const result = JSON.parse(responseText);
                console.log('✅ Avatar uploaded successfully:', result);
                return result.url || null; // nếu server trả về { url: '...' }

            } else {
                console.error('❌ Upload failed with status or data:', response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error('❌ Upload error:', error);
            return null;
        }
    }


    async uploadStudentCard(files: File[]): Promise<string[] | null> {
        try {
            const formData = new FormData();
            files.forEach(file => {
                formData.append('files', file); // phải đúng key `files`
            });

            const response = await axiosPrivateProfileServcie.post<string>(
                '/student_profiles/uploadStudentCard',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.status === 200) {
                const responseText = await response.data;
                const result = JSON.parse(responseText);
                console.log('✅ Uploaded student card result:', result);

                // Giả sử API trả về mảng các URL
                return result.urls || null;
            }

            return null;
        } catch (error) {
            console.error('❌ Upload error:', error);
            return null;
        }
    }

    async sendStudentRequest(): Promise<boolean> {
        try {
            const response = await axiosPrivateProfileServcie.post<ApiResponse<string>>('/requeststudent/sendrequest')

            if (response.status === 200) {
                const resText = await response.data;
                console.log('✅ Request sent successfully:', resText);
                return true;
            }

            return false;
        } catch (error) {
            console.error('❌ Network or unexpected error:', error);
            return false;
        }
    }

    async updateAvatarUrl(url: string): Promise<boolean> {
        try {
          const response = await axiosPrivateProfileServcie.put(`/student_profiles/updateurlavatar/${encodeURIComponent(url)}`);
      
          if (response.status === 200) {
            console.log('✅ Avatar URL updated successfully:', response.data);
            return true;
          }
      
          return false;
        } catch (error) {
          console.error('❌ Error updating avatar URL:', error);
          return false;
        }
      }
      
}