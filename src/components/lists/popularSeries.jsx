import Container from "./container";
import Image from "./image";
import ImageLink from "./link";
import Title from "./title";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function PopularSeries() {

    return(
        <>
            <Title>Popular Series</Title>
            <Container>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    freeMode={true}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        300: {
                          slidesPerView: 2,
                        },
                        500: {
                          slidesPerView: 3,
                        },
                        900: {
                          slidesPerView: 4,
                        },
                        1150: {
                          slidesPerView: 5,
                        },
                        1400: {
                          slidesPerView: 6,
                        },
                        1650: {
                          slidesPerView: 7,
                        },
                        1900: {
                          slidesPerView: 8,
                        },
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageLink>
                            <Image src="https://i.pinimg.com/736x/38/0a/e1/380ae144e01841bb335bd506e10f4e63.jpg"></Image>
                        </ImageLink>
                    </SwiperSlide>
                </Swiper>
            </Container>           
        </>   
    )

}

export default PopularSeries;