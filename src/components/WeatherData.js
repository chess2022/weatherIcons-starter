import React from "react";

export default function WeatherData(props) {
    return (
        <>
          <p>
            <span>conditions: </span>
            {props.conditions}
          </p>
          <p>
            <span>time: </span>
            {props.time}
          </p>
        </>
    );
    }
