import React, { useState } from "react";
import mePicture from '../assets/images/Me2019.png'

function About() {
    return(
        <div>
            <img 
            src={mePicture}
            alt="picture of me from 2019"
            ></img>
        </div>
    )
}

export default About;