import { useState, useEffect } from "react";
import Container from "./container";
import Image from "./image";
import ImageLink from "./link";
import Title from "./title";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const baseURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=253799727221b7a1aa90c66eb08832a0";
const imageURL = "https://image.tmdb.org/t/p/w500"

function PopularMovies() {

    const [post, setPost] = useState();
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data.results);
        });
    }, [] );

    return(
        <>
            <Title>Popular Movies</Title>
            <Container>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    freeMode={true}
                    grabCursor={true}
                    spaceBetween={-20}
                    breakpoints={{
                        275: {
                          slidesPerView: 2,
                        },
                        550: {
                          slidesPerView: 3,
                        },
                        930: {
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
                    { post?.map((movie) =>
                        <SwiperSlide key={movie.id}>
                            <ImageLink>
                                <Image src={`${imageURL}${movie.poster_path}`}></Image>
                            </ImageLink>
                    </SwiperSlide>
                    )}
                </Swiper>
            </Container>           
        </>   
    )

}

export default PopularMovies;