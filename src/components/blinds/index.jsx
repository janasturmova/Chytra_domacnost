import React from 'react';
import './blinds.css'
import './../button.css'
import {useState} from 'react'



export const Blinds = () => {

    const[jeZatazeno, setJeZatazeno] = useState(false)

    return(
        <div className="blinds">
				<div className="blinds__icon">
					<img src="./images/blinds-open.svg"/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => {setJeZatazeno(!jeZatazeno)}} className="button button--active">Otevřeno</button>
					<button onClick={() => {setJeZatazeno(!jeZatazeno)}} className="button">Zavřeno</button>
				</div>
			</div>

    )
}