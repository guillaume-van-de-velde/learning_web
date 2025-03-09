import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import axios from 'axios';

const Heart = () => {
    const [listLiked, setListLiked] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const itemsArray = [];
        Object.keys(localStorage).forEach(key => {
            itemsArray.push(JSON.parse(localStorage.getItem(key)));
        });
        setListLiked(itemsArray);
    }, []);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR")
            .then(res => setGenres(res.data.genres));
    }, []);

    return (
        <div className="heart">
            <Navigation />
            <ul className="listmoovies">
                {listLiked.map((moovie, index) => {
                    return (
                        <Card key={index} moovie={moovie} parent={"Heart"} genres={genres} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Heart;