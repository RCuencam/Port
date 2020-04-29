import React from "react";
import Skill from "../Components/Skills";
import {FaLinkedin,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";
const User=(props)=>
{
    return(
        <div className="container" id="user">
            <div className="row user-container">
                <div className="col-12 col-md user-center">
                    <div className="user">
                        <img src="https://i.ibb.co/V3HmXs5/user.jpg" alt="Rodrigo Cuenca"/>
                        <div className="user-info">
                            <h1>Rodrigo Cuenca</h1>
                            <p>Soy un joven dedicado a la creación de páginas/aplicaciones web
                                basadas en las diversas tecnologías que hay actualmente.
                                Apasionado por los códigos y preparado para afrontar nuevos retos que se presenten a futuro, 
                                aprendiendo de los errores para dar soluciones responsables.
                            </p>
                        </div>
                        <div className="social-list">
                            <div className="social-item">
                                <a href="https://www.linkedin.com/in/rcuencam/"><FaLinkedin color="#0072b1" size="30px"/></a>
                            </div>
                            <div className="social-item">
                                <a href="https://twitter.com/rcuencam"><FaTwitter color="#00AAE4" size="30px"/></a>
                            </div>
                            <div className="social-item">
                                <a href="https://www.instagram.com/rcuencam/"><FaInstagram color="#962fbf" size="30px"/></a>
                            </div>
                            <div className="social-item">
                                <a href="https://github.com/RCuencam"><FaGithub color="black" size="30px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md skills">
                    <h1 className="text-orange">Mis conocimientos...</h1>
                    <div className="user-skills">
                        <Skill name="HTML" value="90" text="90%"/>
                        <Skill name="CSS" value="90" text="90%"/>
                        <Skill name="Javascript" value="80" text="80%"/>
                        <Skill name="React JS" value="50" text="50%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;