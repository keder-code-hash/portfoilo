import React, { Component, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper'
import ChangeImage from './changeImage';


function Home(){
    


    return (
        <React.Fragment>
            <div className="container-fluid imgCont">
                <div className="container col-xxl-8 px-2 py-5">
                    <div className="row align-items-center g-5 py-5 px-0">
                        <div className="order-lg-2 order-md-2 col-md-12 col-sm-10 col-lg-4">
                            {/* <div className="p-0 m-0"> */}
                                {/* <div className="imgBody ms-auto"> */}
                                    <ChangeImage/>
                                    
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                        <div className="order-lg-1 order-md-1 col-lg-7">
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
                            {/* <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <h3 style={{marginTop:'1em',marginBottom:'1em'}}> have been worked on  </h3>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12" style={{margin:"0px"}}>
                                        <ChangeImage/>
                                    </div>
                                </div>
                            <br/>
                            <br/> */}
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Home