import styled from 'styled-components'; 

const BigContainer = styled.div`

    box-sizing: border-box; 
    width: 100%; 
    /* box-shadow: 14px 20px 31px -6px rgba(0,0,0,0.75); */

    p {
    padding: 5px 40px; 
    text-align: justify; 
    }    

    img {
        width: 100%;
        height: 100vh; 
        border-top: 3px solid black;  
        border-bottom: 3px solid black; 
    } 
`

const BiggestContainer = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


    font-family: 'DM Mono', monospace;
    text-align: center; 
    width: 75%;
    margin: 2% auto; 
    border: 3px solid black;

    h1 {
    text-transform: uppercase; 
    font-family: 'Montserrat', sans-serif;
    }
    h2 {
    font-family: 'Montserrat', sans-serif;  
    }

    section img {
        width: 90%;
        margin: 2%;  
    }
`


export { BigContainer }
export { BiggestContainer}