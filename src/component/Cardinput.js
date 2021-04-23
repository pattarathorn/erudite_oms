import React, { useState } from 'react';
import CalendarModule from './CalendarModule';
import ListTicker from './ListTicker';
import AddList from './AddList';
import { Card } from 'react-bootstrap';

import "./style.css";
/* Mockdata */
const initialList = [
    {
        id:"1",
        ticker:"CPALL",
        start_time:"10.00",
        end_time:"12.30",
        volumn:"1,000,000,000",
        type: 0
    }
];

const Cardinput = () => {
    const [list,setList] = useState(initialList)

    return(
        <Card className ="cardinput">
            <Card.Body>
                <CalendarModule />
                <AddList  
                    initList = {list} 
                    setlist = {setList}
                />
                <div className = "card-data">
                    <ListTicker props={list} />
                </div>
                {/*<Time />*/}
            </Card.Body>
        </Card>
    )
}

export default Cardinput;