import "./Weather.css";
import UsersListWidget from "../../components/userListWidget/usersListWidget";
import UsersProfileInfoWidget from "../../components/userProfileInfoWidget/usersProfileInfoWidget";
import WeatherWidget from "../../components/weatherwidget/weatherwidget";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";



import "./Weather.css"
import WeatherwidgetExtended from "../../components/weatherwidgetExtended/weatherwidgetExtended";

//This page displays extended weather information
const Weather = () => {
    return (
        <div className="dash-container">
            <Sidebar />
            <div className="dash-content flex">
                <div className="dash-row1 flex">
                    <WeatherwidgetExtended/>
                </div>
            </div>
        </div>
    );
};

export default Weather









