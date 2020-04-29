import React from "react";

const Footer=(props)=>
{
    return(
        <div className="container-fluid footer" id="contact">
            <div className="row">
                <div className="col">
                    <div className="footer-title">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="footer-info">
                        <div className="email item">
                            <p> <label className="text-orange">Email</label>: {props.email}</p>
                        </div>
                        <div className="direction item">
                        <p> <label className="text-orange">Direction:</label>: {props.direction}</p>
                        </div>
                        <div className="phone item">
                        <p> <label className="text-orange">Phone</label>: {props.phone}</p>
                        </div>
                    </div>
                    <p className="copy"> {'\u00A9'} Todos los Derechos Reservados 2020 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;