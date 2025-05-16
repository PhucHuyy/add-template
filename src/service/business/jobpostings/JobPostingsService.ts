import axiosRecruitment from '../../../api/recruitment/axiosRecruitment';
import axiosRecruitmentPublic from '../../../api/recruitment/axiosRecruitmentPublic';
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

export const getListJobCreated = async (offset: number, limit: number) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.get(
      `job-postings/view-list-job-created`,
      {
        params: {
          offset,
          limit,
        },
      },
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

export const getListPublicJob = async (offset: number, limit: number) => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitmentPublic.get(
      `job-postings/view-all-public-job`,
      {
        params: {
          offset,
          limit,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const hideJob = async (jobId: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/hide-job-posting/${jobId}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const unHideJob = async (jobId: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosRecruitment.put(
      `job-postings/unhide-job-posting/${jobId}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
