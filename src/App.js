import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'; 
import Apod from './Apod'; 

function App() {

const [nasaData, updateNasaData] =useState(null)


useEffect(() => {
// this will handle API call 
  axios.get('https://api.nasa.gov/planetary/apod?api_key=OCsJ9Ts0XVn8kFyydgls8czkbqSX5Y1zfqvOzJRx')
  .then(res => {
    // console.log(res)
    updateNasaData(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

console.log(nasaData)

if(!nasaData){
  return 'Loading...'
}

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>

      <Apod apodData={nasaData} />
      
    </div>
  );
}

export default App;
