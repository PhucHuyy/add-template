import axiosBusiness from '../../api/axiosBusiness'; // import axiosBusiness đã cấu hình
import { AxiosResponse } from 'axios';

export const getBusinessImages = async () => {
  try {
    const response: AxiosResponse<any[]> = await axiosBusiness.get(
      `business/images/all`,
    );
    return response.data; // ✅ Đây là mảng luôn rồi
  } catch (error: any) {
    console.error('Error fetching business images:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
