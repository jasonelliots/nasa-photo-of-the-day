import React from "react";
import styled from 'styled-components'; 
import { BigContainer } from './StyledComponents'; 


function Apod(props) {
  const { apodData } = props;

  return (
    <BigContainer>

      

      <h2> {apodData.title}</h2>

      <img src={apodData.url} alt="of the day" />

      <p> {apodData.explanation} </p>
      
      <p> Image for {apodData.date}</p>

    </BigContainer>
  );
}

export default Apod;
