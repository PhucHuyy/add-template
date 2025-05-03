import { useEffect, useState } from 'react';
import { verifyBusiness } from '../../../../service/business/verifyBusinessService';
import { getMyBusiness } from '../../../../service/business/MyBusinessService';
import { uploadBusinessImages } from '../../../../service/business/uploadImageBusinessService';
import { useNavigate } from 'react-router-dom';

import './VerifyBusinessForm.css';
import Loading from '../../../../common/Loading';
import ImagePreview from './ImagePreview';

interface BusinessData {
  companyName: string;
  industry: string;
  companyInfo: string;
  websiteUrl: string;
  taxCode: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export default function VerifyBusinessForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<File | null>(null);

  const [formData, setFormData] = useState<BusinessData>({
    companyName: '',
    industry: '',
    companyInfo: '',
    websiteUrl: '',
    taxCode: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BusinessData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  useEffect(() => {
    const checkBusinessVerified = async () => {
      try {
        const getInfoBusiness = await getMyBusiness();
        console.log(getInfoBusiness);

        if (getInfoBusiness) {
          navigate('/profile', { replace: true });
        } else {
          setLoading(false); // đã có business
        }
      } catch (error) {
        console.error('Lỗi khi kiểm tra business:', error);
        setLoading(false);
      }
    };

    checkBusinessVerified();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    for (const key in formData) {
      if (!formData[key as keyof BusinessData]) {
        newErrors[key as keyof BusinessData] = 'Không được để trống trường này';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // const result = await verifyBusiness(formData);
      // 1. Gửi dữ liệu doanh nghiệp
      await verifyBusiness(formData);

      // 2. Nếu có ảnh thì upload ảnh
      if (images.length > 0) {
        await uploadBusinessImages(images);
      }

      setTimeout(() => {
        alert('Xác thực doanh nghiệp thành công!');
      }, 3000); // giả lập delay 1 giây

      navigate('/profile');
      console.log(result);
      // bạn có thể redirect hoặc reset form tại đây
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="verify-business-container">
      <h2 className="verify-title">Verify Business</h2>
      <form className="verify-form" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            {key === 'companyInfo' || key === 'address' ? (
              <textarea
                name={key}
                id={key}
                value={value}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={key}
                id={key}
                value={value}
                onChange={handleChange}
              />
            )}
            {errors[key as keyof BusinessData] && (
              <span className="error-text">
                {errors[key as keyof BusinessData]}
              </span>
            )}
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="images">Image business</label>
          <input
            type="file"
            name="images"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <ImagePreview images={images ? [images] : []} />
        </div>

        <button type="submit" className="submit-button">
          Send request to verify
        </button>
      </form>
    </div>
  );
}
