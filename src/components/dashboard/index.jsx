import React from 'react';
import { Climate } from '../climate';
import { Energy } from '../components/energy';
import { Lights } from '../components/lights';
import { Blinds } from '../blinds';
import './dashboard.css'



export const Dashboard = () => {
    return(
        <main class="dashboard">
            <Lights room="Obívací pokoj"/>
            <Lights room="Ložnice"/>
            <Lights room="Kuchyň"/>
            <Lights room="Chodba"/>
            <Climate/>
            <Blinds/>
            <Energy electricity='35.7' water='21'/>
        </main>
    )
}


