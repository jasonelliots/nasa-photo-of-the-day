import React from "react";

function Apod(props) {
  const { apodData } = props;

  return (
    <div className="apod">

      <h2> {apodData.title}</h2>

      <img src={apodData.url} alt="of the day" />

      <p> {apodData.explanation} </p>
      
      <p> Image for {apodData.date}</p>

    </div>
  );
}

export default Apod;
