import React from 'react';
import ChangeImage from './changeImage';
import "../SASS/landing.scss"; 

function Home(){
    return (
        <div className="container-fluid imgCont" >
            <div className="container px-2 py-5">
                {/* <div className="row align-items-center g-5 py-5 px-0"> */}
                    <div className="order-lg-1 col-md-auto col-lg-auto text-center">
                        <h1 className="fw-bold lh-1 mb-3 align-items-center display-4 " > 
                            Hii,
                            I am 
                        <br/>
                            Keder Nath Mallick
                        <br/>
                        </h1>
                        <br/>
                        <p className="lead">
                            <h3> Like to Build Things In A <span className='style_para' >responsive way </span></h3>
                            <br/>
                            <h3> Love to <span className='style_para' >Solve Real life Problems</span> </h3>
                            <br/>
                        </p>
                    </div>

                    {/* <div className="wrapper order-lg-2 col-md-6 col-sm-10 col-lg-4">
                        <ChangeImage/>
                    </div> */}
                
                {/* </div> */}
                <div className='text-center'>
                <div data-aos="fade-up" data-aos-duration="800" >
                    <span>
                        <button href="#contact" id="btn1">CV</button>
                    </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                    <a href="#contact" style={{color:"#000000"}}>
                        <button id="btn2">CONTACT</button>
                    </a>
                </span>
                </div>
                
            </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Home