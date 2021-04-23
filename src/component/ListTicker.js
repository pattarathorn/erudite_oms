import React from 'react'

function ListTicker(props){
    const item = props.props.map((item) => 
        <div key={item.id}>
            <div>{item.ticker}</div>
            <div>{item.volumn}</div>
            <div>{item.start_time}</div>
            <div>{item.end_time}</div>
            <div>{item.type}</div>

        </div>

    );
        

    return (        
        <div className="font-listticker">
            {item}
                    
        </div>
            
    )
}
export default ListTicker;
