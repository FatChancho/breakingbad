import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PageDetail.css'


function PageDetail() {
    const [char,setChar]=useState([{}])
    const [quote,setQuote]=useState('')
    const {id,name}=useParams();
    const [t,i18n]=useTranslation('global');
   
    
    useEffect(()=>{
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then((response)=>{
            setChar(response.data)
        })
        .catch((err)=>console.log('Error al traer el personaje',err))
    },[id])

    
    useEffect(()=>{
        axios.get(`https://www.breakingbadapi.com/api/quote/random?author=${name}`)
        .then((response)=>{
            setQuote(response.data)
        }) 
        .catch((err)=>console.log('Error al traer la cita',err))
    },[])

    return (
        <div>
            {char.map((e)=>(
            <div className='flex' key={e.char_id}>
                <div className='image'>
                    <img src={e.img} alt='foto-personaje'></img>
                </div>
                    
                <div>
                    <div className='line'><h4>{t('PageDetail.name')}:</h4><p>{e.name}</p></div>
                    <div className='line'><h4>{t('PageDetail.birthday')}:</h4><p>{e.birthday}</p></div>
                    <div className='line'><h4>{t('PageDetail.occupation')}:</h4>{e.occupation ? (e.occupation.map((o)=>(<p>{o}</p>))):<p>Loading..</p>}</div>
                    <div className='line'><h4>{t('PageDetail.status')}:</h4><p>{e.status}</p></div>
                    <div className='line'><h4>{t('PageDetail.appearence')}:</h4><p>{e.appearance}</p></div>
                    <div className='line'><h4>{t('PageDetail.nickname')}:</h4><p>{e.nickname}</p></div>
                    <div className='line'><h4>{t('PageDetail.portrayed')}:</h4><p>{e.portrayed}</p></div>
                    <div className='line'><h4>{t('PageDetail.category')}:</h4><p>{e.category}</p></div>
                    <div className='line'><h4>{t('PageDetail.quote')}:</h4>{quote[0] ? (<p>{quote[0].quote}</p>):(<p>This character has not any quote</p>)}</div>

                </div>
            </div>
            ))}
        </div>
    );
}

export default PageDetail;