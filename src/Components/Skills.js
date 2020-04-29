import React from "react";
import { Progress } from 'reactstrap';

const Skills=(props)=>
{
    return(
        <div className="user-skill">
            <h2 className="text-left">{props.name}</h2>
            <Progress value={props.value} className="progressbar">{props.text}</Progress>
        </div>
    )
}

export default Skills;