import React from 'react';
import shape21 from '@/assets/img/shape/21.png';
import Image from 'next/image';
import FeatureProgress1Data from '@/assets/jsonData/feature/FeatureProgress1Data.json';
import SingleFeatureProgress from './SingleFeatureProgress';

const FeatureStyle1 = () => {
    return (
        <>
            <div className="feature-style-one-area half-angle-shape overflow-hidden default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="feature-style-one-heading text-light">
                                <div className="arrow-shape">
                                    <Image src={shape21} alt="Image not found" />
                                </div>
                                <h2 className="title mb-25">Empowering Businesses with IT and Accounting Excellence</h2>
                                <p>
                                    At Fintech Shield Solutions LLC, we deliver tailored IT and accounting services designed 
                                    to enhance operational efficiency, ensure compliance, and drive growth.
                                </p>
                                <div className="circle-progress">
                                    {FeatureProgress1Data.map(progress =>
                                        <SingleFeatureProgress progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1 pl-60 pl-md-15 pl-xs-10 mt-md-50 mt-xs-50">
                            <div className="feature-style-one wow fadeInUp">
                                <div className="icon">
                                    <i className="flaticon-social-engagement"></i>
                                </div>
                                <div className="info">
                                    <h4>Cybersecurity Solutions</h4>
                                    <p>
                                        Protect your business with advanced cybersecurity measures, ensuring data integrity 
                                        and operational resilience.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-style-one wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                                <div className="info">
                                    <h4>Comprehensive Accounting</h4>
                                    <p>
                                        Streamline your financial processes with expert accounting services tailored 
                                        to meet your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle1;
