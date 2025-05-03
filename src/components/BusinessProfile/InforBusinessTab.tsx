import { useEffect, useState } from 'react';
import { getMyBusiness } from '../../service/business/MyBusinessService';
import {
  deleteBusinessImage,
  getBusinessImages,
} from '../../service/business/imageBusinessService';
import Swal from 'sweetalert2';

import '../../pages/identity/user/business/BusinessProfile.css';
import Loading from '../../common/Loading';

const InformationTab = ({ isApproved }) => {
  const [businessInfo, setBusinessInfo] = useState(null);
  const [businessImages, setBusinessImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await getMyBusiness();
        setBusinessInfo(response.data);
        console.log(response.data);
      } catch (err: any) {
        if (err.message?.includes('not found')) {
          setBusinessInfo(null); // chưa có business
        } else {
          setError(err.message || 'Error fetching business info');
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchImages = async () => {
      try {
        const images = await getBusinessImages();
        setBusinessImages(images);
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchBusiness();
    fetchImages();
  }, []);

  const handleDeleteImage = async (imageId: string) => {
    const result = await Swal.fire({
      title: 'Are you sure you want to delete this image?',
      text: 'The image will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      width: '500px',
      customClass: {
        confirmButton: 'btn-confirm',
        cancelButton: 'btn-cancel',
      },
    });

    if (result.isConfirmed) {
      try {
        await deleteBusinessImage(imageId);
        Swal.fire({
          icon: 'success',
          title: 'Delete image successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate('/profile');
        }, 1500);

        const updatedImages = await getBusinessImages();
        setBusinessImages(updatedImages);
      } catch (error) {
        toast.error('Failed to delete photo');
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="tab-pane active">
      <h3>Business Information</h3>
      <div className="business-info-container">
        <div className="business-details">
          <h4>Company Information</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Company Name</strong>
                </td>
                <td>{businessInfo?.companyName || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Industry</strong>
                </td>
                <td>{businessInfo?.industry || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Company Info</strong>
                </td>
                <td>{businessInfo?.companyInfo || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Website URL</strong>
                </td>
                <td>{businessInfo?.websiteUrl || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax Code</strong>
                </td>
                <td>{businessInfo?.taxCode || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Email</strong>
                </td>
                <td>{businessInfo?.email || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Phone Number</strong>
                </td>
                <td>{businessInfo?.phoneNumber || '-'}</td>
              </tr>
              <tr>
                <td>
                  <strong>Address</strong>
                </td>
                <td>{businessInfo?.address || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {businessImages.length > 0 ? (
          <div className="image-gallery">
            {businessImages.map((image, index) => (
              <div key={index} className="image-card">
                <img
                  src={image.imageUrl}
                  alt={`Business Image ${index + 1}`}
                  onClick={() => setSelectedImage(image.imageUrl)}
                  style={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                {isApproved && (
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteImage(image.imageId)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No images available.</p>
        )}

        {selectedImage && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <img
              src={selectedImage}
              alt="Full View"
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                objectFit: 'contain',
                borderRadius: '0px',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationTab;
