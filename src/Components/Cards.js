import React from "react";
import { Badge } from 'reactstrap';

class Cards extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state=
        {
            listLabels:[...this.props.labels]
        }
    }

    render()
    {
        const list=this.state.listLabels.map((data)=>
            {
                return(
                    <Badge color="warning" className="label" key={data.toString()}>{data}</Badge>
                )
            })
        return(

            <div className="card-hover">
                <div className="card-container">
                    <div className="card-front">
                        <img src={this.props.urlImage} alt="Proyect"/>
                    </div>
                    <div className="card-back">
                        <h2>{this.props.name}</h2>
                        <div className="labels-container">
                            {list}
                        </div>
                        <a href={this.props.url}><button className=" btn bg-warning button">Open</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;