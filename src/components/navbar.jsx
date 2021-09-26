import React, { Component } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignCenter';
import {Link} from 'react-router-dom'


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
                    <div class="navbar-nav" style={{marginLeft:'auto',paddingRight:"5px"}}>
                    <li class="nav-item">
                        <a class="nav-link active" href="#LandingSection" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" >About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills" >Skills</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#projects" >Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#contact" >Contact</a>
                    </li>
                    </div>
                </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar