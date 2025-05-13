import Select from 'react-select';

const options = [
  { value: 'IT', label: 'IT' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Finance', label: 'Finance' },
];

export default function CreateJobPosting() {
  return (
    <>
      <div>
        <div className="clearfix"></div>

        <section
          className="inner-header-title"
          style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
        >
          <div className="container">
            <h1>Create Job</h1>
          </div>
        </section>
        <div className="clearfix"></div>

        <section className="full-detail">
          <div className="container">
            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Job Requirement</h2>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-flag" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa-solid fa-heading" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-pencil" />
                    </span>
                    <div style={{ flex: 1, height: '50px' }}>
                      <Select
                        options={options}
                        isMulti
                        placeholder="Select Job Categories"
                        // value={selectedOptions}
                        // onChange={setSelectedOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          control: (base) => ({
                            ...base,
                            minHeight: '50px',
                            height: '50px',
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            height: '50px',
                            paddingTop: '0',
                            paddingBottom: '0',
                          }),
                          input: (base) => ({
                            ...base,
                            margin: '0px',
                            padding: '0px',
                          }),
                          multiValue: (base) => ({
                            ...base,
                            margin: '2px',
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number of Employees"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-map-marker" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa-solid fa-bell" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Is Urgent Recruitment?"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa-solid fa-calendar" />
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="expiration date"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa-solid fa-dollar-sign" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Salary"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Job Description</h2>
                <div className="col-md-12 col-sm-12">
                  <textarea
                    className="form-control textarea"
                    placeholder="About Job"
                    defaultValue={''}
                  />
                </div>
                <div
                  className="col-md-12 col-sm-12"
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <button
                    className="btn small-btn"
                    style={{
                      backgroundColor: '#07b107',
                      color: 'white',
                      border: 'none',
                      minWidth: '200px',
                      height: '60px',
                      fontSize: '16px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = '#218838')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = '#07b107')
                    }
                  >
                    Send Create Job
                  </button>

                  <button
                    className="btn small-btn"
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      minWidth: '200px',
                      height: '60px',
                      fontSize: '16px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = '#1e7e34')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = '#28a745')
                    }
                  >
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
