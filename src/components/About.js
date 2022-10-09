import React from "react";
import styled from "styled-components";

function About(){
    return(
        <div>
            <H2>About us</H2>
            <P>BoOk LOvEr website makes it easy for readers to get books easily by identifying which ones are available. </P>
        </div>
    )
}
 const H2 = styled.h2`
   color:red;
   text-align:center;
   Padding:50px;
   font-size:2rem;

 `
 const P =styled.p`
 text-align:center;
 font-size:1.5rem;
 `

export default About;