import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import {Link} from 'react-router-dom'


function Navbar(){
    return(
        
         <React.Fragment>
             
            <div className="container-fluid navContainer">
                <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine">
                    <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <img src={process.env.PUBLIC_URL+'align.png'} alt="align" srcset="" height="30px" width="30px"/>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            
                        <div class="navbar-nav" style={{paddingRight:"5px"}}>
                            <ul className="navbar-nav mr-auto"> 
                                <li class="nav-item" style={{listStyleType:'none'}}>
                                    <a class="nav-link active" href="#LandingSection" >
                                        K 
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about" >About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#projects" >Work</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#skills" >Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact" >Contact</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                        <span style={{paddingRight:"1%",margin:"0px"}}>
                            <a href="https://www.facebook.com/keder.mallick.7" target="_blank" rel="noreferrer">
                                
                            <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
          <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" fill="#26A65B"></path>
        </svg>
                            
                            </a>   
                        </span>
                        <span style={{paddingRight:'1%',margin:"0px"}} >
                            <a href="https://github.com/keder-code-hash" target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" fill="#CF000F"></path>
</svg>       
                            </a>    
                        </span>
                        
                        <span style={{paddingRight:'1%',margin:"0px"}} >
                            <a href="https://www.instagram.com/free_birddim/" target="_blank" rel="noreferrer">
                            <a href="https://www.instagram.com/free_birddim/" target="_blank" rel="noreferrer"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
          <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" fill="#F22613"></path>
          <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" fill="#D24D57"></path>
          <circle cx="344.5" cy="160.5" r="25.5" fill="#9D2933"></circle>
        </svg></a>
                            </a>      
                        </span>
                        <span style={{paddingRight:'1%',margin:"0px"}} >
                            <a href="https://www.linkedin.com/in/keder-nath-mallick-2563401a1/" target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
          <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" fill="#049372"></path>
        </svg>

                            </a>      
                        </span>
                        <span style={{paddingRight:'1%',margin:"0px"}} >
                            <a href="mailto:kedernath.mallick.tint022@gmail.com" target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
          <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" fill="#D24D57"></path>
        </svg>
                            </a>
                        </span>
                    </nav>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Navbar