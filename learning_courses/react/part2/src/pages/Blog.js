import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import axios from 'axios';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const getData = () => {
        axios
        .get("http://localhost:3004/articles")
        .then(res => setBlogData(res.data));
    }

    useEffect(() => getData(), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (content.length < 140)
            setError(true);
        else {
            await axios.post("http://localhost:3004/articles", {
                author,
                content,
                date: Date.now(),
                id: blogData.length + 1
            })
            setError(false);
            setAuthor("");
            setContent("");
            getData();
        }
    }

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="text" 
                placeholder='Nom' 
                onChange={e => setAuthor(e.target.value)}
                value={author}
                />
                <textarea 
                style={{border: error ? "1px solid red" : "1px solid #61dafb"}}
                placeholder='Message' 
                onChange={(e) => setContent(e.target.value)}
                value={content}
                >
                </textarea>
                {error && <p>Veuillez ecrire un minimum de 140 characteres</p>}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {blogData
                .sort((a, b) => b.date - a.date)
                .map(article => <Article key={article.id} article={article}/>)}
            </ul>
        </div>
    );
};

export default Blog;