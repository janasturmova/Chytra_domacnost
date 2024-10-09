import React from 'react';
import { Climate } from '../climate';
import { Energy } from '../energy';
import { Lights } from '../lights';
import { Blinds } from '../blinds';
import data from '../../smartHomeData'
import './dashboard.css'



export const Dashboard = () => {
    return(
        <main className="dashboard">
            <Lights lights={data.lights}/>
            <Climate temperature={data.climate.temperature} vlhkost={data.climate.humidity}/>
            <Blinds state={data.blinds}/>
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
        </main>
    )
}


