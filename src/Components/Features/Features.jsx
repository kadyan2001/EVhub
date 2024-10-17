import React from "react";

import featureCSS from './../Features/Features.module.css'

import img1 from './../../assets/features.jpg'

function Features() {
    return(
        <div className={`${featureCSS.Feature_wrapper} section`}>
            <small className="section_title">(Main Features)</small>
            <h2>Elevate Your <span>ECO - Journey</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem quae eveniet error animi atque fuga consectetur magni. </p>

            <div className={featureCSS.feature_Cards}>
                <div className={featureCSS.featureCard}>
                    <img src={img1} alt="features-card-image" />
                    <i className="ri-play-line"></i>
                </div>

                <div className={featureCSS.featureCard}>
                    <div className={featureCSS.cardContainer}>
                        <small>Technology</small>
                        <h3>Smart Technology</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rerum saepe laboriosam ipsa maiores repellat at vitae. </p>
                    </div>    
                    <div className={featureCSS.cardContainer}>
                    <small>Connenctivity</small>
                        <h3>Smart Connectivity</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rerum saepe laboriosam ipsa maiores repellat at vitae. </p>
                    </div>                
            
                    </div>
            </div>

        </div>
    )
}

export default Features