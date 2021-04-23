import React from 'react'

function ListTicker(props){
    const item = props.props.map((item) => 
        <div key={item.id}>
            <div className='show-ticker'>{item.ticker}</div>
            <div className='show-volumn'>{item.volumn}</div>
            <div className='show-start-time'>{item.start_time}</div>
            <div className='show-end-time'>{item.end_time}</div>
            <div className='show-type'>{item.type}</div>

        </div>

    );
        

    return (        
        <div className="font-listticker">
            {item}
                    
        </div>
            
    )
}
export default ListTicker;
