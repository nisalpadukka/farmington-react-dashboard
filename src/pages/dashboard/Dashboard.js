import Header from "../../components/banner/banner";
import "./Dashboard.css";
import UsersListWidget from "../../components/userListWidget/usersListWidget";
import UsersProfileInfoWidget from "../../components/userProfileInfoWidget/usersProfileInfoWidget";
import WeatherWidget from "../../components/weatherwidget/weatherwidget";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css"
import Agrinews from "../../components/agrinewswidget/agrinews";
import Financewidget from "../../components/financewidget/financewidget";

//Display the main dashboard of the application
//Contains following widgets and dashboard side-bar
const Dashboard = () => {
    return (
        <div className="dash-container">
            <Sidebar />
            <div className="dash-content flex">
                <div className="dash-row1 flex">
                    {/* two column grid for two identical widgets */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                        <div><UsersProfileInfoWidget/></div>
                        <div><UsersListWidget/></div>
                    </div>
                    <Agrinews/>
                    <Financewidget/>
                    <WeatherWidget/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard









