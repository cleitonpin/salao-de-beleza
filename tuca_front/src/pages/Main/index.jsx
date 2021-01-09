import React from 'react';

import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import AboutUs from '../../components/AboutUs';
import Appointments from '../../components/Appointments';


export default function Main() {
    return (
        <>
            <Navbar />
            <Slider />
            <AboutUs />
            <Appointments />
        </>
    )
}
