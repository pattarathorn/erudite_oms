import React,{ useState } from 'react';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import calendarlogo from '../source/calendar.svg';
import './style.css';


function CalendarModule(){
    const [value, onChange] = useState(new Date());
    const [calendar, setcalendar] = useState(false);
    
    var listmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = listmonth[value.getMonth()];
    const year = value.getFullYear();
    const date = value.getDate();

  function handleCalendar(){
    console.log('button was click')
    return{
      if(calendar){
      
        <Calendar
          onChange={onChange}
          value={value}
        />
      }
  }
  }
  return (
    <div>
        <div className ="calendarBlock">
            
        </div>
        <button className="calendarMonth-Year" onClick={() => setcalendar(true)} onClick={handleCalendar}>
        
            <img src={calendarlogo} className="logo-calendar" alt="logo" />
            <div className="month-calendar">{month}</div>
            <div className="year-calendar">{year}</div>
        </button>
      <Calendar
        onChange={onChange}
        value={value}
      />
      
      <div>
      
      </div>
    </div>
  );
}


export default CalendarModule;