import React,{ useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Switch from 'react-switch'
import './style.css';


const AddList = ({ initList,  setlist}) => {

    const [check,setStatus]=useState(false)
    const [type,setType] = useState('Buy')
    const handleType = () =>{
        setStatus(!check);
        if (check) {
            setType('Buy')
        } 
        else {
            setType('Sell')
        }
    }
    const [ticker,setTicker] = useState('')
    const [volumn,setVolumn] = useState()
    const [start_time,setTimestart] = useState('')
    const [end_time,setTimestop] = useState('')
    const [addstatus,setAddstatus] = useState(0)

    function changeTicker(e){
        setAddstatus(prevstatus => prevstatus+1)
        console.log(addstatus)
        setTicker(e.target.value)
        console.log(ticker)
    }
    function changeVolumn(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setVolumn(e.target.value)
        }
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
    function handleAdd(e) {
        
        const newList = initList.concat({ ticker, volumn, start_time, end_time ,type});
        setlist(newList)
        console.log(newList)
        e.preventDefault();
    }

    return(
        <div >
                <input className="input-ticker" type = "text" value={ticker} placeholder="Ticker" onChange={changeTicker}/>
                <input className="input-volomn" type = "text"  pattern="[0-9]*" value={volumn} placeholder="volumn" onChange={changeVolumn}/>
                <input className="input-timestart" type = "text" value={start_time} placeholder="00:00" onChange={changeTimestart}/>
                <input className="input-timeend" type = "text" value={end_time} placeholder="24:00" onChange={changeTimestop}/>
                    <Switch
                        onChange={handleType}
                        checked={check}
                        onColor="#E4E5E5"
                        offColor="#E4E5E5"
                        onHandleColor="#1E4B72"
                        offHandleColor="#FFB216"
                        height={32}
                        width={60}
                        className="input-switch"
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
                <button className="button-add" onClick={handleAdd} > Add </button>
        </div>
    )
}

export default AddList;