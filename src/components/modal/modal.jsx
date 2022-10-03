import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import Container from "./container";
import CloseButton from "./divClose";
import axios from "axios";

function Modal(props) {

    const baseURLSerie = `https://api.watchmode.com/v1/title/tv-${props.serieId}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`
    const baseURLMovie = `https://api.watchmode.com/v1/title/movie-${props.movieId}/details/?apiKey=eGJo9BVB9xrKUD7jSnmaorFVfXagx0j83yOjBwrJ&append_to_response=sources`

    const [post, setPost] = useState();

    const closeModal = () => {
        props.setModalOpen(false);
        props.setMovieId("");
        props.setSerieId("");
    }

    console.log(baseURLMovie)

    useEffect(() => {

        if (props.serieId != "") {
            axios.get(baseURLSerie).then((response) => {
                setPost(response.data.sources);
            });
            console.log(post)
        }

        if (props.movieId != "") {
            axios.get(baseURLMovie).then((response) => {
                setPost(response.data.sources);
            });
            console.log(post)
        }
        
    }, [] )

    return(
        <Container>
            <CloseButton onClick={closeModal}>
                <AiOutlineClose size={28}></AiOutlineClose>
            </CloseButton>
            
            {post?.map((streaming) =>
                streaming.type == "sub" ?
                <>
                    <h1>{`${streaming.name}`}</h1>
                    <a>{`${streaming.web_url}`}</a>
                </>
                :
                null
            )}
        </Container>
    )

}

export default Modal;