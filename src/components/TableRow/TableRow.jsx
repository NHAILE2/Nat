import React from 'react'
import PropTypes from 'prop-types'

export default function TableRow({item,handleTableClick}) {
    // console.log(item.completed);
    if(!item){
        return null
    }
    return (
        <tr data-test="row" onClick={()=>handleTableClick(item)}>
         <td data-test="row-item">{item.id}</td>
        <td>{item.title}</td>
         <td>{item.completed?'Complited':'On Progress'}</td>
        </tr>
    )
}
TableRow.propTypes={
    item:PropTypes.object.isRequired,
    handleTableClick:PropTypes.func
}
