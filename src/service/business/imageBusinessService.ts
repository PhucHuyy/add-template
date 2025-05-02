import axiosBusiness from '../../api/axiosBusiness'; // import axiosBusiness đã cấu hình
import { AxiosResponse } from 'axios';

export const getBusinessImages = async () => {
  try {
    const response: AxiosResponse<any[]> = await axiosBusiness.get(
      `business/images/all`,
    );
    return response.data;
  } catch (error: any) {
    console.error('Error fetching business images:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const deleteBusinessImage = async (imageId: string) => {
  try {
    const response: AxiosResponse<any> = await axiosBusiness.put(
      `/business/images/delete/${imageId}`,
    );
    return response.data;
  } catch (error: any) {
    console.error('Error deleting business image:', error);
    throw new Error(error.response?.data?.message || 'Failed to delete image');
  }
};
