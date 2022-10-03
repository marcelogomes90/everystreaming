import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Container from "./container";
import Image from "./image";
import ImageLink from "./link";
import Title from "./title";
import axios from "axios";
import Modal from "../modal/modal";
import "swiper/css";
import "swiper/css/navigation";

const baseURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR";
const imageURL = "https://image.tmdb.org/t/p/w500"

function PopularMovies() {

    const [post, setPost] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [movieId, setMovieId] = useState('');

    const showModal = (event) => {
      setModalOpen(true);
      setMovieId(event.target.id);
    }
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data.results);
        });
    }, [] );

    return(
        <>
            <Title>Filmes Pupulares</Title>
            <Container>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
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
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    { post?.map((movie) =>
                        <SwiperSlide>
                            <ImageLink>
                                <Image 
                                  id={`${movie.id}`}
                                  onClick={(event) => showModal(event)}
                                  src={`${imageURL}${movie.poster_path}`}
                                  alt={`${movie.title}`}
                                >
                                </Image>
                            </ImageLink>
                    </SwiperSlide>
                    )}
                </Swiper>
                { modalOpen ? <Modal setModalOpen={setModalOpen} movieId={movieId} setMovieId={setMovieId}></Modal> : null }
            </Container>           
        </>   
    )

}

export default PopularMovies;