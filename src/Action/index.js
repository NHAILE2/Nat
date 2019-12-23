import {FETCH_DATA} from './type'

export  const  getData=()=>dispatch=>{

    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res=>res.json())
    .then(data=>dispatch({
        type:FETCH_DATA,
        payload:data
    }));

}