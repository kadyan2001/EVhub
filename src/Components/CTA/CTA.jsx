import React from "react";

import CTACSS from './../CTA/CTA.module.css'

import ctaImg from './../../assets/cta_image.png'
function CTA() {
    return(
        <div className={`${CTACSS.CallToAction_wrapper} section`}>
            <div className={CTACSS.Content}>
                <small className="section_title">(Download Our App)</small>
                <h2>Find <span>Charging Stations</span> <br />Near You with <span>Our App</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={CTACSS.image}>
                <img src={ctaImg} alt="cta-to-action-image" />
            </div>

        </div>
    )
}

export default CTA