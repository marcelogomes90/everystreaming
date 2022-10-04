import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import Container from "./container";
import CloseButton from "./divClose";
import axios from "axios";

function Modal(props) {

    const baseURLSerie = `https://api.watchmode.com/v1/title/tv-${props.id}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`
    const baseURLMovie = `https://api.watchmode.com/v1/title/movie-${props.id}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`
    
    const tmdbURLSerie = `https://api.themoviedb.org/3/tv/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    const tmdbURLMovie = `https://api.themoviedb.org/3/movie/${props.id}?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR`;
    
    const imageURL = "https://image.tmdb.org/t/p/w780"

    const [poster, setPoster] = useState();

    const closeModal = () => {
        props.setModalOpen(false);
    }

    useEffect(() => {
        
        if (props.classe.includes('movie-jwds')) {
            axios.get(tmdbURLMovie).then((response) => {
                setPoster(response.data.poster_path);
            });
        } else if (props.classe.includes('tv-jwds')) {
            axios.get(tmdbURLSerie).then((response) => {
                setPoster(response.data.poster_path);
            });
        }
        
    }, [] )

    // useEffect(() => {

    //     if (props.serieId != "") {
    //         axios.get(baseURLSerie).then((response) => {
    //             setPost(response.data.sources);
    //         });
    //         console.log(post)
    //     }

    //     if (props.movieId != "") {
    //         axios.get(baseURLMovie).then((response) => {
    //             setPost(response.data.sources);
    //         });
    //         console.log(post)
    //     }
        
    // }, [] )

    return(
        <Container>
            <CloseButton onClick={closeModal}>
                <AiOutlineClose size={28}></AiOutlineClose>
            </CloseButton>

            <img src={`${imageURL}${poster}`}></img>            
            
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