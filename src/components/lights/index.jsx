import React from 'react';
import './lights.css'
import offUrl from './light-off.svg';
import onUrl from './light-on.svg';
import {useState} from 'react'

export const Lights = ({room}) => {
    const [jeZapnuto, setJeZapnuto] = useState(false)

    return(
        <div onClick={() => {setJeZapnuto(!jeZapnuto)}} className="lights" >
            <div className="light">
                <div className="light__icon">
                    <img src={jeZapnuto ? onUrl : offUrl}/>
                </div>
                <div className="light__name">
                    {room}
                </div>
            </div>
        </div>
    )
}