import React from 'react';

const Card = ({moovie, parent, genres}) => {
    return (
        <li>
            <img width="300px" src={moovie.poster_path ? "https://image.tmdb.org/t/p/original/" + moovie.poster_path : "./img/poster.jpg"} alt="" />
            <div className="description">
                <h3>{moovie.original_title}</h3>
                <p className="date">{new Date(moovie.release_date).toLocaleDateString("fr-FR")}
                </p>
                <h4 className="grade">{moovie.vote_average} <i className="fa-solid fa-star"></i></h4>
                <ul className="genre">
                    {moovie.genre_ids &&
                    moovie.genre_ids.map((genreId, index) => <li key={index}>{genres.find(genre => genre.id === genreId).name}</li>)}
                </ul>
                <h3>Synopsis</h3>
                <p className="overview">{moovie.overview}</p>
            </div>
            <button 
            className='add-heart' 
            onClick={parent === "Home" 
                ? () => localStorage.setItem(moovie.original_title, JSON.stringify(moovie)) 
                : () => {
                    localStorage.removeItem(moovie.original_title, JSON.stringify(moovie));
                    window.location.reload();
                }}
            >
                {parent === "Home" ? "Ajouter aux coups de coeur" : "Supprimer de la liste"}
            </button>
        </li>
    );
};

export default Card;