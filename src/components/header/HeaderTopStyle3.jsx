import React from 'react';
import SocialShare from '../utilities/SocialShare';

const HeaderTopStyle3 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-three text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i> Plano, Texas
                                </li>
                                <li>
                                    <a href="tel:+19452672021"><i className="fas fa-phone-alt"></i> +19452672021</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle3;