import React from 'react'

export default function Search({onTextChange}) {
  
    
    return (
        <div>
            <input type="text" onKeyUp={(e)=>onTextChange(e.target.value)}/>
        </div>
    )
}
