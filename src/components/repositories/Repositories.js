import React, { useState } from 'react';

export default function Repositories() {
    const [repositories, setRepositories] = useState([
        { id: 1, name: 'one', favorite: false },
        { id: 2, name: 'two', favorite: false },
        { id: 3, name: 'three', favorite: false },
    ]);

    function addFavorite(id) {
        const newRepositories = repositories.map(x => {
            return x.id === id ? {
                ...x, favorite: true
            } : x;
        });
        setRepositories(newRepositories);
    };

    return (
        <ul style={{ "list-style-type": "none", "paddingLeft": "0px" }}>
            {repositories.map(x => (
                <div className="repository">
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