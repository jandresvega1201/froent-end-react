import React from 'react';
import {useMachine} from '@xstate/react';
import booKinkMachine from '../Machines/bookingMachine';
import './BaseLayout.css'
import {Nav} from "../Components/Nav";
import {StepsLayout} from "./StepsLayout";
const BaseLayout = () => {

    const [state, send] = useMachine(booKinkMachine);

    // console.log('Nuestra maquina', state)
    // console.log('matches true', state.matches('inicial'))
    // console.log('matches false', state.matches('tickets'))
    // console.log('can', state.can('FINISH'))

    console.log('nuestra maquina', state.value);

    return (
        <div className='BaseLayout'>
            <Nav state={state} send={send} />
            <StepsLayout state={state} send={send}/>
        </div>
    );
};

export default BaseLayout;