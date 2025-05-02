import axiosBusiness from '../../api/axiosBusiness';
import { AxiosResponse } from 'axios';

interface UploadImageResponse {
  code: number;
  message: string;
  data: ImageBusiness[];
}

export interface ImageBusiness {
  imageId: string;
  businessId: string;
  ImageUrl: string;
  isDeleted: string;
  updatedAt: string;
}

export const uploadBusinessImages = async (
  files: File[],
): Promise<UploadImageResponse> => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response: AxiosResponse<UploadImageResponse> =
      await axiosBusiness.post(
        '/business/images/upload',
        formData,
        //     , {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   }
      );

    return response.data;
  } catch (error: any) {
    console.error('Error uploading business images:', error);
    throw new Error(error.response?.data?.message || 'Image upload failed');
  }
};
