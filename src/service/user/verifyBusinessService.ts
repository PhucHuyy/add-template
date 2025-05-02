import axiosBusiness from '../../api/axiosBusiness';
import { AxiosResponse } from 'axios';

interface VerifyBusinessResponse {
  success: boolean;
  message: string;
  data: any;
}

export const verifyBusiness = async (
  businessData: any,
): Promise<VerifyBusinessResponse> => {
  try {
    const response: AxiosResponse<VerifyBusinessResponse> =
      await axiosBusiness.post('/business/verify', businessData);
    return response.data;
  } catch (error: any) {
    console.error('Error verifying business:', error);
    throw new Error(error.response?.data?.message || 'Đã có lỗi xảy ra');
  }
};
