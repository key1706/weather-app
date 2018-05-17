import React from 'react';
import Titles from './Components/Titles'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = 'afef3f41aa0d9c5efe821d40154495fb';

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=10.9358&lon=106.8860&appid=${API_KEY}`);
        const data = await  api_call.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;
