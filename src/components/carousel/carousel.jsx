import { useState, useEffect } from "react";
import Poster from "./poster";
import Container from "./container";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import DivCarousel from "./divCarousel";
import Information from "./information";

const baseURL = "https://api.themoviedb.org/3/trending/all/week?api_key=253799727221b7a1aa90c66eb08832a0";
const poster = "https://image.tmdb.org/t/p/w1280"

function Carousel() {

    const [post, setPost] = useState();
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data.results);
        });
        console.log(post)
    }, [] );

    return(
        <Container>
            <Swiper 
                spaceBetween={20}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]} 
                className="mySwiper">  
                    { post?.slice(0, 7).map((trend) => 
                        <SwiperSlide>
                            <DivCarousel>
                                <Information>
                                    <h1>{`${trend.title || trend.name}`}</h1>
                                    <p>Sinopse: {`${trend.overview}`}</p>
                                    <h4>Release Date: {`${trend.release_date || trend.first_air_date}`}</h4>
                                    <p>Nota: {`${trend.vote_average}`}</p>
                                </Information>
                                <Poster src={`${poster}${trend.backdrop_path}`}></Poster>
                            </DivCarousel>
                        </SwiperSlide>
                    )}
            </Swiper>
        </Container>
    )

}

export default Carousel;