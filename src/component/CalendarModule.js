import React,{ useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import calendarlogo from '../source/calendar.svg';
import Modal from 'react-modal';
import './style.css';


const CalendarModule = ({ props,  setlist}) =>{
  const [datestate, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {
    setShow(false)
    setlist([]);
  }

  const handleShow = () => setShow(true);



  /* ---------- setuptime ----------*/
  var listmonth = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  var listday = ["01","02","03","04","05","06","07","08","09","10"
                  ,"11","12","13","14","15","16","17","18","19","20"
                  ,"21","22","23","24","25","26","27","28","29","30","31"
                ]
  const month = listmonth[datestate.getMonth()];
  const year = datestate.getFullYear();
  const date = datestate.getDate();
  const newdate = listday[date-1];
  const selectedDate = datestate.getFullYear() + "-" + (datestate.getMonth() + 1) + "-" + datestate.getDate()
  const oneDay = 1000 * 60 *60 *24
  const currentDayInMilli = new Date(selectedDate).getTime();
  /* ---------- nextdate ----------*/
  const nextDayInMilli = currentDayInMilli + oneDay
  const nextDate = new Date(nextDayInMilli).getDate();
  const NextDate = listday[nextDate-1];
  /* ---------- prevdate ----------*/
  const prevDayInMilli = currentDayInMilli - oneDay
  const prevDate = new Date(prevDayInMilli).getDate();
  const PrevDate = listday[prevDate-1];
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
          
            <div className = "date-calendar" > {newdate} </div>
            <div className = "dateprev-calendar" > {PrevDate} </div>
            <div className = "datenext-calendar" > {NextDate} </div>
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
