import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
    render() {
        return (
            <div className="nav">
              
                   <ul  className="nav-bar">
                       <li className="nav-bar__item"><Link to='/' className="nav-bar__item__link"  >Home</Link></li>
                       <li className="nav-bar__item"><Link to='/about' className="nav-bar__item__link" >About</Link></li>
                       <li className="nav-bar__item"><Link to='/contact' className="nav-bar__item__link">Contact</Link></li>
                        <div className="nav-bar__log">
                       <li className="nav-bar__log__item"><Link to='/signin' className="nav-bar__log__item__link">Sign In</Link></li>
                       <li className="nav-bar__log__item"><Link to='/signup' className="nav-bar__log__item__link">Sugn Up</Link></li>
                            </div>
                   </ul> 

                  




               </div>


           
        )
    }
}
