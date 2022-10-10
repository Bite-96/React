import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Detail from "../routes/Detail";
import styles from "./Movies.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie_img}/>
            <div>
                <h2 className={styles.movie_title}>
                    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`} element={<Detail />}>
                        {title}
                    </Link>
                </h2>
                <h3 className={styles.movie_year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie_genres}>
                    {genres.map((g) => (    
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;