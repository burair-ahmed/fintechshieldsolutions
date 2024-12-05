import Image from 'next/image';
import React from 'react';
import about7Thumb from '@/assets/img/about/7.jpg';
import about8Thumb from '@/assets/img/about/abc.jpg';
import anim5Shape from '@/assets/img/shape/anim-5.png';
import Link from 'next/link';

const AboutStyle2 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-style-two-area overflow-hidden bg-contain default-padding ${sectionClass ? sectionClass : ''}`}
                style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}>
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-5 about-style-two">
                            <div className="thumb">
                                {/* <Image src={about7Thumb} alt="Image Not Found" /> */}
                                <Image src={about8Thumb} alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>2+</strong> Years of Expertise</h2>
                                </div>
                                <div className="shape">
                                    <Image src={anim5Shape} alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-two col-lg-6 offset-lg-1">
                            <h2 className="title">Innovative IT & Financial Solutions</h2>
                            <p>
                                At Fintech Shield Solutions, we combine cutting-edge technology with expert financial consulting. 
                                We specialize in IT solutions, cybersecurity, accounting, and advisory services that drive growth, 
                                efficiency, and security for businesses navigating today’s challenges.
                            </p>
                            <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Custom IT Solutions</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Comprehensive Accounting</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle2;
