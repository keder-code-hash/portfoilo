import React, { Component } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignCenter';
import { Button } from '@mui/material';


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
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    &nbsp;
                    <a class="nav-item nav-link" href="#">About Me</a> 
                    &nbsp;
                    <a class="nav-item nav-link" href="#">Skills</a>
                    &nbsp;
                    <a class="nav-item nav-link" href="#">Projects</a>
                    &nbsp;
                    <a class="nav-item nav-link " href="#">Contact</a>
                    &nbsp;
                    </div>
                </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar