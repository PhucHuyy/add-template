import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function BusinessDetail() {
    const { id } = useParams();
    console.log(id);
    useEffect(() => {

    })

    return (
        <>
            <div className="clearfix"></div>

            <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
                <div className="container">
                    <h1>Company Detail</h1>
                </div>
            </section>
            <div className="clearfix"></div>

            <section className="detail-desc">
                <div className="container white-shadow">

                    <div className="row">
                        <div className="detail-pic">
                            <img src="assets/img/com-1.jpg" className="img" alt="" />
                            <a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
                        </div>
                        <div className="detail-status">
                            <span>10 Min Days Ago</span>
                        </div>
                    </div>

                    <div className="row bottom-mrg">

                        <div className="col-md-8 col-sm-8">
                            <div className="detail-desc-caption">
                                <h4>Microsoft</h4>
                                <span className="designation">Software Development Company</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="get-touch">
                                <h4>Get in Touch</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i><span>Menlo Park, CA</span></li>
                                    <li><i className="fa fa-envelope"></i><span>danieldax704@gmail.com</span></li>
                                    <li><i className="fa fa-globe"></i><span>microft.com</span></li>
                                    <li><i className="fa fa-phone"></i><span>0 123 456 7859</span></li>
                                    <li><i className="fa fa-users"></i><span>1000 -1200</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row no-padd">
                        <div className="detail pannel-footer">

                            <div className="col-md-5 col-sm-5">
                                <ul className="detail-footer-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-md-7 col-sm-7">
                                <div className="detail-pannel-footer-btn pull-right">
                                    <a href="#" className="footer-btn grn-btn" title="">Favourite</a>
                                    <a href="#" className="footer-btn blu-btn" title="">Save Draft</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="full-detail-description full-detail">
                <div className="container">
                    <div className="row row-bottom">
                        <h2 className="detail-title">About Company</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="row row-bottom">
                        <h2 className="detail-title">Company Requirement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className="detail-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                    </div>
                    <div className="row row-bottom">
                        <h2 className="detail-title">Company Policy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className="detail-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
