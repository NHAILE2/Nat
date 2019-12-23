import React from 'react'
import PropTypes from 'prop-types'

export default function TableRow({item,handleTableClick}) {
    // console.log(item.completed);
    
    return (
        <tr  onClick={()=>handleTableClick(item)}>
         <td >{item.id}</td>
        <td>{item.title}</td>
         <td>{item.completed?'Complited':'On Progress'}</td>
        </tr>
    )
}
TableRow.propTypes={
    item:PropTypes.object.isRequired
}
