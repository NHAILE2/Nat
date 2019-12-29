import React from 'react'
import ContactInfo from './ContactInfo/ContactInfo'
import SharedButton from '../Button'
const tempArr=[{
    name:'John',
    email:'John@gmail.com',
    age: 20,
    onlineStatus:false
}]

export default function Contact() {

    return (
        <div className="contact">
            <h1>Contact</h1>
            <ContactInfo header='Posts' desc='Click the button' tempArr={tempArr}/>
            <SharedButton buttonText="ClickMe"  />
            <button onClick={()=>window.location='https://www.google.com'}>google</button>


        </div>
    )
}
