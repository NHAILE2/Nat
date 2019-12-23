import React, { Component } from "react";
 import Stock from './Stock';
const API_KEY = "5c54bd1abf225c0ceb22578843b1ad30";

//http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}


function kelvinToFahrenheit (temp) {
    return Math.round((temp- 273.15) * 9/5 + 32)
}
console.log(kelvinToFahrenheit (277));


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_min: [],
      temp_max: [],
      temp: [],
      country:'',
      city:''
    };
  }
  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Alexandria,US&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          temp: data.main.temp
        })
      );
  }

  handleChange=(e)=>{
    
    this.setState({
  [e.target.name]:e.target.value
 });
 console.log(this.state.country);
 console.log(parseInt('123XYZ'));
 
 
}


  render() {
    const { temp_min, temp_max, temp,city,country } = this.state;
    return (
      <div className="wrapper">
        <div className="home">
          <div className="home__container">
            <h1>Home page</h1>
            <p>
              Anywhere, anytime. Enjoy risk-free with our 30-day, money-back
              guarantee.{" "}
            </p>
            <input type="text" className="home__search" />
            <button type="submit" className="btn">
              <i className="fa fa-search">search</i>
            </button>
          </div>
        </div>
        <div className="wrapper__home">
          <div>
            <h1>Weather</h1>
            <form>
                <input type="text" className="wrapper__home__weather" placeholder="Country..." name="country" value={country} onChange={this.handleChange}/>
                <input type="text" className="wrapper__home__weather" placeholder="City..." name="city" value={city} onChange={this.handleChange}/>
                <input type="submit" value="Get Temperature "/>
            </form>


            <h2>{`Min ${kelvinToFahrenheit (temp_min)} Max ${kelvinToFahrenheit (temp_max)}`}</h2>
            <h2>{`Temp ${kelvinToFahrenheit (temp)}`}</h2>
          </div>
          <div>
            <h3>Titel</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            ducimus consequatur dolores nisi quas quia praesentium quos suscipit
            excepturi voluptatem sapiente sunt, dolorem vero accusamus modi
            officiis perspiciatis tenetur inventore doloremque nam. Natus, ad
            facilis architecto dolorem maiores placeat repellendus velit
            inventore voluptates ea recusandae quidem id laudantium nesciunt
            mollitia, doloremque sapiente numquam laborum quibusdam perspiciatis
            exercitationem quia ducimus. Dolor libero reiciendis aperiam dolorem
            minus ut ducimus, pariatur repudiandae inventore eveniet nostrum
            quas maxime. Quam sequi atque debitis repudiandae. Dignissimos.
          </div>
          <div>
            <h3>Titel</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            consectetur cupiditate reiciendis exercitationem aut quam minus
            commodi assumenda sed ratione temporibus voluptatum architecto non
            totam natus autem fuga, itaque adipisci.
          </div>
        </div>

        <Stock/>
      </div>
    );
  }
}
