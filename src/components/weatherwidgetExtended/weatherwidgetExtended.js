import React from "react";
import { Card } from "react-bootstrap";
import {useEffect, useState} from "react";

//This is the extended version of the weather widget which shows more information about the weather
//Additional data was extracted from the api call
export default function WeatherwidgetExtended() {
    const [location, setLocation] = React.useState("barrie");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchWeatherData = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c36ffcd6dbd3d32e3deb52499600743c`)
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
                    console.log(result)
                });
        };
        fetchWeatherData();
    }, []);
  return (
    <>
      <Card className="text-center pt-4">
          <Card.Header className="backG font-weight-bold" style={{color:"black", fontWeight:"bold"}}>Weather Information</Card.Header>
        {typeof data.main != "undefined" ? (
          <Card.Body>
            <Card.Title>Todays Weather</Card.Title>
            <Card.Text>
              <p>
                Temprature: {data.main.temp} &deg;C Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")} <br />
                Humidity: {data.main.humidity} <br />
                  Feels Like: {data.main.feels_like} <br />
                  Temp Min: {data.main.temp_min} <br />
                  Temp Max: {data.main.temp_max} <br />
                  Wind Speed: {data.wind.speed} <br />
                Atmosphere: {data.weather[0].main}
              </p>
            </Card.Text>
          </Card.Body>
        ) : ( //if unable to fetch data body layout will not displayed
          <>{}</>
        )}
        <Card.Footer> Powered By Openweather API</Card.Footer>
      </Card>
    </>
  );
}