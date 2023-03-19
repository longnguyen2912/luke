import React, { useState } from 'react';
import Axios from 'axios';

const Search = (props) => {

    const { setElement } = props;
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(1);

    function getElement(e) {
        e.preventDefault();
        Axios.get('https://swapi.dev/api/' + category + "/" + id)
            .then(response => {
                console.log(response.data);
                setElement(response.data);
            })
            .catch(response => {
                console.log(response.data);
                setElement({ name: "Unknown" });
            })
            ;

    }

    return (
        <form onSubmit={getElement}>
            <div>
                <label>Search for:</label>
                <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                <input type="number" value={id} required onChange={e => setId(e.target.value)} />
                <button type="submit">Search</button>
            </div>
        </form>
    );
}

export default Search;