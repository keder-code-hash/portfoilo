import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Paper from '@mui/material/Paper'

function Home(){
    return (
        <React.Fragment>
            <div className="container-fluid imgCont">
                <div className="container col-xxl-8 px-2 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-12 col-sm-10 col-lg-8">
                            <div className="card p-0 m-0">
                                <div className="card-body imgBody">
                                    <img src={process.env.PUBLIC_URL+'illus.jpg'} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="100%" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4">
                        <h1 className="fw-bold lh-1 mb-3 align-items-center display-4 fontStyle" >Hii 
                            👋,
                        <br />
                        I am Keder
                        </h1>
                        <br/>
                        <p className="lead descFont">
                            Like to Build Things In A resposive way
                            <br/>
                            Love to Solve Real life Problems
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <SocialIcon url="https://facebook.com/"/>
                            &nbsp;&nbsp;
                            <SocialIcon url="https://instagram.com/"/>
                            &nbsp;&nbsp;
                            <SocialIcon url="https://github.com/"/>
                            &nbsp;&nbsp;
                            <SocialIcon url="https://gmail.com/"/>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Home