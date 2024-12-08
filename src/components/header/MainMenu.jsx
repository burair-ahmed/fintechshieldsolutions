import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="/" className="active" >Home</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/">Consulting Business</Link></li>
                        <li><Link href="/home2">Corporate Business</Link></li>
                        <li><Link href="/marketing-agency">Marketing Agency</Link></li>
                        <li><Link href="/insurance">Insurance</Link></li>
                        <li><Link href="/solar-energy">Solar Energy</Link></li>
                        <li><Link href="/software-landing">Software Landing</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown">
                    <Link href="/about-us" className="" data-toggle="dropdown" >About Us</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul> */}
                </li>
                {/* <li className="dropdown">
                    <Link href="project" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/project">Project style one</Link></li>
                        <li><Link href="/project-details/1">Project Details</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link href="/services" className="dropdown-toggle" data-toggle="dropdown" >Services</Link>
                    <ul className='dropdown-menu'>
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
            </ul>
                </li>
                {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;