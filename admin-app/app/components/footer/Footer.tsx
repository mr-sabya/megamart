import { Link } from '@remix-run/react';
import './Footer.css'
import Logo from '~/images/white-logo.png';
import AppleStore from '~/images/apple-store.png';
import GoogleStore from '~/images/google-play.png';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

function Footer() {
    return (
        <div className='section footer'>
            <div className="container mx-auto">
                <div className="main-footer flex gap-32">
                    <div className="widget-1">
                        <Link className='logo' to='/'>
                            <img src={Logo} alt="" />
                        </Link>
                        <div className="contect-info">
                            <p className="heading">Contact Us</p>
                            <div className="contact">
                                <div className="icon">
                                    <FaWhatsapp />
                                </div>
                                <div className="text">
                                    <p>Whats App</p>
                                    <p>+1 202-918-2132</p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <LuPhoneCall />
                                </div>
                                <div className="text">
                                    <p>Call Us</p>
                                    <p>+1 202-918-2132</p>
                                </div>
                            </div>

                        </div>

                        <div className="apps mt-10">
                            <p className="heading">Download App</p>
                            <div className="flex gap-5">
                                <Link to=''>
                                    <img src={AppleStore} alt="" />
                                </Link>
                                <Link to=''>
                                    <img src={GoogleStore} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="widget-2 flex gap-32">
                        <div className="links">
                            <h4>Most Popular categories</h4>
                            <div className='bar'></div>

                            <ul>
                                <li><Link to='/'>Staples</Link></li>
                                <li><Link to='/'>Beverages</Link></li>
                                <li><Link to='/'>Personal Care</Link></li>
                                <li><Link to='/'>Home Care</Link></li>
                                <li><Link to='/'>Baby Care</Link></li>
                                <li><Link to='/'>Vegetables & Fruits</Link></li>
                                <li><Link to='/'>Snacks & Foods</Link></li>
                                <li><Link to='/'>Dairy & Bakery</Link></li>
                            </ul>
                        </div>
                        <div className="links">
                            <h4>Most Popular categories</h4>
                            <div className='bar'></div>

                            <ul>
                                <li><Link to='/'>Staples</Link></li>
                                <li><Link to='/'>Beverages</Link></li>
                                <li><Link to='/'>Personal Care</Link></li>
                                <li><Link to='/'>Home Care</Link></li>
                                <li><Link to='/'>Baby Care</Link></li>
                                <li><Link to='/'>Vegetables & Fruits</Link></li>
                                <li><Link to='/'>Snacks & Foods</Link></li>
                                <li><Link to='/'>Dairy & Bakery</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bootom-footer">
                    <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer