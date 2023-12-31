// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a157e782d0f39177f4a6bb3aaafa7f86`

  const getLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(api).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input className="search1" type="text" placeholder="Enter Your City Name!" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={getLocation}/>
      </div>

      <div className='content'>
      <h3 className='city'>{data.name}</h3>
      {/* <p>{data.main.feels_like}</p> */}
      <div className='main'>
      {data.name !== undefined && 
      <><div className='bottom'>
            <div className='feelslike'>
              <h4>Feels like: {data.main.feels_like}</h4> 
            </div>
          </div>
          
          <div className='bottom'>
          <div className='temp'>
            {data.main ? <h4>Temperature is: {data.main.temp} </h4>: <h4>Not Available </h4>}
              </div>
            </div>
            
            <div className='bottom'>
            <div className='humidity'>
              {data.main ? <h4>Humidity: {data.main.humidity} </h4>: <h4>Not Available </h4>}
            </div>
            </div>
            
            <div className='bottom'>
            <div className='pressure'>
              {data.main ? <h4>Pressure: {data.main.pressure} </h4>: <h4>Not Available </h4>}
            </div>
             </div></>
      
}
</div>
</div>

    </div>
  );
}

export default App;
