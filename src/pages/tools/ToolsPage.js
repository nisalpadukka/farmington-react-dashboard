import React from "react";
import "./ToolsPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendarwidget from "../../components/calendarwidget/calendarwidget";
import Checklistwidget from "../../components/checklist/checklistwidget";

//Tools page container a calendar and checklist
export default function Tools() {
  return (
    <>
      <div className="container pt-2" style={{ width: "25rem" }}>
        <div className="align-items-center justify-content-center">
          <Calendarwidget/>
        </div>
      </div>
        <div className="container pt-1" style={{ marginTop: "5rem" }}>
            <h1 className="text-center mb-4">Check-list</h1>
            <Checklistwidget/>
        </div>
    </>
  );
}


