import path from 'node:path';
import axiosBusiness from '../../../api/axiosBusiness';
import axiosRecruitment from '../../../api/recruitment/axiosRecruitment';
import { AxiosResponse } from 'axios';
import { promises } from 'node:dns';
import { ApiResponse } from '../../../features/auth/authType';

type UpdateCategoryResponse = {
  code: number;
  message: string;
  data: {
    categoryId: number;
    name: string;
    description: string;
    createdAt: string | null;
    updatedAt: string;
  };
};


export const getCompanyName = async (): Promise<string> =>{
  try {
    const response: AxiosResponse<any[]> = await axiosBusiness.get<ApiResponse<string>>(
      `business/getCompanyname`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
    return "";
  }
}


export const getAllCategoriesPublic = async () => {
  try {
    const response: AxiosResponse<any[]> = await axiosRecruitment.get(
      `categories/getAllCategoriespublic`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

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

export const getAllCategoriesWithPagination = async (
  offset: number,
  limit: number,
) => {
  try {
    const response: AxiosResponse<any[]> = await axiosRecruitment.get(
      `categories/getAllCategories/pagination`,
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

export const updateCategory = async (
  categoryId: number,
  name: string,
  description: string,
): Promise<UpdateCategoryResponse> => {
  try {
    const response: AxiosResponse<UpdateCategoryResponse> =
      await axiosRecruitment.put(`categories/update`, {
        categoryId,
        name,
        description,
      });

    console.log('Update category response:', response.data);
    console.log('Update category response status:', response.status);

    return response.data;
  } catch (error: any) {
    console.error('Error updating category:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const createCategory = async (name: string, description: string) => {
  try {
    const response: AxiosResponse<any[]> = await axiosRecruitment.post(
      `categories/create`,
      {
        name,
        description,
      },
    );

    return response.data;
  } catch (error: any) {
    console.error('Error creating category:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
