
import React from 'react'



function ListTicker({ props,  setlist}){

    const DeleteList = id => {
        setlist(props.filter(item => item.id !== id));
      };

    const item = props.map((item,index) => 
        <div key={index}>
            <div className='show-ticker'>{item.ticker}</div>
            <div className='show-volumn'>{item.volumn}</div>
            <div className='show-start-time'>{item.start_time}</div>
            <div className='show-end-time'>{item.end_time}</div>
            <div className='show-type'>{item.type}</div>
            <button onClick ={() => DeleteList(item.id)} > delete</button> 
        </div>

    );
        

    return (        
        <div className="font-listticker" id="scroll">
            {item}
        
        </div>
            
    )
}
export default ListTicker;
