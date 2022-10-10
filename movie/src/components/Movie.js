import React from "react";

function Movie({ id, coverImg, title, year, summary, genres }) {

    return (
        <div>
            <h1>{title} ({year})</h1>
            <img src={coverImg} alt={title}/>
            <p>{summary}</p>
            <ul>
                {genres && genres.map((g) => 
                    <li key={g}>{g}</li>
                )}
            </ul>
        </div>
    );
}

export default Movie;