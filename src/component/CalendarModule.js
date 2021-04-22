import React,{ useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import calendarlogo from '../source/calendar.svg';
import Modal from 'react-modal';
import './style.css';


function CalendarModule(){
  const [datestate, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let datenew = datestate.toLocaleDateString();
  console.log('New date is: ', datenew)

  /* ---------- setuptime ----------*/
  var listmonth = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const month = listmonth[datestate.getMonth()];
  const year = datestate.getFullYear();
  const date = datestate.getDate();
  const selectedDate = datestate.getFullYear() + "-" + (datestate.getMonth() + 1) + "-" + datestate.getDate()
  const oneDay = 1000 * 60 *60 *24
  const currentDayInMilli = new Date(selectedDate).getTime();
  /* ---------- nextdate ----------*/
  const nextDayInMilli = currentDayInMilli + oneDay
  const nextDate = new Date(nextDayInMilli).getDate();
  /* ---------- prevdate ----------*/
  const prevDayInMilli = currentDayInMilli - oneDay
  const prevDate = new Date(prevDayInMilli).getDate();

  return (
    <div>
      {/* -------------------- Modal --------------------*/}
      <Modal
          isOpen={show}
          className= "modal-calendar"
          contentLabel="Example Modal"
      >
          <Calendar
            onChange={setDate}
            onClickDay={handleClose}
            value={datestate}
          />
      </Modal>

      {/* ------------------------------------------------*/}
        
        <div className ="calendarBlock">
        
            <div className = "date-calendar" > {date} </div>
            <div className = "dateprev-calendar" > {prevDate} </div>
            <div className = "datenext-calendar" > {nextDate} </div>
        </div>
        <button className="calendarMonth-Year" onClick={handleShow}>
        
            <img src={calendarlogo} className="logo-calendar" alt="logo" />
            <div className="month-calendar">{month}</div>
            <div className="year-calendar">{year}</div>
        </button>
        <div>
          
        </div>
      <div>
      
      </div>
    </div>
  )
}


export default CalendarModule;
