import React from 'react'
import PropTypes from 'prop-types'
 function ContactInfo(props) {
    const {header,desc,tempArr}=props
    return (
        <div>
            
        <h3>{header}</h3>
        <p>{desc}</p>    
        <p>{tempArr.name}</p>

        </div>
    )
}
ContactInfo.propTypes={
    header:PropTypes.string,
    desc:PropTypes.string,
    tempArr:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        email:PropTypes.string,
        age:PropTypes.number,
        onlineStatus:PropTypes.bool
    }))
}

export default ContactInfo;