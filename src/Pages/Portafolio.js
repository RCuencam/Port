import React from "react";
import Cards from "../Components/Cards";

const Portafolio=(props)=>
{
    return(
        <React.Fragment>
            <div className="container-fluid portafolio-container" id="portafolio">
                <div className="row">
                    <div className="col title-container">
                        <div className="portafolio-title">
                            <h1>Portafolio</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col cards-container">
                        <Cards labels={["HTML","CSS GRID","Javascript"]} 
                            name="ArtLife" 
                            urlImage="https://i.ibb.co/C0074hg/ArtLife.png" 
                            url=" https://rcuencam.github.io/ArtLife/"/>
                        <Cards labels={["HTML","CSS GRID"]} 
                            name="Energy" 
                            urlImage="https://i.ibb.co/PQySv9h/Energy.png" 
                            url="https://rcuencam.github.io/Energy/"/>
                        <Cards labels={["HTML","CSS","Javascript"]} 
                            name="COVID-19" 
                            urlImage="https://i.ibb.co/JK5XWFd/covid-19.png" 
                            url="https://rcuencam.github.io/COVID-19/"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Portafolio;