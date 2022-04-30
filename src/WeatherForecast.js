import React from "react";

export default function WeatherForecast(props) {
    return (
        <div className="weather">
          <img src={props.img} />
          <p>
            <span>conditions: </span>
            {props.conditions}
          </p>
          <p>
            <span>time: </span>
            {props.time}
          </p>
        </div>
    );
}


