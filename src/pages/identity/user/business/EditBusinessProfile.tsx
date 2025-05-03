import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../app/store';
import { updateBusiness } from '../../../../service/business/MyBusinessService';
import './EditBusinessProfile.css';
import Swal from 'sweetalert2';

interface BusinessProfile {
  companyName: string;
  industry: string;
  companyInfo: string;
  websiteUrl: string;
  taxCode: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const EditBusinessProfile: React.FC = () => {
  const business = useSelector((state: RootState) => state.business.data);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<BusinessProfile>(business);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const result = await Swal.fire({
      title: 'Are you sure you want to save?',
      text: 'Data will be updated.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      width: '500px',
      customClass: {
        confirmButton: 'btn-confirm',
        cancelButton: 'btn-cancel',
      },
    });

    if (result.isConfirmed) {
      try {
        await updateBusiness(formData);
        await Swal.fire({
          title: 'Success!',
          text: 'Updated successfully.',
          icon: 'success',
          width: '500px',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      } catch (err: any) {
        console.error(err);
        await Swal.fire({
          title: 'Failed!',
          text: 'An error occurred while updating.',
          icon: 'error',
          width: '500px',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      }
    }
  };

  const handleCancel = async () => {
    const result = await Swal.fire({
      title: 'Are you sure you want to cancel?',
      text: 'The changes will not be saved.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Cancel',
      cancelButtonText: 'Go back',
      width: '500px',
      customClass: {
        confirmButton: 'btn-confirm',
        cancelButton: 'btn-cancel',
      },
    });

    if (result.isConfirmed) {
      navigate('/profile');
    }
  };

  return (
    <div
      className="edit-container"
      style={{ marginBottom: '100px', marginTop: '150px' }}
    >
      <h2>Update business information</h2>
      {/* --- Các form input giữ nguyên --- */}
      <div className="form-group">
        <label>Company Name</label>
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Industry</label>
        <input
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Company Info</label>
        <textarea
          name="companyInfo"
          value={formData.companyInfo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Website URL</label>
        <input
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tax Code</label>
        <input
          name="taxCode"
          value={formData.taxCode}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBusinessProfile;
