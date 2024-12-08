import Image from 'next/image';
import React from 'react';
import aboutThumb from "@/assets/img/about/aboutimg.jpg";
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                   
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Empowering Your Financial Future</div>
                            <h2 className="title mb-25">Strategic Consulting for Today’s Business Challenges</h2>
                            <p>
                                At Fintech Shield Solutions, we aim to provide transformative financial and IT strategies. We understand your unique challenges and deliver tailored solutions to ensure business growth, security, and efficiency.
                            </p>
                            <p>
                                Fintech Shield Solution LLC is poised to become a premier provider of anti-money laundering (AML), financial risk management, and compliance advisory services in the United States. Focused on supporting businesses across various sectors, Fintech Shield Solution LLC offers specialized expertise in combating financial crimes, enhancing regulatory compliance, and providing tailored financial advisory services.
                            </p>
                            {/* <div className="owner-info">
                                <div className="left-info">
                                    <h4>Richard Garrett</h4>
                                    <span>CEO & Founder</span>
                                </div>
                                <div className="right-info">
                                    <Image src={signatureThumb} alt="Signature" />
                                </div>
                            </div> */}
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="About Image" />
                                <About1Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;
