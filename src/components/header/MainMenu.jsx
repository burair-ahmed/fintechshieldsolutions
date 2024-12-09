import React, { useState } from 'react';
import Link from 'next/link';

const MainMenu = ({ navbarPlacement }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="/" className="active">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="/about-us" className="">About Us</Link>
                </li>
                <li className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
                  <Link href="/services" className="dropdown-toggle" onClick={toggleDropdown}>Our Services</Link>
                    <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                        <li><Link href="/services-details/software-development-integration">Software Development and Integration</Link></li>
                        <li><Link href="/services-details/cybersecurity-services">Cybersecurity Services</Link></li>
                        <li><Link href="/services-details/it-training-support">IT Training and Support</Link></li>
                        <li><Link href="/services-details/network-services">Network Services</Link></li>
                        <li><Link href="/services-details/data-backup-recovery">Data Backup and Disaster Recovery</Link></li>
                        <li><Link href="/services-details/bookkeeping">Bookkeeping</Link></li>
                        <li><Link href="/services-details/audit">Audit</Link></li>
                        <li><Link href="/services-details/tax">Tax</Link></li>
                        <li><Link href="/services-details/special-assignments">Special Assignments</Link></li>
                        <li><Link href="/services-details/anti-money-laundering">Anti-Money Laundering</Link></li>
                        <li><Link href="/services-details/consulting-advisory">Consulting & Advisory</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact-us">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;
