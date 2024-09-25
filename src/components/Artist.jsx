import React from "react";

function Artist( {artist} ) {

    const { name, image, date, country, genre, years, songs } = artist;

    return(
        <div className="artist">
            <div className="artist-image">
                <img src={image} alt="{name}" />
            </div>
            <div className="artist-details">
                <p>
                    <h2>{name}</h2>
                    <div><span className="bold-label">Concert Date: </span>{date}</div>
                    <div><span className="bold-label">Country: </span>{country}</div>
                    <div><span className="bold-label">Genre: </span>{genre}</div>
                    <div><span className="bold-label">Years Active: </span>{years}</div>
                    <div><span className="bold-label">Fav Songs: </span>{songs}</div>
                </p>
            </div>

            </div>
    )
}

export default Artist;