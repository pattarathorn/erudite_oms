import React from 'react';
import "./style.css";

class Time extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            date : new Date(),
            date2 : Date()
        }
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
               1000
        ); 
    }
    
    tick() {
        this.setState(
            {
                date: new Date(),
                date2: Date()
            }
        )
    }
    render() {
        return(
            <div>
                <p>this {this.state.date.toLocaleTimeString()}</p>
                <p>this date {this.state.date2}</p>
            
                <form >
                    <label>
                        <input type="text" className="time" placeholder={this.state.date.toLocaleTimeString()} />
                    </label>
                </form>
            </div>
        )
    }
}


export default Time;