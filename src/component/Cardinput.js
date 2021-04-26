import React, { useState,useEffect } from 'react';
import CalendarModule from './CalendarModule';
import ListTicker from './ListTicker';
import AddList from './AddList';

import { Card } from 'react-bootstrap';
import axios from 'axios';

import "./style.css";
/* Mockdata */
const initialList = [
    {
        id:"0",
        ticker:"CPALL",
        start_time:"10.00",
        end_time:"12.30",
        volumn:"1,000,000,000",
        type: 0
    }
];

const Cardinput = () => {
    const [list,setList] = useState(initialList);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios("https://randomuser.me/api")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            }
        );
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    


    return(
        <Card className ="cardinput">
            <Card.Body>
            

                <CalendarModule 
                    props = {list}
                    setlist = {setList}
                />
                <AddList  
                    initList = {list} 
                    setlist = {setList}
                />
                <div className = "card-data">
                    <ListTicker 
                        props={list} 
                        setlist = {setList}
                    />
                    
                </div>
            </Card.Body>
            
        </Card>
    )
}

export default Cardinput;