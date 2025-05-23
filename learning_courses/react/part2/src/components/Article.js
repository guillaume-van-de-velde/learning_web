import axios from 'axios';
import React, { useState } from 'react';

const Article = ({article}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const dateFormater = (date) => {
        let newDate = new Date(date);
        return newDate.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
    };

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };
        axios.put('http://localhost:3004/articles/' + article.id, data).then(() => {
            setIsEditing(false);
        })
        setIsEditing(false);
    }

    const handleDelete = () => {
        axios.delete("http://localhost:3004/articles/" + article.id);
        window.location.reload();
    }

    return (
        <div className="article" style={{ background: isEditing ? "#f3feff" : "white"}}>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Poste le {dateFormater(article.date)}</em>
            </div>
            {isEditing ? <textarea defaultValue={editContent ? editContent : article.content} onChange={(e) => setEditContent(e.target.value)}></textarea> : <p>{editContent ? editContent : article.content}</p>}
            <div className="btn-container">
                {isEditing ? <button onClick={() => handleEdit()}>Valider</button>:<button onClick={() => {setIsEditing(true)}}>Edit</button>}
                <button onClick={() => {
                    if (window.confirm("Voulez-vous vraiment supprimer cet article ?"))
                        handleDelete();
                }}>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;