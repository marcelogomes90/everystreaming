import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Container from "./container";
import Image from "./image";
import ImageLink from "./link";
import Title from "./title";
import axios from "axios";
import Modal from "../modal/modal";
import noImage from "../../assets/noImage.png"
import "swiper/css";
import "swiper/css/navigation";

const baseURL = "https://api.themoviedb.org/3/trending/tv/week?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR";
const imageURL = "https://image.tmdb.org/t/p/w500"

function PopularSeries() {

    const [post, setPost] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [classe, setClasse] = useState();
    const [id, setId] = useState('');

    const showModal = (event) => {
      setClasse(event.target.className);
      setId(event.target.id);
      setModalOpen(true);
    }

    const getSerie = async () => {
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
        getSerie();
    }, [] );

    return(
        <>
            <Title>Séries Populares</Title>
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
                    { post?.map((serie) =>
                        <SwiperSlide key={`${serie.id}${serie.name}`}>
                            <ImageLink>
                                <Image 
                                  className={`${serie.media_type}-jwds`}
                                  id={serie.id}
                                  onClick={showModal}
                                  src={(`${imageURL}${serie.poster_path}`) == "https://image.tmdb.org/t/p/w500null" ? noImage : `${imageURL}${serie.poster_path}`}
                                  alt={serie.name}
                                >
                                </Image>
                            </ImageLink>
                        </SwiperSlide>
                    )}
                </Swiper>
                { modalOpen ? <Modal setModalOpen={setModalOpen} id={id} classe={classe}></Modal> : null }
            </Container>           
        </>   
    )

}

export default PopularSeries;