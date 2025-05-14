import axiosPrivateProfileServcie from "../../api/axiosPrivateProfileServcie";
import { ApiResponse } from "../../features/auth/authType";

export class BusinessDetailService {
    async GetBusinessDetail(id: string): Promise<boolean> {
        try {

            // Gửi PUT request tới API
            const response = await axiosPrivateProfileServcie.put<ApiResponse<any>>('/v1/admin/business/ban');

            // Kiểm tra kết quả trả về
            if (response.data && response.data.code === 200) {
                console.log("Business successfully banned/unbanned.");
                return true; // Trả về true nếu thành công
            } else {
                console.error("Failed to ban/unban Business:", response.data.message);
                return false; // Trả về false nếu thất bại
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error("Error while banning/unbanning Business:", error);
            return false; // Trả về false nếu gặp lỗi
        }
    }
}