import React, { useEffect, useState } from 'react';

/**
 * Custom Imports 
 */
import API from './api';

export default function Advice( props ){
    const [ details, setDetails ] = useState( {} );


    useEffect( () =>{
        API('https://api.adviceslip.com/advice', ( res ) =>{
            setDetails( res.data.slip );
        } )
    }, [] )

  return(
    <div className="box">
        <h2>{details.advice}</h2>
    </div>
  );
}