import { Link } from '@remix-run/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './Offers.css'
import AppleImage from '~/images/offers/apple.png'
import RealMe from '~/images/offers/realme.png'
import OfferImage1 from '~/images/offers/offer-1.png'
import OfferImage2 from '~/images/offers/offer-2.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowForward } from 'react-icons/io'

function Offers() {
    return (
        <div className='section offer-section'>
            <div className="container mx-auto">
                <div className="title-section">
                    <h3 className='title'>Shop From <span>Top Categories</span></h3>
                    <Link to="">View All <IoIosArrowForward /></Link>
                </div>

                <div className="offers">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}  // Pass the modules correctly
                        spaceBetween={30}         // Space between slides
                        slidesPerView={3}         // Number of slides visible at once
                        
                        pagination={{            // Dots
                            el: '.swiper-pagination',
                            clickable: true,       // Enable clicking on dots
                        }}
                        loop={true}               // Infinite loop of slides
                        autoplay={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item black'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item yellow'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>REALME</span>
                                        </div>
                                        <div>
                                            <img src={RealMe} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage2} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item red'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item black'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item black'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item black'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/'>
                                <div className='offer-item black'>
                                    <div className="text">
                                        <div>
                                            <span className='tag'>IPHONE</span>
                                        </div>
                                        <div>
                                            <img src={AppleImage} alt='' />
                                        </div>
                                        <p>UP to 80% OFF</p>
                                    </div>

                                    <div className="imgage">
                                        <img src={OfferImage1} className='product' alt="" />
                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>





                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination"></div>

                </div>
            </div>
        </div>
    )
}

export default Offers