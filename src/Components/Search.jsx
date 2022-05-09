import React, { useState } from 'react';

function Search(props) {
    const[palabra,setPalabra]=useState('');

    const handleChange = (e)=>{
        let value=e.target.value;
        setPalabra(value);
        props.search(value);
    }
    return (
        <div>
            <input type='text' placeholder='Buscar...' value={palabra} onChange={handleChange}/>
        </div>
    );
}

export default Search;