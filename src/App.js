import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'; 
import Apod from './Apod'; 
import styled from 'styled-components'; 
import { BiggestContainer } from './StyledComponents'; 
import ImagePrinter from './ImagePrinter'; 

function App() {

const [nasaData, updateNasaData] =useState(null)
const [nasaImages, updateNasaImages] =useState(null)


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


useEffect(() => {
  // this will handle API call 
    axios.get('https://api.spacexdata.com/v3/launches/latest')
    .then(res => {
      console.log(res)
      updateNasaImages(res.data.links.flickr_images)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

if(!nasaData){
  return 'Loading...'
}

if(!nasaImages){
  return 'Loading...'
}

  return (
    <BiggestContainer>

      <h1>NASA Photo of the Day</h1>

      <Apod apodData={nasaData} />

      <section>
      {nasaImages.map((imageObj, index) => {
        return <ImagePrinter key={index} imageSource={imageObj} />
      })}

      </section>

      
    </BiggestContainer>
  );
}

export default App;
