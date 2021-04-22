import React,{ useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import calendarlogo from '../source/calendar.svg';
import './style.css';


function CalendarModule(){
    const [value, onChange] = useState(new Date());
    const [calendar, setcalendar] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    var listmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = listmonth[value.getMonth()];
    const year = value.getFullYear();
    const date = value.getDate();
  
  return (
    <div>
        <div className ="calendarBlock">
            
        </div>
        <button className="calendarMonth-Year" onClick={() => setcalendar(true)} onClick={handleShow}>
        
            <img src={calendarlogo} className="logo-calendar" alt="logo" />
            <div className="month-calendar">{month}</div>
            <div className="year-calendar">{year}</div>
        </button>
        <div>
        <Modal show={show} onHide={handleClose}>
          <Calendar
            onChange={onChange}
            onChange={handleClose}
            value={value} />
        </Modal>
      </div>
      <div>
      
      </div>
    </div>
  )
}


export default CalendarModule;