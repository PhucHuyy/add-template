import axiosPrivateProfileServcie from "../../../api/axiosPrivateProfileServcie";
import { ApiResponse } from "../../../features/auth/authType";

export class CvDTOForCreate {
    title: string;
    cvDetail: string;

    constructor(title: string, cvDetail: string) {
        this.title = title;
        this.cvDetail = cvDetail;
    }
}

export class CvDTOForUpdate {
    cvId: string;
    title: string;
    cvDetail: string;

    constructor(cvId: string, title: string, cvDetail: string) {
        this.cvId = cvId;
        this.title = title;
        this.cvDetail = cvDetail;
    }
}

export class CvDTO {
    cvId: string;
    studentId: string;
    title: string;
    cvDetail: string;
    createdAt: Date;
    status: "draft" | "published";
    isDeleted: boolean;

    constructor(
        cvId: string,
        studentId: string,
        title: string,
        cvDetail: string,
        createdAt: Date,
        status: "draft" | "published",
        isDeleted: boolean
    ) {
        this.cvId = cvId;
        this.studentId = studentId;
        this.title = title;
        this.cvDetail = cvDetail;
        this.createdAt = createdAt;
        this.status = status;
        this.isDeleted = isDeleted;
    }

    getCvId(): string {
        return this.cvId;
    }

    setCvId(value: string): void {
        this.cvId = value;
    }

    getStudentId(): string {
        return this.studentId;
    }

    setStudentId(value: string): void {
        this.studentId = value;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(value: string): void {
        this.title = value;
    }

    getCvDetail(): string {
        return this.cvDetail;
    }

    setCvDetail(value: string): void {
        this.cvDetail = value;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    setCreatedAt(value: Date): void {
        this.createdAt = value;
    }

    getStatus(): "draft" | "published" {
        return this.status;
    }

    setStatus(value: "draft" | "published"): void {
        this.status = value;
    }

    getIsDeleted(): boolean {
        return this.isDeleted;
    }

    setIsDeleted(value: boolean): void {
        this.isDeleted = value;
    }
}



export class ManageCv {
    async getCvByUserId(search?: string): Promise<CvDTO[]| null> {
        try {
            const response = await axiosPrivateProfileServcie.get<ApiResponse<CvDTO[]>>("/cv/getcvByid", {
                params: { search: search || "" },
            });
            return response.data.data;
        } catch (error) {
            console.error("❌ Failed to fetch CVs:", error);
            return null;
        }
    }

    async createCv(dto: CvDTOForCreate): Promise<boolean> {
        try {
            const response = await axiosPrivateProfileServcie.post<ApiResponse<string>>("/cv/create", dto);
            // API trả về: ApiResponse<String> nên lấy data.data
            response.data.data as string;
            return true
        } catch (error) {
            console.error("❌ Lỗi khi tạo CV:", error);
            return false;
        }
    }

    async deleteCv(cvid: string): Promise<string> {
        try {
            const response = await axiosPrivateProfileServcie.delete<ApiResponse<string>>(`/cv/delete/${cvid}`);
            return response.data.data; // trả về message hoặc ID tùy backend
        } catch (error) {
            console.error("❌ Lỗi khi xoá CV:", error);
            throw error;
        }
    }

    async updateCv(dto: CvDTOForUpdate): Promise<string> {
        try {
            const response = await axiosPrivateProfileServcie.put<ApiResponse<string>>("/cv/update", dto);
            return response.data.data; // Trả về message hoặc ID tuỳ backend
        } catch (error) {
            console.error("❌ Lỗi khi cập nhật CV:", error);
            throw error;
        }
    }

    async uploadCvFile(file: File): Promise<string> {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axiosPrivateProfileServcie.post<{
                fileId: string;
                url: string;
                [key: string]: any;
            }>("/cv/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });


            const fileUrl = response.data.url; // ✅ Không cần parse
            return fileUrl;

        } catch (error) {
            console.error("❌ Upload CV file thất bại:", error);
            throw error;
        }
    }
}