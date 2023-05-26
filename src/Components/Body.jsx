import React from 'react'
import "./Body.css"
import chick from "../Image/download 1.jpg"
import chick2 from '../Image/chick1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Body = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
  };
  return (
    <section>
      <Swiper {...params} className='sss'>
        <SwiperSlide className='swipe5'>
          <div className='swipe-content'>
            <h1>Welcome to Khalifa Integrated Farm Nig. ltd</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet quaerat obcaecati debitis nobis enim exercitationem, reiciendis sit facere laboriosam!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe4'>
          <div className='invest'>
            <h1>Invest with Us today</h1>
            <p>We offered numbers of pocket friendly investment packages with satisfying percentage on ROI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe1'>
          <div className='swipe-content'>
            <h1>Welcome to Khalifa Integrated Farm Nig. ltd</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet quaerat obcaecati debitis nobis enim exercitationem, reiciendis sit facere laboriosam!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe2'>
          <div className='swipe-content'>
            <h1>Welcome to Khalifa Integrated Farm Nig. ltd</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet quaerat obcaecati debitis nobis enim exercitationem, reiciendis sit facere laboriosam!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe3'>
          <div className='swipe-content'>
            <h1>Welcome to Khalifa Integrated Farm Nig. ltd</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet quaerat obcaecati debitis nobis enim exercitationem, reiciendis sit facere laboriosam!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Body