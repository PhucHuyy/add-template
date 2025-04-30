import './BusinessProfile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { useEffect, useState } from 'react';
import { getMyBusiness } from '../../../../service/user/getMyBusinessService';

import AboutTab from '../../../../components/BusinessProfile/AboutTab';
import ProfileOverview from '../../../../components/BusinessProfile/ProfileOverview';
import BusinessVerifyNotice from './BusinessVerifyNotice';
import InformationTab from '../../../../components/BusinessProfile/InforBusinessTab';
import Loading from '../../../../common/Loading';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('about');
  const [business, setBusiness] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.auth.user);
  const businessInfo = useSelector((state: RootState) => state.business);
  const isApproved = useSelector(
    (state: RootState) => state.business.isApproved,
  );
  const status = useSelector((state: RootState) => state.business.status);

  console.log(isApproved, status, businessInfo);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await getMyBusiness();
        setBusiness(response.data); // giả sử API trả về { success, message, data: business }
        console.log(response.data);
      } catch (err: any) {
        if (err.message?.includes('not found')) {
          console.log('Business not found');
          setBusiness(null); // chưa có business
        } else {
          setError(err.message || 'Error fetching business info');
          console.log(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, []);

  console.log(business);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    ); // hoặc gọi <LoadingSpinner />
  }

  if (error) {
    return <div>Error: {error}</div>; // hoặc component lỗi riêng
  }

  if (!business) {
    return (
      <section className="verify-notice-section">
        <BusinessVerifyNotice />
      </section>
    );
  }

  return (
    <div className="business-profile-page">
      {/* Title Banner */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Business Profile</h1>
        </div>
      </section>

      {/* Profile Overview */}
      <ProfileOverview user={user} isApproved={isApproved} />

      {/* Tabs Section */}
      <section className="full-detail-description full-detail gray-bg">
        <div className="container">
          <div className="deatil-tab-employ tool-tab">
            <ul className="nav simple nav-tabs">
              <li className={activeTab === 'about' ? 'active' : ''}>
                <a href="#aboutTab" onClick={() => setActiveTab('about')}>
                  About
                </a>
              </li>
              <li className={activeTab === 'information' ? 'active' : ''}>
                <a
                  href="#infomationTab"
                  onClick={() => setActiveTab('information')}
                >
                  Information
                </a>
              </li>
            </ul>
            <div className="tab-content">
              {activeTab === 'about' && <AboutTab user={user} />}
              {activeTab === 'information' && <InformationTab />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
