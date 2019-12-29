import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class SharedButton extends Component {
    // submitEvent=()=>{
    //     console.log('button is clicked',this.props.emitEvent);
    //     if(this.props.emitEvent){
    //         console.log('button is emited',this.props.emitEvent);
    //         this.props.emitEvent();
    //     }
    // }

    render() {
        const {buttonText,handelOrder}=this.props
        return (
            <button onClick={handelOrder} data-test="buttonComponent">
                {buttonText}
            </button>
        )
    }
}
SharedButton.propTypes={
    buttonText:PropTypes.string,
    emitEvent:PropTypes.func
}

export default SharedButton;