import React from 'react'
import headerCSS from './Header.module.css'

import client1 from './../../assets/user1.jpg'
import client2 from './../../assets/user2.jpg'
import client3 from './../../assets/user3.jpg'





function Header() {
    return(
        <div className={`${headerCSS.Header_wrapper} section`}>
            <div className={headerCSS.content}>
                <small>for Everyone , every Business , Every Vehicle</small>
                <h1>Unique Solution for <span>Charging Stations</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At commodi id consequuntur iste ex? Nobis ullam laudantium non. Fuga perferendis rerum quia vero similique accusamus unde mollitia nobis, nulla quis.
                </p>

                <div className={headerCSS.header_btns}>
                    <button>Test Drive <i className="ri-roadster-line"></i></button>

                    <div className={headerCSS.clients_wrapper}>
                        <img src={client1} alt="client-images" />       
                        <img src={client2} alt="client-images" />                    
                        <img src={client3} alt="client-images" /> 

                        <span>Let's Join Us.</span>                   
                                

                    </div>

                
                </div>

            </div>
        </div>
    )
    
}

export default Header