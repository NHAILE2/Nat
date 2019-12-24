import React, { Component } from 'react';
import Plot from 'react-plotly.js';

export default class Stock extends Component {
    constructor(props){
        super(props);
        this.state={
            stockChartXValues:[],
            stockChartYValues:[],
            
        }
    }
componentDidMount(){
       this.fetchStock();
     
       
    }     
fetchStock=()=>{
    const API_KEY='0UPOCMZJ0AU85H4L';
    let StockSymbol='FB'
     let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction=[];
    let stockChartYValuesFunction=[];
  
     fetch(API_CALL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    for(let key in data['Time Series (Daily)']){
            stockChartXValuesFunction.push(key)
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
    }
    console.log(stockChartYValuesFunction);
    this.setState({
        stockChartXValues:stockChartXValuesFunction,
        stockChartYValues:stockChartYValuesFunction
    })
}
    )

}


    render() {
        return (
            <div>
                <h1>Stock</h1>
        {/* <p>x-values: {this.state.stockChartXValues}</p>
        <p>y-values: {this.state.stockChartYValues}</p> */}
        <Plot
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
      />

            </div>
        )
    }
}
