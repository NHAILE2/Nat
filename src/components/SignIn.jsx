import React, { Component } from 'react'

export default class SignIn extends Component {

    constructor(props){
        super(props);
        this.state={
         data:{
            userName:'',
            password:''
        },
        error:{}
        }
    }

    handleChange=(e)=>{
    
       this.setState({
     data:{...this.state.data, [e.target.name]:e.target.value}
    })
    
    
       
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       const error={};
      if(!this.state.data.userName){
        error.userName="user name is empty";
      }
      if(!this.state.data.password){
        error.password="password is empty";
      }
      this.setState({error})



//  console.log(this.state.data.userName.length);
        console.log("error "+error);
    }


    render() {
     
        const {data,error}=this.state;
        const errorCheckName=error.userName && 'nameError';
        const errorCheckPassword=error.password &&'passworderror';
console.log(errorCheckName);
console.log(errorCheckPassword);

        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} >
                    <label >User Name</label>
                    <input type="text" placeholder="name.." name="userName" value={data.userName} onChange={this.handleChange} className={errorCheckName}/>
                   
                    <br/>
                    <label >Password</label>
                    <input type="Password" placeholder="Password..." name="password" value={data.password}  onChange={this.handleChange} className={errorCheckPassword}/>
                    <button type="submit">LogIn</button>
                </form>
                
            </div>
        )
    }
}
