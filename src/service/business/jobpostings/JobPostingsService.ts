import axiosRecruitment from '../../../api/recruitment/axiosRecruitment';
import { AxiosResponse } from 'axios';

export const sendRequestCreateJob = async (jobPostingsRequestDTO: any) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.post(
      `job-postings/send-request-job-posting`,
      jobPostingsRequestDTO,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const updateJobPosting = async (jobPostingsRequestDTO: any) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/update-job-posting`,
      jobPostingsRequestDTO,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const saveDraftJob = async (jobPostingsRequestDTO: any) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.post(
      `job-postings/save-draft-job-posting`,
      jobPostingsRequestDTO,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const sendDraftJob = async (jobId: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/send-draft/${jobId}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const getListJobCreated = async () => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.get(
      `job-postings/view-list-job-created`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const getDetailJob = async (jobId: string) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.get(
      `job-postings/detail-job/${jobId}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const acceptJob = async (jobId: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/${jobId}/accept`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const rejectJob = async (
  jobId: string,
  reasonReject: string,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/${jobId}/reject`,
      { reasonReject },
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const bannedJob = async (jobId: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/${jobId}/banned`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
