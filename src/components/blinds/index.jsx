
import './blinds.css'
import './../button.css'
import {useState} from 'react'
import pic1 from './blinds-closed.svg'
import pic2 from './blinds-open.svg'



export const Blinds = ({state}) => {

    const[jeZatazeno, setJeZatazeno] = useState(state === 'open')

    return(
        <div className="blinds">
				<div className="blinds__icon">
					<img src={jeZatazeno ? pic2 : pic1}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => {setJeZatazeno(!jeZatazeno)}} className={jeZatazeno ? "button button--active": "button" }>Otevřeno</button>
					<button onClick={() => {setJeZatazeno(!jeZatazeno)}} className={jeZatazeno ? "button" : "button button--active" }>Zavřeno</button>
				</div>
			</div>

    )
}