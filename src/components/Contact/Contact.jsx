import React from 'react'
import ContactInfo from './ContactInfo/ContactInfo'
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

        </div>
    )
}
