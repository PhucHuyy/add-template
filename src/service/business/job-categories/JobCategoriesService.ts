import axiosRecruitmentPublic from '../../../api/recruitment/axiosRecruitmentPublic';
import { AxiosResponse } from 'axios';

export const getJobRecommendations = async (jobId: string) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitmentPublic.get(
      `job-categories/${jobId}/recommended-jobs`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
