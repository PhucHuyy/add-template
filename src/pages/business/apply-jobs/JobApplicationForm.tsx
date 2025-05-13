import { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = ({ onClose }) => {
  const [selectedCVOption, setSelectedCVOption] = useState('existing');
  const [selectedCV, setSelectedCV] = useState(null);

  const [cvList] = useState([
    'Nguyễn Huy Phúc - Intern Software Developer',
    'JavaDeveloper_Nguyễn Huy Phúc',
    'NguyenHuyPhuc_Java Developer',
  ]);

  const handleCVOptionChange = (option) => {
    setSelectedCVOption(option);
  };

  const handleSubmit = () => {
    // Handle submission logic
    console.log('Submitted application');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="job-application-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header cố định */}
        <div className="application-header sticky-header">
          <h1>
            <span className="text-normal">Apply </span>
            <span className="text-green">Intership Job</span>
          </h1>
          <button className="close-button" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="application-body-scrollable">
          <div className="section">
            <div className="section-header">
              <div className="icon-circle">
                <i className="fas fa-check"></i>
              </div>
              <span>Select CV to apply</span>
            </div>

            <div className="cv-option-box active-option">
              <div className="option-row">
                <div className="radio-container">
                  <div
                    className={`radio-button ${
                      selectedCVOption === 'existing' ? 'selected' : ''
                    }`}
                    onClick={() => handleCVOptionChange('existing')}
                  >
                    {selectedCVOption === 'existing' && (
                      <div className="radio-inner"></div>
                    )}
                  </div>
                </div>
                <div className="option-content">
                  <p className="text-green">
                    Select another CV from my CV library
                  </p>
                  <p className="cv-online-label">CV Online</p>

                  <div className="cv-list">
                    {cvList.map((cv, index) => (
                      <div
                        key={index}
                        className={`cv-item ${
                          selectedCV === cv ? 'selected-cv' : ''
                        }`}
                        onClick={() => setSelectedCV(cv)}
                      >
                        {cv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="warning-box">
              <div className="warning-content">
                <div className="warning-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                  <p className="warning-title">Note:</p>
                  <ol className="warning-list">
                    <li>
                      JobStock recommends that all of you should always be
                      careful in the job search process and proactively research
                      information about the company and the job position before
                      applying. Candidates need to be responsible for their
                      application behavior. If you encounter a job posting or
                      receive suspicious contact from a recruiter, please report
                      it immediately to TopCV via email{' '}
                      <span className="text-green">hotro@jobstock.vn</span> for
                      timely support.
                    </li>
                    <li>
                      Learn more about fraud prevention{' '}
                      <span className="text-green">at here</span>.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-buttons sticky-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
