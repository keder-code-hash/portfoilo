import { Typography } from '@mui/material';
import React, { Component } from 'react';

import '../SASS/projectCard.scss'
// const proj

function ProjectDet(){
    return(
        <React.Fragment>
            <div className="container col-xxl-8 px-2 py-5">
                <div className="row px-1 py-1"></div>
                    <div className="col-md-4">
                        <div class="projCard">
                            <div class="face face1">
                            <div class="content">
                                <span class="stars"></span>
                                <h2 class="java">Java</h2>
                                <p class="java">
                                    Java is a class-based, object-oriented programming language 
                                    that is designed to have as few implementation dependencies 
                                    as possible.
                                </p>
                            </div>
                            </div>
                            <div class="face face2">
                            <h2>01</h2>
                            </div>
                        </div>
                    </div>
			     
			    
            </div>
        </React.Fragment>
    )
}


export default ProjectDet