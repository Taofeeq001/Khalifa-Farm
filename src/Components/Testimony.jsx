import "./Testimony.css";
import test1 from "../Image/chick1.jpg";
import { Navigation, Pagination, Scrollbar, Ally } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
// import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";


const Testimony = ()=>{
    return(
        <Swiper className="testimony"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        Navigation
        Pagination={{clickable:true}}
        scrollbar={{draggable: false}}
        autoplay={{autoplay:true}}
        onSlideChange={()=> console.log('slide change')}
        onSwiper={(swiper)=> console.log(swiper)}
        breakpoints={{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            }

        }}
        >
            <SwiperSlide className="sim">
                <img src={test1} alt="" />
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                    <h1>Simsuraj Farm</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo .</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="sim">
                <img src={test1} alt="" />
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                    <h1>Item 7 go</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="sim">
                <img src={test1} alt="" />
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                    <h1>Kilimajaro</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo .</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="sim">
                <img src={test1} alt="" />
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                    <h1>Edinwo plaza</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="sim">
                <img src={test1} alt="" />
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                    <h1>Captain cook</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo .</p>
                </div>
            </SwiperSlide>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}
export default Testimony;