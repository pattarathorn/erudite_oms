import React from 'react';
import Time from './Time';
import CalendarModule from './CalendarModule';

import { Card } from 'react-bootstrap';

import "./style.css";


function Cardinput(){
    return(
        <Card className ="cardinput">
            <Card.Body>
                
                <CalendarModule />
                <div className = "card-data">
                    
                </div>
                {/*<Time />*/}

            {/*  <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            */}
            </Card.Body>
        </Card>
        
    )
}


export default Cardinput;