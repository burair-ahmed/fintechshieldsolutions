import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle2 from '@/components/about/AboutStyle2';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';
import SingleServices2 from '@/components/services/SingleServices2';

// Sample service data (ideally, this would come from an API or JSON file)
const servicesData = [
    {
        "id": "bookkeeping",
        "thumb": "keep.jpg",
        "thumbFull": "bookkeeping.jpg",
        "title": "Bookkeeping & Accounting",
        "icon": "",
        "text": "Reliable bookkeeping and accounting services to keep your finances organized and compliant.",
        "btnText": "Learn More"
    },
    {
        "id": "audit",
        "thumb": "audit.jpg",
        "thumbFull": "service-7.jpg",
        "title": "Audit Services",
        "icon": "",
        "text": "Thorough audits to ensure compliance, assess financial health, and uncover growth opportunities.",
        "btnText": "Learn More"
    },
    {
        "id": "tax",
        "thumb": "tax.jpg",
        "thumbFull": "service-9.jpg",
        "title": "Tax Services",
        "icon": "",
        "text": "Expert tax planning and preparation to minimize liabilities and ensure compliance with tax laws.",
        "btnText": "Learn More"
    },
    {
        "id": "anti-money-laundering",
        "thumb": "aml.jpg",
        "thumbFull": "aml1.jpg",
        "title": "Anti-Money Laundering (AML)",
        "icon": "",
        "text": "Comprehensive anti-money laundering solutions to safeguard your business and meet regulatory requirements.",
        "btnText": "Learn More"
    },
    {
        "id": "consulting-advisory",
        "thumb": "consulting.jpg",
        "thumbFull": "consult.jpg",
        "title": "Consulting & Advisory",
        "icon": "",
        "text": "Expert consulting to guide your IT and financial strategy, helping you make informed decisions and drive growth.",
        "btnText": "Learn More"
    },
    {
        "id": "software-development-integration",
        "thumb": "software.jpg",
        "thumbFull": "software1.jpg",
        "title": "Software Development & Integration",
        "icon": "",
        "text": "Tailored software solutions and seamless integrations to optimize workflows and enhance your operations.",
        "btnText": "Learn More"
    },
    {
        "id": "cybersecurity-services",
        "thumb": "cs.jpg",
        "thumbFull": "service-2.jpg",
        "title": "Cybersecurity Services",
        "icon": "",
        "text": "Comprehensive protection for your systems and data against evolving cyber threats.",
        "btnText": "Learn More"
    },
    {
        "id": "it-training-support",
        "thumb": "it-training.jpg",
        "thumbFull": "service-3.jpg",
        "title": "IT Training & Support",
        "icon": "",
        "text": "Expert IT training and ongoing support to empower your team with essential skills and knowledge.",
        "btnText": "Learn More"
    },
    {
        "id": "network-services",
        "thumb": "networking.jpg",
        "thumbFull": "service-4.jpg",
        "title": "Network Services",
        "icon": "",
        "text": "Reliable network setup and management for seamless connectivity and optimal performance.",
        "btnText": "Learn More"
    },
    {
        "id": "data-backup-recovery",
        "thumb": "backup.jpg",
        "thumbFull": "service-5.jpg",
        "title": "Data Backup & Disaster Recovery",
        "icon": "",
        "text": "Secure data backup solutions and fast recovery to protect your business from data loss and downtime.",
        "btnText": "Learn More"
    },
    {
        "id": "special-assignments",
        "thumb": "assign.jpg",
        "thumbFull": "service-10.jpg",
        "title": "Special Assignments",
        "icon": "",
        "text": "Tailored solutions for unique business needs, including project management and consultancy for special assignments.",
        "btnText": "Learn More"
    }
];

export const metadata = {
    title: "Fintech Shield Solutions LLC - Services"
};

const Service2Page = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Service-2" title="Our Services">
                <AboutStyle2 />
                <div className="services-area">
                    <div className="container">
                        <div className="row">
                            {servicesData.map((service) => (
                                <div className="col-lg-4 col-md-6" key={service.id}>
                                    <SingleServices2 service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <ProcessStyle1 /> */}
                {/* <PartnerStyle1 sectionClass="default-padding bg-gray" />
                <TeamStyle1 teamTitle={true} /> */}
                <RequestCallStyle1 />
                {/* <TestimonialStyle1 /> */}
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;
