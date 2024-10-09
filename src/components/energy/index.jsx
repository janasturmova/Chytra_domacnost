
import './energy.css'
import pic1 from './water.svg'
import pic2 from './electricity.svg'

export const Energy = ({electricity, water}) => {
    return(
        <div className="energy">
				<div className="energy__source">
					<div className="energy__icon">
						<img src={pic2}/>
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Elektřina</div>
						<div className="energy__value">{electricity} kW</div>
					</div>
				</div>
				<div className="energy__source">
					<div className="energy__icon">
						<img src={pic1}/>
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Voda</div>
						<div className="energy__value">{water} m<sup>3</sup></div>
					</div>
				</div>
			</div>
    )
}