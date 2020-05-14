import React from "react";



function ImagePrinter(props){

    const {imageSource} = props
    
    return (
        <img src={imageSource} alt="beautiful mars" />
    )

}

export default ImagePrinter