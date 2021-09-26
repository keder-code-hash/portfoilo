import React, { Component } from 'react';
import "../SASS/aboutMe.scss"

function CreateAboutMe(){
    return (
        <React.Fragment>
            <div id="about" className="container col-xxl-10 py-4 px-2">
                <h1 className="text-start display-5" style={{ textTransform: "uppercase",borderRadius: "25px"}} >
                        <a style={{ backgroundColor:"inehrit"}}>
                        01. About Me
                        <div className="dividor"></div>
                        </a>
                </h1>
                <br></br>
                <br></br>
                <div className="row row-justify-content-center" style={{width:"100%",textAlign:"center"}}>
                    <div className="col-lg-8 col-sm-8 col-md-8 order-1">
                        <p><h2 className="text-start py-0 ">Hello,</h2></p>
                        <p className="lead text-center py-0">
                             I am kederNath Mallick from Pandooah and love to build the things from very basics.
                            I am pretty much interested in Web-Development preferably at Backend.
                        </p>
                        <p className="lead">
                            <mark style={{borderRadius:"15px",backgroundColor:"lightblue"}}>Well-organized,hardworking</mark> person with depth knowledge about Web-Development and 
                            still learning.Love to do work in a group.<br/>
                            Currently,I am trying to explore Machine Learning and web 3.0 . 
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-sm-4 order-2 imgCol">
                        <div id="sh" className="shadow px-0 py-0">
                            <picture>
                                <source media="(min-width:650px)" srcset="https://storage.pixteller.com/designs/designs-images/2017-09-20/08/twitter-profile-picture-avatar-1-59c1f99ecca45.png"/>
                                <source media="(min-width:465px)" srcset={process.env.PUBLIC_URL+'myImage.jpg'}/>
                                <img src="https://storage.pixteller.com/designs/designs-images/2017-09-20/08/twitter-profile-picture-avatar-1-59c1f99ecca45.png" alt="Flowers"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default CreateAboutMe