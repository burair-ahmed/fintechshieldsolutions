import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';

const CybersecurityServices = () => {
    return (
        <>
            <div>
                <LayoutStyle7 breadCrumb="Service-details" title="Cybersecurity Services">
                    <div className="services-details-area overflow-hidden default-padding">
                        <div className="container">
                            <div className="services-details-items">
                                <div className="row">
                                    {/* Main Content */}
                                    <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                        <div className="thumb">
                                            <Image
                                                src={`/assets/img/service/service-2.jpg`}
                                                alt="Cybersecurity Services"
                                                width={1460}
                                                height={782}
                                            />
                                        </div>
                                        <h2>Cybersecurity Services</h2>
                                        <p>
                                            Protecting your business from evolving cyber threats is essential. Our Cybersecurity Services
                                            focus on securing your infrastructure, safeguarding data, and mitigating risks. With
                                            proactive monitoring and cutting-edge technology, we ensure the integrity, confidentiality,
                                            and availability of your systems.
                                        </p>
                                        <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="content">
                                                        <h3>Included Services</h3>
                                                        <ul className="feature-list-item">
                                                            <li>Threat Detection and Response</li>
                                                            <li>Network Security Management</li>
                                                            <li>Data Encryption and Protection</li>
                                                            <li>Compliance and Risk Assessment</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6 mt-xs-30">
                                                    <div className="content">
                                                        <h3>The Challenge</h3>
                                                        <p>
                                                            Cyber threats are constantly evolving, making it challenging to keep up with
                                                            new attack vectors. Our team provides end-to-end solutions to ensure your
                                                            business remains resilient against emerging threats.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>What We Do?</h3>
                                        <p>
                                            Our approach includes comprehensive security assessments, deploying the latest tools to
                                            detect vulnerabilities, and implementing robust defense mechanisms. We also provide
                                            continuous monitoring and incident response to ensure your business stays ahead of
                                            potential threats.
                                        </p>
                                    </div>

                                    {/* Sidebar */}
                                    <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                        <div className="single-widget services-list-widget">
                                            <h4 className="widget-title">Our Services</h4>
                                            <div className="content">
                                                <ul>
                                                    <li><Link href="/services-details/software-development-integration">Software Development and Integration</Link></li>
                                                    <li className="current-item"><Link href="/services-details/cybersecurity-services">Cybersecurity Services</Link></li>
                                                    <li><Link href="/services-details/it-training-support">IT Training and Support</Link></li>
                                                    <li><Link href="/services-details/network-services">Network Services</Link></li>
                                                    <li><Link href="/services-details/data-backup-recovery">Data Backup and Disaster Recovery</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div
                                            className="single-widget bg-dark quick-contact-widget text-light"
                                            style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}
                                        >
                                            <div className="content">
                                                <h3>Need Help?</h3>
                                                <p>
                                                    Speak with an expert today. Call our office, and we’ll connect you with the right
                                                    team member to address your needs.
                                                </p>
                                                <h2>
                                                    <a href="tel:+19452672021">+19452672021</a>
                                                </h2>
                                                <h4>
                                                    <a href="mailto:info@fintechshieldsolutions.com">info@fintechshieldsolutions.com</a>
                                                </h4>
                                                <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
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

export default CybersecurityServices;
