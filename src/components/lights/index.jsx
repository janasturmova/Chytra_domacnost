import React from 'react';
import './lights.css';
import offPic from './light-off.svg';
import onPic from './light-on.svg';
import {useState} from 'react'


export const Light = ({name, state}) => {
    
    const [jeZapnuto, setJeZapnuto] = useState(state === 'on')

    return(
        <div onClick={() => {setJeZapnuto(!jeZapnuto)}} className="light" >
            <div className="light__icon">
                <img src={jeZapnuto ? onPic : offPic}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}


export const Lights = ({lights}) => {
    
    return (
        <div className="lights">
            {lights.map((item) =>(
                <Light
                    key={item.name}
                    name={item.name}
                    state={item.state}
                />
            ))}
        </div>
    )
}