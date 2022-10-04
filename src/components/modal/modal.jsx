import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { FaImdb, FaCalendarAlt } from "react-icons/fa"
import Container from "./container";
import CloseButton from "./divClose";
import axios from "axios";
import DivPoster from "./divPoster";
import Poster from "./poster";
import DivInformation from "./divInformation";
import Title from "./title";
import DivSinopse from "./divSinopse";
import Sinopse from "./sinopse";
import SecondaryText from "./secondaryText";
import DivDados from "./divDados";
import Genres from "./genres";

function Modal(props) {

    const baseURLSerie = `https://api.watchmode.com/v1/title/tv-${props.id}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`
    const baseURLMovie = `https://api.watchmode.com/v1/title/movie-${props.id}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`
    
    const tmdbURLSerie = `https://api.themoviedb.org/3/tv/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    const tmdbURLMovie = `https://api.themoviedb.org/3/movie/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    
    const imageURL = "https://image.tmdb.org/t/p/w780"

    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [sinopse, setSinopse] = useState();
    const [genres, setGenres] = useState();
    const [vote, setVote] = useState();
    const [year, setYear] = useState();

    const closeModal = () => {
        props.setModalOpen(false);
    }

    useEffect(() => {
        
        if (props.classe.includes('movie-jwds')) {
            axios.get(tmdbURLMovie).then((response) => {
                setPoster(response.data.poster_path);
                setTitle(response.data.title);
                setSinopse(response.data.overview);
                setGenres(response.data.genres);
                setVote(response.data.vote_average.toFixed(2));
                setYear(response.data.release_date);
            });
        } else if (props.classe.includes('tv-jwds')) {
            axios.get(tmdbURLSerie).then((response) => {
                setPoster(response.data.poster_path);
                setTitle(response.data.name);
                setSinopse(response.data.overview);
                setGenres(response.data.genres);
                setVote(response.data.vote_average.toFixed(2));
                setYear(response.data.first_air_date)
            });
        }
        
    }, [] )

    return(
        <Container>
            <CloseButton onClick={closeModal}>
                <AiOutlineClose size={28}></AiOutlineClose>
            </CloseButton>
            
            <DivPoster>
                <Poster src={`${imageURL}${poster}`}></Poster>
            </DivPoster>
            
            <DivInformation>
                <Title>{title}</Title>
                <DivDados>
                    { genres?.map((generos) => <Genres key={generos.name}>{generos.name}</Genres> )} 
                </DivDados>
                <DivDados>
                    <FaCalendarAlt size={26} color={"red"}/>
                    <SecondaryText>{parseInt(year)}</SecondaryText>
                    <FaImdb size={26} color={"yellow"} />
                    <SecondaryText>{vote}</SecondaryText> 
                </DivDados>
                <DivSinopse>
                    <Sinopse>{sinopse}</Sinopse>
                </DivSinopse>
            </DivInformation>
   
              
            <p></p>
            
            {/* {post?.map((streaming) =>
                streaming.type == "sub" ?
                <>
                    <h1>{`${streaming.name}`}</h1>
                    <a>{`${streaming.web_url}`}</a>
                </>
                :
                null
            )} */}
        </Container>
    )

}

export default Modal;