import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

function Homepage() {
    
    const [characters,setCharacters]=useState([{}])
    
    
    useEffect(()=>{
    
        axios.get('https://breakingbadapi.com/api/characters')
        .then((response)=>{
            setCharacters(response.data)
        })
        .catch((err)=>console.log('Error al traer los personajes',err));
    },[])

    return (
        <div className='homepage'>
            {characters.map((char)=>(
            <div className='galery'>
                <div className='box' key={char.char_id}>
                    <div>
                        <img src={char.img} alt='foto-personaje'></img>
                    </div>
                    <div className='info'>
                        <div className='flex'><h4>{char.name}</h4></div>
                        <div className='flex'><p>({char.nickname})</p></div>
                        <Link to={`/character/${char.char_id}/${char.name}`}><button className='btn'>See more</button></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Homepage;