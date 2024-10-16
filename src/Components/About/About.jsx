import React from "react";

import aboutCSS from './../About/About.module.css'

import client from './../../assets/about-img-.jpg'

import card1 from './../../assets/about-card01.png'
import card2 from './../../assets/about-card02.png'



function About() {

    return(
        <div className={`${aboutCSS.About_wrapper} section`}>
            <div className={aboutCSS.counters}>
                <p>7.5M+ <span>Charging Station Inititated</span></p>
                <p>12k+ <span>Charging Station In Network</span></p>
                <p>80%+ <span>Eco Friendly Charging Stations</span></p>
                <p>123+ <span>Charging Station In This Region</span></p>


                <div className={aboutCSS.about}>
                    <div className={aboutCSS.about_img}>
                        <img src={client} alt="" />
                    </div>

                    <div className={aboutCSS.about_content}>
                        <small className="section_title">(About Us)</small>
                        <h2>Solutions of All EC <br /> <span>Charging Solutions</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <div className={aboutCSS.about_Cards}>
                            <div className={aboutCSS.card}>
                                <img src={card1} alt="" />
                                <h3>Warrenty <br /> Extensions</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

                            </div>

                            <div className={aboutCSS.card}>
                                <img src={card2} alt="" />
                                <h3>Spare Parts <br /> Management</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

                            </div>
                        </div>
                    </div>

                </div>



                
            </div>            
        </div>

    )
    
}

export default About