import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Poster from "./poster";
import Container from "./container";
import axios from "axios";
import DivCarousel from "./divCarousel";
import Information from "./information";
import Title from "./title";
import Sinopse from "./sinopse";
import "swiper/css";
import "swiper/css/pagination";

const baseURL = "https://api.themoviedb.org/3/trending/all/week?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR";
const poster = "https://image.tmdb.org/t/p/w1280"

function Carousel() {

    const [post, setPost] = useState();
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data.results);
        });
    }, [] );

    return(
        <Container>
            <Swiper 
                spaceBetween={20}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]} 
                className="mySwiper">  
                    { post?.slice(0, 9).map((trend) => 
                        <SwiperSlide>
                            <DivCarousel>
                                <Poster src={`${poster}${trend.backdrop_path}`}></Poster>
                                <Information>
                                    <Title>{`${trend.title || trend.name}`}</Title>
                                    <Sinopse>{`${trend.overview}`}</Sinopse>
                                </Information>
                            </DivCarousel>
                        </SwiperSlide>
                    )}
            </Swiper>
        </Container>
    )

}

export default Carousel;