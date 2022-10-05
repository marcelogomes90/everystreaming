import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./input";
import DivSearch from "./divSearch";
import Poster from "./poster";
import Title from "./title";
import Container from "./container";
import DivResults from "./divResults";
import Modal from "../modal/modal";

function Search() {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [classe, setClasse] = useState();
    const [id, setId] = useState();

    const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=253799727221b7a1aa90c66eb08832a0&language=pt-BR&include_adult=false&query=${searchText}`
    const imageURL = "https://image.tmdb.org/t/p/w154"

    const makeSearch = (event) => {
        setSearchText(event.target.value);
    }

    const showModal = (e) => {
        setClasse(e.target.className);
        setId(e.target.id);
        setModalOpen(true);
    }

    useEffect(() => {
        
        if (searchText != "") {
            axios.get(searchURL).then((response) => {
                setSearchData(response.data.results);
                console.log(searchData)
            });
        }

    }, [searchText] )

    return(
        <Container>
            <Input placeholder="Título" onChange={(event) => makeSearch(event)}></Input>
            { searchText != "" ?
            <DivResults>
                { searchData?.filter(dataFilter => dataFilter.media_type != "person").slice(0, 10).map(result => (
                    <DivSearch 
                        id={result.id}
                        className={`${result.media_type}-jwds`} 
                        onClick={(e) => showModal(e)}>
                        <Poster src={`${imageURL}${result.poster_path}`}></Poster>
                        <Title>{result.name || result.title}</Title>
                    </DivSearch>
                ))}
            </DivResults>
            :
            null }
            { modalOpen ? <Modal setModalOpen={setModalOpen} id={id} classe={classe}></Modal> : null }
        </Container>
    )
}

export default Search;