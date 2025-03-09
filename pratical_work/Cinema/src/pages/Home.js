import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {
    const [listMoovies, setListMoovies] = useState([]);
    const [userQuery, setUserQuery] = useState("code");
    const [userInput, setUserInput] = useState("");
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" + userQuery + "&language=fr-FR")
            .then(res => setListMoovies(res.data.results));
    }, [userQuery]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR")
            .then (res => setGenres(res.data.genres));
    }, []);

    return (
        <div className="home">
            <Navigation />
            <div className='search-part'>
                <input 
                type="text" 
                id='serchbar'
                value={userInput}
                onChange={e => {
                    setUserInput(e.target.value);
                }}/>
                <input
                type="submit"
                value=""
                onClick={() => {
                    userInput ? setUserQuery(userInput) : setUserQuery("code");
                    setUserInput("");
                }}/>
            </div>
            <div className='btn-sort'>
                <button>Top <i className="fa-solid fa-arrow-up"></i></button>
                <button><i className="fa-solid fa-arrow-down"></i> Flop</button>
            </div>
            <ul className="listmoovies">
                {listMoovies.map((moovie, index) => {
                    return (
                        <Card key={index} moovie={moovie} parent={"Home"} genres={genres}/>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;