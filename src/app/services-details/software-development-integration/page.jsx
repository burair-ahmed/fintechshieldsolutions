import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
const SoftwareDevelopmentIntegration = () => {
    return (
        <><div>
 <LayoutStyle7 breadCrumb="Service-details" title="Software Development and Integration">
        
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            {/* Main Content */}
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                            <div className="thumb">
                                    <Image src={`/assets/img/service/3-full.jpg`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>Software Development and Integration</h2>
                                <p>
                                    Our Software Development and Integration services are designed to transform your unique business requirements into scalable and efficient software solutions. Whether it’s building custom applications, integrating complex systems, or automating workflows, we ensure the highest quality and performance.
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    <li>Custom Software Development</li>
                                                    <li>API Development and Integration</li>
                                                    <li>Legacy System Modernization</li>
                                                    <li>Application Maintenance</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challenge</h3>
                                                <p>
                                                    Integrating disparate systems, ensuring seamless communication, and maintaining operational efficiency can be challenging. Our team bridges the gaps between technologies, enabling your business to operate smoothly and innovate faster.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>What We Do?</h3>
                                <p>
                                    From crafting tailored software solutions to integrating existing systems, we focus on delivering value. Our approach includes thorough requirement analysis, iterative development, and rigorous testing to ensure flawless performance. We also ensure long-term scalability and support for all solutions we deliver.
                                </p>
                            </div>

                            {/* Sidebar */}
                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <div className="content">
                                        <ul>
                                            <li className="current-item"><Link href="/services-details/software-development-integration">Software Development and Integration</Link></li>
                                            <li><Link href="/services-details/cybersecurity-services">Cybersecurity Services</Link></li>
                                            <li><Link href="/services-details/it-training-support">IT Training and Support</Link></li>
                                            <li><Link href="/services-details/network-services">Network Services</Link></li>
                                            <li><Link href="/services-details/data-backup-recovery">Data Backup and Disaster Recovery</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Speak with an expert today. Call our office, and we’ll connect you with the right team member to address your needs.
                                        </p>
                                        <h2><a href="tel:+(012) 6679545">+19452672021</a></h2>
                                        <h4><a href="mailto:info@fintechshieldsolutions.com">info@fintechshieldsolutions.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div>

                                {/* <div className="single-widget widget-brochure">
                                    <h4 className="widget-title">Brochure</h4>
                                    <ul>
                                        <li><Link href="/brochure/software-development" download><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link href="/company-details" download><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LayoutStyle7>
            </div>
        </>
    );
};

export default SoftwareDevelopmentIntegration;
