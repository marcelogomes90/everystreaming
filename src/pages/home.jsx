import Navbar from "../components/navbar/navbar";
import PopularMovies from "../components/lists/popularMovies";
import PopularSeries from "../components/lists/popularSeries";

function Home() {
    return(
        <>
            <Navbar />
            <PopularMovies />
            <PopularSeries />
        </>
    )
}

export default Home;