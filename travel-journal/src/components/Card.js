import React from "react"
import locLogo from "../logos/Location-logo.png"

export default function(props){

    return(
        <div className="card">
            <img src={props.item.imgSrc} className="img"/>

            <div className="info">
                <div className="loc-line">
                    <img src={locLogo} className="loc-logo"/>
                    <span className="place">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on google maps</a>
                </div>

                <h3 className="name">{props.item.title}</h3>

                <p className="description">{props.item.description}</p>
            </div>

        </div>
    )
}