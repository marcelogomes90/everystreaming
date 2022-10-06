import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaImdb, FaCalendarAlt } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";
import Container from "./container";
import CloseButton from "./divClose";
import axios from "axios";
import DivPoster from "./divPoster";
import Poster from "./poster";
import DivInformation from "./divInformation";
import Title from "./title";
import Sinopse from "./sinopse";
import SecondaryText from "./secondaryText";
import DivDados from "./divDados";
import Genres from "./genres";
import DivLinks from "./divLinks";
import Link from "./link";
import ImgLogo from "./imgLogo";
import DivPrincipal from "./divPrincipal";

import Netflix from "../../assets/Netflix.png"
import Amazon from "../../assets/Amazon Prime.png"
import Apple from "../../assets/AppleTV+.png"
import Claro from "../../assets/Clarovideo.png"
import Crunchyroll from "../../assets/Crunchyroll Premium.png"
import Curiosity from "../../assets/Curiosity Stream.png"
import Disney from "../../assets/Disney+.png"
import Funimation from "../../assets/Funimation.jpg"
import Globo from "../../assets/Globalplay.png"
import Hbo from "../../assets/HBO MAX.png"
import Mubi from "../../assets/MUBI.png"
import Paramount from "../../assets/Paramount+.png"
import Pluto from "../../assets/Pluto TV.png"
import Sun from "../../assets/Sun Nxt.png"
import Tubi from "../../assets/Tubi TV.png"
import Icons from "./divIcons";
import noImage from "../../assets/noImage.png"

