import React, { useEffect, useState } from 'react';
import Unknown from './unknown';
import Axios from 'axios';

const Infos = (props) => {

    const { element } = props;
    const [values, setvalues] = useState([]);

    useEffect(() => {
        let temp = []
        for (let key in element) {
            temp.push({ "key": key, "value": element[key] });
        }
        setvalues(temp);
        console.log(temp);
    }
        , [element])

    function getName(url) {
        let name = "";
        if (url.startsWith('http')) {
            Axios.get(url)
                .then(response => {
                    return response.data.name;
                });
        }
    }


    return (
        element.name === "Unknown" ? <Unknown /> :
            <div>
                <div>
                    <h1>{element.name ? element.name : element.title}</h1>
                </div>
                {
                    values.map((item, idx) =>
                        <div key={idx}>
                            <div>
                                {item.key}:
                            </div>
                            <div>
                                {item.value}
                            </div>
                        </div>
                    )
                }
            </div>
    );
}

export default Infos;