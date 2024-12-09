import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';

const SpecialAssignments = () => {
    return (
        <>
            <div>
                <LayoutStyle7 breadCrumb="Service-details" title="Special Assignments">
                    <div className="services-details-area overflow-hidden default-padding">
                        <div className="container">
                            <div className="services-details-items">
                                <div className="row">
                                    {/* Main Content */}
                                    <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                        <div className="thumb">
                                            <Image
                                                src={`/assets/img/service/service-10.jpg`}
                                                alt="Thumb"
                                                width={1460}
                                                height={782}
                                            />
                                        </div>
                                        <h2>Special Assignments</h2>
                                        <p>
                                            Our Special Assignments service is designed to cater to unique and challenging business scenarios. We provide customized solutions tailored to your specific needs, ensuring a strategic approach and exceptional results.
                                        </p>
                                        <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="content">
                                                        <h3>Included Services</h3>
                                                        <ul className="feature-list-item">
                                                            <li>Risk Assessment Projects</li>
                                                            <li>Operational Audits</li>
                                                            <li>Special Investigations</li>
                                                            <li>Advisory for Complex Transactions</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6 mt-xs-30">
                                                    <div className="content">
                                                        <h3>The Challenge</h3>
                                                        <p>
                                                            Addressing one-of-a-kind challenges often requires innovative solutions and expertise across multiple domains. Our team excels in managing such complexities, providing actionable insights and effective strategies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>What We Do?</h3>
                                        <p>
                                            We collaborate closely with you to understand the nuances of your assignment. Our method involves thorough analysis, strategic planning, and precise execution to ensure objectives are met effectively. Whether it’s a one-time project or an ongoing need, we deliver solutions that drive impact.
                                        </p>
                                    </div>

                                    {/* Sidebar */}
                                    <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                        <div className="single-widget services-list-widget">
                                            <h4 className="widget-title">Our Services</h4>
                                            <div className="content">
                                                <ul>
                                                    <li><Link href="/services-details/software-development-integration">Software Development and Integration</Link></li>
                                                    <li><Link href="/services-details/cybersecurity-services">Cybersecurity Services</Link></li>
                                                    <li><Link href="/services-details/it-training-support">IT Training and Support</Link></li>
                                                    <li><Link href="/services-details/network-services">Network Services</Link></li>
                                                    <li><Link href="/services-details/data-backup-recovery">Data Backup and Disaster Recovery</Link></li>
                                                    <li><Link href="/services-details/bookkeeping">Bookkeeping</Link></li>
                                                    <li><Link href="/services-details/audit">Audit</Link></li>
                                                    <li><Link href="/services-details/anti-money-laundry">Anti-Money Laundering</Link></li>
                                                    <li><Link href="/services-details/tax">Tax Services</Link></li>
                                                    <li className="current-item"><Link href="/services-details/special-assignments">Special Assignments</Link></li>
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

export default SpecialAssignments;
