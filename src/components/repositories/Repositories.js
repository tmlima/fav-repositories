import React, { useState, useEffect } from 'react';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);

    function addFavorite(id) {
        const newRepositories = repositories.map(x => {
            return x.id === id ? {
                ...x, favorite: true
            } : x;
        });
        setRepositories(newRepositories);
    };

    useEffect(async () => {
        const response = await fetch("https://api.github.com/users/tmlima/repos");
        const data = await response.json();

        setRepositories(data);
    }, []);

    return (
        <ul style={{ "list-style-type": "none", "paddingLeft": "0px" }}>
            {repositories.map(x => (
                <div>
                    <li>
                        {x.name}
                        {x.favorite ?
                            <span>(favorite)</span> :
                            <button onClick={() => addFavorite(x.id)} >Favorite</button>
                        }
                    </li>
                </div>
            ))}
        </ul>
    );
};