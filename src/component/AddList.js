import React,{ useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import './style.css';
import Switch from 'react-switch'

const initialList = [
    {
        ticker:"CPALL",
        start_time:"10.00",
        end_time:"12.30",
        volumn:"1,000,000,000",
        type: true
    }
];

function AddList(){
    const [check,setStatus]=useState(false)
    const changeStatus = () => setStatus(!check);

    const [list,setList] = useState(initialList)
    const [Ticker,setTicker]=useState('')
    const [Volumn,setVolumn]=useState(0)
    const [Timestart,setTimestart]=useState('')
    const [Timestop,setTimestop]=useState('')

    function changeTicker(e){
        setTicker(e.target.value)
        console.log(Ticker)
    }
    function changeVolumn(e){
        setVolumn(e.target.value)
        console.log(Volumn)
    }
    function changeTimestart(e){
        setTimestart(e.target.value)
        console.log(Timestart)
    }
    function changeTimestop(e){
        setTimestop(e.target.value)
        console.log(Timestop)
    }
    function handleAdd(e) {
        const newcheck = !check;
        const newlist = list.concat({Ticker, Volumn,Timestart ,Timestop ,newcheck})
        console.log(newlist)
    }

    return(
        <div className="inputadd">
                <form>
                    <input className="Ticker" value={Ticker} placeholder="Ticker" onChange={changeTicker}/>
                    <input className="Volume" Value={Volumn} placeholder="Volume" onChange={changeVolumn}/>
                    <input className="Ticker" value={Timestart} placeholder="00:00" onChange={changeTimestart}/>
                    <input className="Ticker" value={Timestop} placeholder="24:00" onChange={changeTimestop}/>
                        {/*<Switch
                          onChange={changeStatus}
                          checked={check}
                          onColor="#E4E5E5"
                          offColor="#E4E5E5"
                          onHandleColor="#1E4B72"
                          offHandleColor="#FFB216"
                          height={32}
                          width={60}
                          className="react-switch"
                          id="material-switch"
                          uncheckedHandleIcon={
                            <div
                                style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontFamily:'Roboto',
                                fontSize: 14,
                                color: "white",}}>
                              B
                            </div>
                          }
                          checkedHandleIcon={
                          <div
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontFamily:'Roboto',
                            fontSize: 14,
                            color: "white",}}>
                            S
                          </div>
                          }
                          uncheckedIcon=''
                          checkedIcon=''
                        />*/}
                    <button onClick={handleAdd}>Add</button>
                </form>
        </div>
    )
}

export default AddList;