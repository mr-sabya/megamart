import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/swiper-bundle.css';

import './Slider.css'
import Shape from '~/images/banner-shape.png'
import BannerImage1 from '~/images/banner-image-1.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Slider() {
    return (
        <div className="banner-area">

            <div className='container mx-auto'>
                <div className='banner'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}  // Pass the modules correctly
                        spaceBetween={50}         // Space between slides
                        slidesPerView={1}         // Number of slides visible at once
                        navigation={{            // Arrow buttons
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{            // Dots
                            el: '.swiper-pagination',
                            clickable: true,       // Enable clicking on dots
                        }}
                        loop={true}               // Infinite loop of slides
                        autoplay={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='banner-item'>
                                <div className="text">
                                    <p>Best Deal Online on smart watches</p>
                                    <h2>SMART WEARABLE.</h2>
                                    <p>UP to 80% OFF</p>
                                </div>

                                <div className="imgage">
                                    <img src={BannerImage1} className='product' alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='banner-item'>
                                <div className="text">
                                    <p>Best Deal Online on smart watches</p>
                                    <h2>SMART WEARABLE.</h2>
                                    <p>UP to 80% OFF</p>
                                </div>

                                <div className="imgage">
                                    <img src={BannerImage1} className='product' alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='banner-item'>
                                <div className="text">
                                    <p>Best Deal Online on smart watches</p>
                                    <h2>SMART WEARABLE.</h2>
                                    <p>UP to 80% OFF</p>
                                </div>

                                <div className="imgage">
                                    <img src={BannerImage1} className='product' alt="" />
                                </div>

                            </div>
                        </SwiperSlide>



                    </Swiper>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination"></div>
                    <img src={Shape} className='shape' alt="" />
                </div>

            </div>
        </div>
    )
}

export default Slider