function Modal(props) {

    const baseURLSerie = `https://api.watchmode.com/v1/title/tv-${props.id}/details/?apiKey=ZtM7xiTzoBJC5pb9DDM8bukueILcXrHt2ubg1cp3&append_to_response=sources`;
    const baseURLMovie = `https://api.watchmode.com/v1/title/movie-${props.id}/details/?apiKey=ZtM7xiTzoBJC5pb9DDM8bukueILcXrHt2ubg1cp3&append_to_response=sources`;
    
    const tmdbURLSerie = `https://api.themoviedb.org/3/tv/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    const tmdbURLMovie = `https://api.themoviedb.org/3/movie/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;

    const castURLSerie = `https://api.themoviedb.org/3/tv/${props.id}/credits?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-B`;
    const castURLMovie = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    
    const imageURL = "https://image.tmdb.org/t/p/w780";

    const idsStreaming = [203, 26, 371, 449, 80, 421, 372, 381, 448, 387, 181, 444, 391, 433, 396];

    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [sinopse, setSinopse] = useState();
    const [genres, setGenres] = useState();
    const [vote, setVote] = useState();
    const [year, setYear] = useState();
    const [cast, setCast] = useState();
    const [link, setLink] = useState();
    const [loading, setLoading] = useState(true);

    const closeModal = () => {
        props.setModalOpen(false);
        setLoading(false);
    }

    const findLogo = (serviceId) => {
        if (serviceId == 203) { return Netflix }
        else if (serviceId == 26) { return Amazon }
        else if (serviceId == 371) { return Apple }
        else if (serviceId == 449) { return Claro }
        else if (serviceId == 80) { return Crunchyroll }
        else if (serviceId == 421) { return Curiosity }
        else if (serviceId == 372) { return Disney }
        else if (serviceId == 381) { return Funimation }
        else if (serviceId == 448) { return Globo }
        else if (serviceId == 387) { return Hbo }
        else if (serviceId == 181) { return Mubi }
        else if (serviceId == 444) { return Paramount }
        else if (serviceId == 391) { return Pluto }
        else if (serviceId == 433) { return Sun }
        else if (serviceId == 396) { return Tubi }
    }

    const getDataMovie = async () => {
        try {
            const data = await axios
            .get(tmdbURLMovie)
            .then(response => {
                setYear(response.data.release_date);
                setPoster(response.data.poster_path);
                setTitle(response.data.title);
                setSinopse(response.data.overview);
                setGenres(response.data.genres);
                setVote(response.data.vote_average.toFixed(2));
            });
        } catch (e) {
            console.log(e)
        }
    };

    const getCastMovie = async () => {
        try {
            const data = await axios
            .get(castURLMovie)
            .then(response => {
                setCast(response.data.cast);
            });
        } catch (e) {
            console.log(e)
        }
    };

    const getSourceMovie = async () => {
        try {
            const data = await axios
            .get(baseURLMovie)
            .then(response => {
                setLink(response.data.sources);
            });
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    };

    const getDataSerie = async () => {
        try {
            const data = await axios
            .get(tmdbURLSerie)
            .then(response => {
                setYear(response.data.first_air_date);
                setPoster(response.data.poster_path);
                setTitle(response.data.name);
                setSinopse(response.data.overview);
                setGenres(response.data.genres);
                setVote(response.data.vote_average.toFixed(2));
            });
        } catch (e) {
            console.log(e)
        }
    };

    const getCastSerie = async () => {
        try {
            const data = await axios
            .get(castURLSerie)
            .then(response => {
                setCast(response.data.cast);
            });
        } catch (e) {
            console.log(e)
        }
    };

    const getSourceSerie = async () => {
        try {
            const data = await axios
            .get(baseURLSerie)
            .then(response => {
                setLink(response.data.sources);
            });
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        
        if (props.classe.includes('movie-jwds')) {
            getDataMovie();
            getCastMovie();
            getSourceMovie();
        } else if (props.classe.includes('tv-jwds')) {
            getDataSerie();
            getCastSerie();
            getSourceSerie();
        }
        
    }, [] )

    return(
        <Container>
            { loading ? 
                <RotatingLines
                    strokeColor="#b39ddb"
                    strokeWidth="3"
                    animationDuration="0.95"
                    width="84"
                    visible={true}
              />
              :
                <>
                    <DivPrincipal>
                        <CloseButton onClick={closeModal}>
                            <AiOutlineClose size={28}></AiOutlineClose>
                        </CloseButton>
                            <DivPoster>
                                <Poster 
                                    src={(`${imageURL}${poster}`) == "https://image.tmdb.org/t/p/w780null" ? noImage : `${imageURL}${poster}`}
                                >                            
                                </Poster>
                            </DivPoster>
                        <DivInformation>
                            <Title>{title}</Title>
                            <DivDados>
                                { genres?.slice(0, 3).map((generos) => <Genres key={generos.name}>{generos.name}</Genres> )} 
                            </DivDados>
                            <DivDados>
                                <Icons><FaCalendarAlt size={26} color={"red"} className="icon"/></Icons>
                                <SecondaryText>{`${parseInt(year)}`}</SecondaryText>
                                <Icons><FaImdb size={26} color={"yellow"} className="icon"/></Icons>
                                <SecondaryText>{vote}</SecondaryText> 
                            </DivDados>
                            <DivDados>
                                <SecondaryText>Elenco:</SecondaryText>
                                { cast?.slice(0, 3).map((cast) => <SecondaryText key={cast.name}>{cast.name},</SecondaryText> )}
                                { cast?.slice(3, 4).map((cast) => <SecondaryText key={cast.name}>{cast.name}.</SecondaryText> )}
                            </DivDados>
                            <Sinopse>{sinopse}</Sinopse>
                        </DivInformation>       
                    </DivPrincipal>
                    <DivLinks>
                        {link?.filter(sourceId => idsStreaming.includes(sourceId.source_id)).map(service => (
                            <Link href={service.web_url} target="_blank" key={service.source_id}>
                                <ImgLogo src={`${findLogo(service.source_id)}`}/>
                            </Link>
                        ))}
                    </DivLinks>
                </>
            }     
        </Container>
    )
}

export default Modal;