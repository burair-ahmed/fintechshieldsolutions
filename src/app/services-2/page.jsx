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
        "id": "software-development-integration",
        "thumb": "2.jpg",
        "thumbFull": "2-full.jpg",
        "title": "Software Development & Integration",
        "icon": "flaticon-budget",
        "text": "Tailored software solutions and seamless integrations to optimize workflows and enhance your operations.",
        "btnText": "Learn More"
    },
    {
        "id": "cybersecurity-services",
        "thumb": "3.jpg",
        "thumbFull": "3-full.jpg",
        "title": "Cybersecurity Services",
        "icon": "flaticon-bar-chart",
        "text": "Comprehensive protection for your systems and data against evolving cyber threats.",
        "btnText": "Learn More"
    },
    {
        "id": "it-training-support",
        "thumb": "4.jpg",
        "thumbFull": "4-full.jpg",
        "title": "IT Training & Support",
        "icon": "flaticon-laptop",
        "text": "Expert IT training and ongoing support to empower your team with essential skills and knowledge.",
        "btnText": "Explore Services"
    },
    {
        "id": "network-services",
        "thumb": "3.jpg",
        "thumbFull": "3-full.jpg",
        "title": "Network Services",
        "icon": "flaticon-server",
        "text": "Reliable network setup and management for seamless connectivity and optimal performance.",
        "btnText": "Learn More"
    },
    {
        "id": "data-backup-recovery",
        "thumb": "4.jpg",
        "thumbFull": "4-full.jpg",
        "title": "Data Backup & Disaster Recovery",
        "icon": "flaticon-cloud-storage",
        "text": "Secure data backup solutions and fast recovery to protect your business from data loss and downtime.",
        "btnText": "Learn More"
    },
    {
        "id": "bookkeeping",
        "thumb": "4.jpg",
        "thumbFull": "4-full.jpg",
        "title": "Bookkeeping & Accounting",
        "icon": "flaticon-credit-cards",
        "text": "Reliable bookkeeping and accounting services to keep your finances organized and compliant.",
        "btnText": "Explore Services"
    },
    {
        "id": "audit",
        "thumb": "2.jpg",
        "thumbFull": "2-full.jpg",
        "title": "Audit Services",
        "icon": "flaticon-calculator",
        "text": "Thorough audits to ensure compliance, assess financial health, and uncover growth opportunities.",
        "btnText": "Learn More"
    },
    {
        "id": "anti-money-laundering",
        "thumb": "3.jpg",
        "thumbFull": "3-full.jpg",
        "title": "Anti-Money Laundering (AML)",
        "icon": "flaticon-shield",
        "text": "Comprehensive anti-money laundering solutions to safeguard your business and meet regulatory requirements.",
        "btnText": "Learn More"
    },
    {
        "id": "tax",
        "thumb": "4.jpg",
        "thumbFull": "4-full.jpg",
        "title": "Tax Services",
        "icon": "flaticon-tax",
        "text": "Expert tax planning and preparation to minimize liabilities and ensure compliance with tax laws.",
        "btnText": "Explore Services"
    },
    {
        "id": "special-assignments",
        "thumb": "2.jpg",
        "thumbFull": "2-full.jpg",
        "title": "Special Assignments",
        "icon": "flaticon-special-assignment",
        "text": "Tailored solutions for unique business needs, including project management and consultancy for special assignments.",
        "btnText": "Learn More"
    },
    {
        "id": "consulting-advisory",
        "thumb": "3.jpg",
        "thumbFull": "3-full.jpg",
        "title": "Consulting & Advisory",
        "icon": "flaticon-bar-chart",
        "text": "Expert consulting to guide your IT and financial strategy, helping you make informed decisions and drive growth.",
        "btnText": "Get Advice"
    }
];

export const metadata = {
    title: "Fintech Shield Solutions - Services"
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
                <ProcessStyle1 />
                {/* <PartnerStyle1 sectionClass="default-padding bg-gray" />
                <TeamStyle1 teamTitle={true} /> */}
                <RequestCallStyle1 />
                {/* <TestimonialStyle1 /> */}
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;
