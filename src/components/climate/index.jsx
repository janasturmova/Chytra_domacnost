import React from 'react';
import './climate.css'
import './../button.css'
import {useState} from 'react'

export const Climate = () => {

    const [teplota, setTeplota]= useState(0)

  return(
    <div className="climate">
    <div className="climate__icon">
        <img src="../temp.svg"/>
    </div>
    <div className="climate__content">
        <div className="climate__temperature">{teplota}&deg;C</div>
        <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
    </div>
    <div className="climate__controls">
        <button onClick={() => setTeplota(teplota + 1)} className="button" disabled={teplota === 35}>+</button>
        <button onClick={() => setTeplota(teplota -1)} className="button" disabled={teplota === 0}>-</button>
    </div>
</div>
  )
}