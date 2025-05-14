import axiosRecruitment from '../../../api/recruitment/axiosRecruitment';
import { AxiosResponse } from 'axios';

export const getAllCategories = async () => {
  try {
    const response: AxiosResponse<any[]> = await axiosRecruitment.get(
      `categories/getAllCategories`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
