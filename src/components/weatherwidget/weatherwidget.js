import React from "react";
import { Card } from "react-bootstrap";
import {useEffect, useState} from "react";

//This weather widget shows information about the current weather in barrie
//Data is extracted from the api call to openweathermap
export default function WeatherWidget() {
    const [location, setLocation] = React.useState("barrie");
    const [data, setData] = useState([]);
    //life cycle hook which populates card layout data
    useEffect(() => {
        const fetchWeatherData = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c36ffcd6dbd3d32e3deb52499600743c`)
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
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
                Atmosphere: {data.weather[0].main}
              </p>
            </Card.Text>
          </Card.Body>
        ) : (
          <>{}</>
        )}
        <Card.Footer> Powered By Openweather API</Card.Footer>
      </Card>
    </>
  );
}