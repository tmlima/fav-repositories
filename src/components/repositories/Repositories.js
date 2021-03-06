import React, { useState, useEffect } from 'react';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);

    function toggleFavorite(id) {
        const newRepositories = repositories.map(x => {
            return x.id === id ? {
                ...x, favorite: !x.favorite
            } : x;
        });
        setRepositories(newRepositories);
    };

    useEffect(() => {
        async function fetchRepositories() {
            const response = await fetch("https://api.github.com/users/tmlima/repos");
            const data = await response.json();
    
            setRepositories(data);
        }
        fetchRepositories();
    }, []);

    return (
        <ul style={{ "listStyleType": "none", "paddingLeft": "0px" }}>
            {repositories.map(x => (
                <div>
                    <li key={x.id}>
                        {x.name}
                        {x.favorite && <span>(favorite)</span>}
                        <button onClick={() => toggleFavorite(x.id)} >{!x.favorite? "add favorite" : "remove favorite"}</button>
                    </li>
                </div>
            ))}
        </ul>
    );
};