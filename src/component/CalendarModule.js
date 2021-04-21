import React,{ useState } from 'react';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './style.css';


function CalendarModule(){
    const [value, onChange] = useState(new Date());
    
    var listmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = listmonth[value.getMonth()];
    const date = value.getDate();

  return (
    <div>
        <div className ="calendarBlock">
            <p>{month}</p>
        </div>
        <div className="calendarTop">
                <div className="dateOnCalendar">{date}</div>
                
        </div>
      {/*<Calendar
        onChange={onChange}
        value={value}
      />
      */}
      <div>
      
      </div>
    </div>
  );
}


export default CalendarModule;