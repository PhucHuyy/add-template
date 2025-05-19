import axiosRecruitment from '../../../api/recruitment/axiosRecruitment';
import { AxiosResponse } from 'axios';

export const setupInterviewSchedule = async (
  interviewScheduleDTO: any,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.post(
      `interviews/setup-scheduled-interview`,
      interviewScheduleDTO,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const getInterviewScheduleListByBusinessId = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.get(
      `interviews/get-interviews-schedules/business`,
    );

    return response;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
