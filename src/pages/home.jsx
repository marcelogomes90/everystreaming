import Navbar from "../components/navbar/navbar";
import PopularMovies from "../components/lists/popularMovies";
import PopularSeries from "../components/lists/popularSeries";
import Carousel from "../components/carousel/carousel";

function Home() {
    return(
        <>
            <Navbar />
            <Carousel />
            <PopularMovies />
            <PopularSeries />
        </>
    )
}

export default Home;