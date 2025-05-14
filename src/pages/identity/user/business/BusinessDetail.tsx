import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BusinessProfilesDTO } from '../../../../services/admin/ListBussinessAccountService';
import { BusinessDetailService, JobPostingsResponseDTO } from '../../../../service/business/BusinessDetailService';
import { responsiveFontSizes } from '@mui/material';
import Error404 from '../../../Error404';

export default function BusinessDetail() {
    const { id } = useParams();
    const [selectedBusiness, setselectedBusiness] = useState<BusinessProfilesDTO | null>(null);

    const [pageIndex, setpageIndex] = useState<number>(1);
    const [pageSize, setpageSize] = useState<number>(10);
    const [ListJob, setListJob] = useState<JobPostingsResponseDTO[] | null>(null);

    const [totalPage, settotalPage] = useState<number>(0);

    console.log(id);
    useEffect(() => {
        const getdetails = async () => {
            const service = new BusinessDetailService();
            const response = await service.GetBusinessDetail(id);
            setselectedBusiness(response);
            console.log(response);
        }

        getdetails();

        const getListJob = async () => {
            const service = new BusinessDetailService();
            const response = await service.GetListJob(id, pageIndex, pageSize);
            setListJob(response?.data ?? []);
            settotalPage(response?.totalPages ?? 0);
            setpageIndex(response?.currentPage ?? 1);
            console.log(response);
        }
        getListJob();

    }, [])

    if (selectedBusiness === null) {
        return (
            <div>
                <Error404 />
            </div>
        );
    }

    async function handleSearchpaging(arg0: number) {
        if (arg0 < 1) {
            return;
        }
        setpageIndex(arg0);
        const service = new BusinessDetailService();
        const response = await service.GetListJob(id, pageIndex, pageSize);
        setListJob(response?.data ?? []);
        settotalPage(response?.totalPages ?? 0);
        setpageIndex(response?.currentPage ?? 1);
        console.log(response);
    }

    return (
        <>
            <div className="clearfix"></div>

            <section className="inner-header-title" style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}>
                <div className="container">
                    <h1>{selectedBusiness?.companyName}</h1>
                </div>
            </section>
            <div className="clearfix"></div>

            <section className="detail-desc">
                <div className="container white-shadow">
                    <div className="row bottom-mrg">

                        <div className="col-md-5 col-sm-5">
                            <div className="detail-desc-caption">
                                <h4>{selectedBusiness?.companyName}</h4>
                                <span className="designation">{selectedBusiness.industry}</span>
                                <p>{selectedBusiness.createdAt.split('T')[0]}</p>
                            </div>
                        </div>

                        <div className="col-md-7 col-sm-7">
                            <div className="get-touch">
                                <h4>Get in Touch</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i><span>{selectedBusiness.address}</span></li>
                                    <li><i className="fa fa-envelope"></i><span>{selectedBusiness.email}</span></li>
                                    <li><i className="fa fa-globe"></i><span>{selectedBusiness.websiteUrl}</span></li>
                                    <li><i className="fa fa-phone"></i><span>{selectedBusiness.phoneNumber}</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row no-padd">
                        <div className="detail pannel-footer">

                            <div className="col-md-5 col-sm-5">

                            </div>

                            <div className="col-md-7 col-sm-7">

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="full-detail-description full-detail">
                <div className="container">
                    <div className="row row-bottom">
                        <h2 className="detail-title">About Company</h2>
                        <p>{selectedBusiness.companyInfo}</p>
                    </div>
                    <div className="row row-bottom">
                        <h2 className="detail-title">List job of company</h2>

                        {ListJob ? (ListJob.map((job) => {
                            return (<article>
                                <div className="brows-job-list">
                                    <div className="col-md-1 col-sm-2 small-padding">
                                        <div className="brows-job-company-img">
                                            <a href="job-detail.html">
                                                <img
                                                    src={job.avatarUrl}
                                                    style={{ height: '80px', width: '90px', borderRadius: '50%' }}
                                                    className="img-responsive img-circle"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-5">
                                        <div className="brows-job-position">
                                            <a href="job-apply-detail.html">
                                                <h3>{job.title}</h3>
                                            </a>
                                            <p>
                                                <span>{job.companyName}</span>
                                                <span className="brows-job-sallery">
                                                    <i className="fa fa-money" />
                                                    {job.salary}
                                                </span>
                                                <span className="job-type cl-success bg-trans-success">
                                                    Full Time
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="brows-job-location">
                                            <p>
                                                <i className="fa fa-map-marker" />
                                                {job.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        <div
                                            className="brows-job-link"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '10px',
                                            }}
                                        >
                                            <button
                                                className="btn"
                                                style={{
                                                    backgroundColor: '#f8f9fa',
                                                    color: '#000',
                                                    border: '1px solid #ccc',
                                                    padding: '10px 15px',
                                                    borderRadius: '4px',
                                                    transition:
                                                        'background-color 0.3s ease, color 0.3s ease',
                                                    cursor: 'pointer',
                                                    flex: 1,
                                                }}
                                                onMouseOver={(e) => {
                                                    const target = e.target as HTMLElement;
                                                    target.style.backgroundColor = '#07b107';
                                                    target.style.color = '#fff';
                                                }}
                                                onMouseOut={(e) => {
                                                    const target = e.target as HTMLElement;
                                                    target.style.backgroundColor = '#f8f9fa';
                                                    target.style.color = '#000';
                                                }}
                                            >
                                                Apply Now
                                            </button>

                                            <button
                                                className="btn"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    color: '#dc3545',
                                                    border: '2px solid #dc3545',
                                                    padding: '10px',
                                                    borderRadius: '50%',
                                                    width: '42px',
                                                    height: '42px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'border-color 0.3s ease',
                                                    cursor: 'pointer',
                                                }}
                                                onMouseOver={(e) => {
                                                }}
                                                onMouseOut={(e) => {

                                                }}
                                                title="Save Job"
                                            >
                                                <i className="fa fa-heart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {job.isUrgentRecruitment ? (<span className="tg-themetag tg-featuretag">Premium</span>) : ("")}

                            </article>)
                        })) : (<p>List job no items</p>)}

                        {ListJob ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: '15px' }}>
                            <span
                                style={{
                                    color: 'gray',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    border: '2px solid #ddd',
                                    marginRight: '10px',
                                    width: '37px',
                                    textAlign: 'center'
                                }}
                                onClick={async () => {
                                    // Your async logic here
                                    await handleSearchpaging(pageIndex - 1);
                                    // Other logic (if necessary)
                                }}
                            >
                                &lt;
                            </span>
                            <span
                                style={{
                                    fontSize: '16px',
                                    marginRight: '10px',
                                    color: 'gray'
                                }}
                            >
                                {pageIndex} / {totalPage} Pages
                            </span>
                            <span
                                style={{
                                    color: 'gray',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    border: '2px solid green',
                                    width: '37px',
                                    textAlign: 'center'
                                }}

                                onClick={async () => {
                                    // Your async logic here
                                    await handleSearchpaging(pageIndex + 1);
                                    // Other logic (if necessary)
                                }}
                            >
                                &gt;
                            </span>
                        </div>) : ("")}
                    </div>
                </div>
            </section>
        </>
    )
}
