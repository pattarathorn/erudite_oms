import React,{ useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Switch from 'react-switch'
import './style.css';


const AddList = ({ initList,  setlist}) => {
    console.log(setlist)
    const [check,setStatus]=useState(false)
    const changeStatus = () => setStatus(!check);

    
    const [ticker,setTicker] = useState('')
    const [volumn,setVolumn] = useState(0)
    const [start_time,setTimestart] = useState('')
    const [end_time,setTimestop] = useState('')

    function changeTicker(e){
        setTicker(e.target.value)
        console.log(ticker)
    }
    function changeVolumn(e){
        setVolumn(e.target.value)
        console.log(volumn)
    }
    function changeTimestart(e){
        setTimestart(e.target.value)
        console.log(start_time)
    }
    function changeTimestop(e){
        setTimestop(e.target.value)
        console.log(end_time)
    }
    function handleAdd() {
        
        const newList = initList.concat({ ticker, volumn, start_time, end_time });
        setlist(newList)
        console.log(newList)
    }

    return(
        <div className="inputadd">
                <input className="Ticker" value={ticker} placeholder="Ticker" onChange={changeTicker}/>
                <input className="Volume" value={volumn} placeholder="volumn" onChange={changeVolumn}/>
                <input className="Ticker" value={start_time} placeholder="00:00" onChange={changeTimestart}/>
                <input className="Ticker" value={end_time} placeholder="24:00" onChange={changeTimestop}/>
                    <Switch
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
                                color: "white",}}
                            >
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
                                color: "white",}}
                            >
                                S
                            </div>
                        }
                            uncheckedIcon=''
                            checkedIcon=''
                    />
                <button className="button-add"onClick={handleAdd}> Add </button>
        </div>
    )
}

export default AddList;