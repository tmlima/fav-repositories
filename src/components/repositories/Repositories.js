import React, { useState } from 'react';

export default function Repositories() {
    const [repositories, setRepositories] = useState([
        { id: 1, name: 'one' },
        { id: 1, name: 'two' },
        { id: 1, name: 'three' },
    ]);

    function addFavorite() {
    };

    return (
        <ul style={{ "list-style-type": "none", "paddingLeft": "0px" }}>
            {repositories.map(x => (
                <div className="repository">
                    <li>
                        {x.name}
                        <button onClick={() => addFavorite()} >Favorite</button>
                    </li>

                </div>
            ))}
        </ul>
    );
};