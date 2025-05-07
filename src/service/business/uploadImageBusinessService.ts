import axiosBusiness from '../../api/axiosBusiness';
//import { AxiosResponse } from 'axios';

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
): Promise<boolean> => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response =
      await axiosBusiness.post(
        '/business/images/upload',
        formData,
        //     , {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   }
      );

    console.log(response.data);
    return true;
  } catch (error: any) {
    console.error('Error uploading business images:', error);
    return false;
  }
};
