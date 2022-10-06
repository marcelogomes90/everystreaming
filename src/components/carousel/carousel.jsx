import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Poster from "./poster";
import Container from "./container";
import axios from "axios";
import DivCarousel from "./divCarousel";
import Information from "./information";
import Title from "./title";
import Modal from "../modal/modal";
import Sinopse from "./sinopse";
import "swiper/css";
import "swiper/css/pagination";

const baseURL = "https://api.themoviedb.org/3/trending/all/week?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR";
const poster = "https://image.tmdb.org/t/p/w1280"

function Carousel() {

    const [post, setPost] = useState();
    const [classe, setClasse] = useState();
    const [id, setId] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = (event) => {
        setClasse(event.target.className);
        setId(event.target.id);
        setModalOpen(true);
    }

    const getTrending = async () => {
        try {
            const data = await axios
            .get(baseURL)
            .then(response => {
                setPost(response.data.results);
            });
        } catch (e) {
            console.log(e)
        }
    };
    
    useEffect(() => {
        getTrending();
    }, [] );

    return(
        <Container>
            <Swiper 
                spaceBetween={20}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]} 
                className="mySwiper">  
                    { post?.slice(0, 9).map((trend) => 
                        <SwiperSlide key={`${trend.id}${trend.media_type}`}>
                            <DivCarousel>
                                <Poster 
                                    src={`${poster}${trend.backdrop_path}`} 
                                    id={trend.id}
                                    className={`${trend.media_type}-jwds`} 
                                    onClick={(event) => showModal(event)}
                                >
                                </Poster>
                                <Information>
                                    <Title>{trend.title || trend.name}</Title>
                                    <Sinopse>{trend.overview}</Sinopse>
                                </Information>
                            </DivCarousel>
                        </SwiperSlide>
                    )}
            </Swiper>
            { modalOpen ? <Modal setModalOpen={setModalOpen} id={id} classe={classe}></Modal> : null }
        </Container>
    )

}

export default Carousel;