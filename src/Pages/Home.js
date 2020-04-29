import React from "react";
import Particles from 'react-particles-js';
const Home=(props)=>
{
    return(
        <div className="container-fluid" id="home">
            <div className="row">
                <div className="col container-particles">
                    <Particles  className="particles"
                        params={{ 
                        particles: { 
                            number: { 
                            value: 70, 
                            density: { 
                                enable: true, 
                                value_area: 800, 
                            }, 
                            },
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                            }
                        }, 
                        }} 
                    />
                    <div className="home-info">
                        <h1>Hi! I´m <span className="text-orange">Rodrigo Cuenca</span> <br/>and I´am a <span className="text-orange">Fronted Developer</span></h1>
                        <div className="button-container">
                            <a href="#user"><button className="home-button">Read More</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;