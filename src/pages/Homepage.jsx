import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Homepage.css'
import Search from '../Components/Search';

function Homepage() {
    const [t,i18n]=useTranslation('global');
    const [characters,setCharacters]=useState([{}])
    const [filteredCharacters,setFilteredCharacters]=useState(characters)

    const search = (str)=>{
        
        let filter=filteredCharacters.filter((char)=>{
            return char.name.toLowerCase().includes(str.toLowerCase())
        })
        setCharacters(filter);
    }
    
    
    useEffect(()=>{
    
        axios.get('https://breakingbadapi.com/api/characters')
        .then((response)=>{
            setCharacters(response.data)
        })
        .catch((err)=>console.log('Error al traer los personajes',err));
    },[])

    return (
        <div className='homepage'>
        <Search search={search}/>
            {characters.map((char)=>(
            <div className='galery' key={char.char_id}>
                <div className='box'>
                    <div>
                        <img src={char.img} alt='foto-personaje'></img>
                    </div>
                    <div className='info'>
                        <div className='flex'><h4>{char.name}</h4></div>
                        <div className='flex'><p>({char.nickname})</p></div>
                        <Link to={`/character/${char.char_id}/${char.name}`}><button className='btn'>{t('Homepage.see-more')}</button></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Homepage;