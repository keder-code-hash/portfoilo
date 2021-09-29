import React, { Component } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignCenter';
import { SocialIcon } from 'react-social-icons';
// import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <React.Fragment>
            <div className="container-fluid navContainer">
                <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <FormatAlignLeftIcon fontSize="medium" color="white"/>
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
                    <span style={{paddingRight:"1%",margin:"0px"}}><SocialIcon url="https://facebook.com/"/></span>
                    <span style={{paddingRight:'1%',margin:"0px"}} ><SocialIcon url="https://github.com/"/></span>
                    <span style={{paddingRight:'1%',margin:"0px"}} ><SocialIcon url="https://instagram.com/"/></span>
                    <span style={{paddingRight:'1%',margin:"0px"}} ><img src={process.env.PUBLIC_URL+'gmail.png'} alt="gmail" srcset="" height="50px" width="50px"/></span>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar