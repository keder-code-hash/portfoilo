import React, { Component, useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Paper from '@mui/material/Paper'
import ChangeImage from './changeImage';


function Home(){
    


    return (
        <React.Fragment>
            <div className="container-fluid imgCont">
                <div className="container col-xxl-8 px-2 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        {/* <div className="offset-lg-1 col-12 col-sm-10 col-lg-7">
                            <div className="p-0 m-0">
                                <div className="imgBody">
                                    <img src={process.env.PUBLIC_URL+'illus.jpg'} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="100%" loading="lazy"/>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12">
                        <h1 className="fw-bold lh-1 mb-3 align-items-center display-4 fontStyle" >
                            Hii 👋,
                        <br />
                            I am 
                        <br/>
                            Keder Nath Mallick
                        <br/>
                        </h1>
                        <br/>
                        <p className="lead descFont">
                            <h3> Like to Build Things In A resposive way </h3>
                            <br/>
                            <h3> Love to Solve Real life Problems </h3>
                            <br/>
                        </p>
                        <div className="row">
                                <div className="col-4">
                                    <h3 style={{marginTop:'1em',marginBottom:'1em'}}> have been worked on  </h3>
                                </div>
                                <div className="col-6" style={{margin:"0px"}}>
                                    {/* <img src={process.env.PUBLIC_URL+'Technologies/'+techList[0]} style={{height:'60%',width:'50%'}}></img> */}
                                    <ChangeImage/>
                                </div>
                            </div>
                        <br/>
                        <br/>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <SocialIcon url="https://facebook.com/"/>
                            &nbsp;&nbsp;
                            <SocialIcon url="https://instagram.com/"/>
                            &nbsp;&nbsp;
                            <SocialIcon url="https://github.com/"/>
                            &nbsp;&nbsp;
                            <span>
                                <img src={process.env.PUBLIC_URL+'gmail.png'} alt="gmail" srcset="" height="50px" width="50px"/>
                            </span>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Home