import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PageDetail.css'

function PageDetail(props) {
    const [char,setChar]=useState([{}])
    const [quote,setQuote]=useState('')
    const {id}=useParams();
    
    useEffect(()=>{
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then((response)=>{
            setChar(response.data)
        })
        .catch((err)=>console.log('Error al traer el personaje',err))
    },[id])

    useEffect(()=>{
        axios.get('https://www.breakingbadapi.com/api/quote/random?author=Skyler+White')
        .then((response)=>{
            console.log(response.data)
            setQuote(response.data)
        }) 
        .catch((err)=>console.log('Error al tarer la cita',err))
    },[])

    return (
        <div>
            {char.map((e)=>(
            <div className='flex'>
                <div className='image'>
                    <img src={e.img} alt='foto-personaje'></img>
                </div>
                    
                <div>
                    <div className='line'><h4>Name:</h4><p>{e.name}</p></div>
                    <div className='line'><h4>Birthday:</h4><p>{e.birthday}</p></div>
                    <div className='line'><h4>Occupation:</h4><p>{e.occupation}</p></div>
                    <div className='line'><h4>Status:</h4><p>{e.status}</p></div>
                    <div className='line'><h4>Appearance:</h4><p>{e.appearance}</p></div>
                    <div className='line'><h4>Nickname:</h4><p>{e.nickname}</p></div>
                    <div className='line'><h4>Portrayed:</h4><p>{e.portrayed}</p></div>
                    <div className='line'><h4>Category:</h4><p>{e.category}</p></div>
                    {<div className='line'><h4>Quote:</h4><p>{quote[0].quote}</p></div>}

                </div>
            </div>
            ))}
        </div>
    );
}

export default PageDetail;