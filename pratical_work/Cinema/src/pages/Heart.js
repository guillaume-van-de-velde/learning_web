import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Heart = () => {
    const [listLiked, setListLiked] = useState([]);

    useEffect(() => {
        const itemsArray = [];
        Object.keys(localStorage).forEach(key => {
            itemsArray.push(JSON.parse(localStorage.getItem(key)));
        });
        setListLiked(itemsArray);
    }, []);

    return (
        <div className="heart">
            <Navigation />
            <ul className="listmoovies">
                {listLiked.map((moovie, index) => {
                    return (
                        <Card key={index} moovie={moovie} parent={"Heart"} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Heart;