# Book-Catalogue
<!-- TABLE OF CONTENTS -->

  + [Description](#description)
  + [Installation Requirement](#Installation)
  + [Technology Used](#technology-used)
  + [Getting Started](#getting-started)
  + [Prerequisites](#prerequisites)
  + [Contribution](#contribution)
  + [Code Samples](#code-samples)
  + [Licence](#licence)
  + [Authors Info](#author-Info)
 
<!-- ABOUT THE PROJECT -->
## Description
It is a Website with the following MVPs: The Home page,About Us and Book Categories section. <br>
The significance of this project is:
<ol>
<li>It gives the user a site where they can be able to view available books</li>
</ol>

### Technology Used

Several technologies have been used in the design and implementation of this website.
The technologies are:

-CSS3
-React.js
-Json


<p align="right">(<a href="#top">back to top</a>)</p>

## Contribution
If you need to contribute to this project follow the steps below:<br>
- Fork the repo first (`fork`)
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Code Samples

<!-- HOME SECTION -->
```
 import React from "react";
import book_lover from "../src/images/book_lover.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home(){
    return(
    <div className="home"> 
        <H1>“Books are mirrors:<br></br>you only see in them what you already have inside you.” </H1>

         <ImgBody>
              <img src={book_lover} alt="book lover" width="400px" />
         </ImgBody>
           
           <Link to="./AboutUs">
               <Button>Next</Button>
           </Link>

           <Link to="./Catalogue">
               <Button>Books Available</Button>
           </Link>
    
    </div>
    )
}
const ImgBody = styled.div`
   
  

        img {
     display: flex;
     margin-left: auto;
     margin-right: auto;
    width: 40%;
     }

`
const Button = styled.button`
         background-color:blue;
         padding: 20px;
         cursor: pointer; 
         float:right;
         margin:20px 250px; 
         border-radius:4%;
         box-shadow: 0px 0px 2px 2px rgb(0,0,0);
         
`
const H1 = styled.h1`
         text-align: center;
         color: black;
         font-style: italic;
         font-weight: lighter;
         font-family:Cormorant Upright ;
         font-style: italic;
`

 
export default Home;
 ```
<!-- ACKNOWLEDGMENTS -->
## Authors Info
  
 Rhoda Gachimu (https://github.com/Rhoda-Gachimu)  

 Contact Info (gachimurhoda@gmail.com)


Project Link: [https://github.com/Rhoda-Gachimu/Book-Catalogue]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License
### MIT License

Distributed under the MIT License. See `LICENSE.txt` for more information.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

<p align="right">(<a href="#top">back to top</a>)</p>































