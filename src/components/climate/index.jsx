
import './climate.css'
import './../button.css'
import {useState} from 'react'
import pic from './temp.svg'

export const Climate = ({temperature, vlhkost}) => {

    const [teplota, setTeplota]= useState(temperature)

  return(
    <div className="climate">
    <div className="climate__icon">
        <img src={pic}/>
    </div>
    <div className="climate__content">
        <div className="climate__temperature">{teplota}&deg;C</div>
        <div className="climate__humidity">Vlhkost {vlhkost}&nbsp;%</div>
    </div>
    <div className="climate__controls">
        <button onClick={() => setTeplota(teplota + 1)} className="button" disabled={teplota === 35}>+</button>
        <button onClick={() => setTeplota(teplota -1)} className="button" disabled={teplota === 0}>-</button>
    </div>
</div>
  )
}