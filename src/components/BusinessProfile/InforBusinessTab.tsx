import { useEffect, useState } from 'react';
import { getMyBusiness } from '../../service/user/getMyBusinessService';
import { getBusinessImages } from '../../service/user/getImageBusinessService';
import '../../pages/identity/user/business/BusinessProfile.css';
import Loading from '../../common/Loading';

const InformationTab = () => {
  const [businessInfo, setBusinessInfo] = useState(null);
  const [businessImages, setBusinessImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  console.log(businessImages);

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
                <img src={image.imageUrl} alt={`Business Image ${index + 1}`} />
              </div>
            ))}
          </div>
        ) : (
          <p>No images available.</p>
        )}
      </div>
    </div>
  );
};

export default InformationTab;
