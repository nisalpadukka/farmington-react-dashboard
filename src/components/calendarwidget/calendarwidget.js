import React from "react";
import { Card } from "react-bootstrap";
import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css';

//Calendar widget used inside tools
export default function Calendarwidget() {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Calendar</Card.Header>
          <Card.Body>
              <Calendar/>
          </Card.Body>
      </Card>
    </>
  );
}