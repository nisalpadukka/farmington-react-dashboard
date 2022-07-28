import React from "react";
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faCalendar, faCloud } from '@fortawesome/free-solid-svg-icons'

//Sidebar component in dashboard
function Sidebar() {
    return(
        <div className="Sidebar">
            <div className="Sidebar-Inner">
                <div className="Sidebar-Menu">
                   <ul className="Sidebar-List">
                       <a href="/" className="Sidebar-List-Item"> <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faHome} /> Home  </a>
                       <a href="/tools" className="Sidebar-List-Item"> <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faList} /> Check-list</a>
                       <a href="/tools" className="Sidebar-List-Item"> <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faCalendar} />  Calendar</a>
                       <a href="/weather" className="Sidebar-List-Item"> <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faCloud} />  Advance Weather</a>
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;