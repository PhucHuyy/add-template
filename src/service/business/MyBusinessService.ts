import axiosBusiness from '../../api/axiosBusiness'; // import axiosBusiness đã cấu hình
import { AxiosResponse } from 'axios';

interface MyBusinessResponse {
  success: boolean;
  message: string;
  data: any;
}

export const getMyBusiness = async () => {
  try {
    const response: AxiosResponse<MyBusinessResponse> = await axiosBusiness.get(
      'business/me',
    );
    return response.data;
  } catch (error: any) {
    console.error('Error fetching business info:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const updateBusiness = async (data: any) => {
  try {
    const response: AxiosResponse<MyBusinessResponse> = await axiosBusiness.put(
      'business/update',
      data,
    );
    return response.data;
  } catch (error: any) {
    console.error('Error updating business info:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
