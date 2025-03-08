import React from 'react';

const Card = ({moovie}) => {
    return (
        <li>
            <img width="300px" src={"https://image.tmdb.org/t/p/original/" + moovie.poster_path} alt="" />
            <div className="description">
                <h3>{moovie.original_title}</h3>
                <p className="date">{moovie.release_date}</p>
                <h4 className="grade">{moovie.vote_average} <i className="fa-solid fa-star"></i></h4>
                <ul className="genre">
                    {moovie.genre_ids &&
                    moovie.genre_ids.map((genre, index) => <li key={index}>{genre}</li>)}
                </ul>
                <h3>Synopsis</h3>
                <p className="overview">{moovie.overview}</p>
            </div>
            <button className='add-heart'></button>
        </li>
    );
};

export default Card;