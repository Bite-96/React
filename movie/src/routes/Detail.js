import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${ id }`
      )).json();
      setMovie(json.data.movie);
    };
    
    useEffect(() => {
      getMovie();
    }, []);
    console.log(movie);

    return (
        <div>
            <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.description_full}
                genres={movie.genres}
            />
        </div>
    );
}

export default Detail;
