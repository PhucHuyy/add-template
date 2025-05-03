import './BusinessProfile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { useEffect, useState } from 'react';
import { getMyBusiness } from '../../../../service/business/MyBusinessService';

import AboutTab from '../../../../components/BusinessProfile/AboutTab';
import ProfileOverview from '../../../../components/BusinessProfile/ProfileOverview';
import BusinessVerifyNotice from './BusinessVerifyNotice';
import InformationTab from '../../../../components/BusinessProfile/InforBusinessTab';
import Loading from '../../../../common/Loading';
import Error404 from '../../../Error404';
import { useDispatch } from 'react-redux';
import { fetchBusinessInfo } from '../../../../features/auth/businessSlice';

export default function UserProfile() {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('about');
  // const [business, setBusiness] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.auth.user);
  const business = useSelector((state: RootState) => state.business.data);
  const isApproved = useSelector(
    (state: RootState) => state.business.isApproved,
  );
  const status = useSelector((state: RootState) => state.business.status);
  const error = useSelector((state: RootState) => state.business.error);

  useEffect(() => {
    dispatch(fetchBusinessInfo());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <>
        <Error404 />
      </>
    );
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
      <ProfileOverview
        user={user}
        isApproved={isApproved}
        business={business}
        status={status}
      />

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
              {activeTab === 'information' && (
                <InformationTab isApproved={isApproved} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
