import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./input";
import DivSearch from "./divSearch";
import Poster from "./poster";
import Title from "./title";
import Container from "./container";
import DivResults from "./divResults";
import Modal from "../modal/modal";
import noImage from "../../assets/noImage.png"

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
        setSearchText("")
    }

    const getSearching = async () => {
        try {
            const data = await axios
            .get(searchURL)
            .then(response => {
                setSearchData(response.data.results);
            });
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        
        if (searchText != "") {
            getSearching();
        }

    }, [searchText] )

    return(
        <Container>
            <Input placeholder="Título" onChange={(event) => makeSearch(event)}></Input>
            { searchText != "" ?
            <DivResults>
                { searchData?.filter(dataFilter => dataFilter.media_type != "person").slice(0, 5).map(result => (
                    <DivSearch 
                        id={result.id}
                        className={`${result.media_type}-jwds`} 
                        onClick={(e) => showModal(e)}
                        key={`${result.id}${result.media_teype}`}
                    >
                        <Poster 
                            src={(`${imageURL}${result.poster_path}`) == "https://image.tmdb.org/t/p/w154null" ? noImage : `${imageURL}${result.poster_path}`}
                            id={result.id}
                            className={`${result.media_type}-jwds`} 
                            onClick={(e) => showModal(e)}
                        > 
                        </Poster>
                        <Title
                            id={result.id}
                            className={`${result.media_type}-jwds`} 
                            onClick={(e) => showModal(e)}
                        >{result.name || result.title}</Title>
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