import React from 'react';
import ChangeImage from './changeImage';


function Home(){
    


    return (
        <React.Fragment>
            <div className="container-fluid imgCont">
                <div className="container col-xxl-8 px-2 py-5">
                    <div className="row align-items-center g-5 py-5 px-0">
                        <div className="order-lg-1 col-md-6 col-lg-7">
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
                        </div>
                        
                        <div className="wrapper order-lg-2 col-md-6 col-sm-10 col-lg-4">
                            <ChangeImage/>
                        </div>
                    </div>
                    
                    
                    <br/>
                    <br/>
                    <br/>
                    <div style={{position:'absolute'}}>
                        <span>
                            <button id="btn" className="CV" style={{borderRadius:"20px",backgroundColor:"#00b1d480"}}>MY CV</button>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <button id="btn" className="cont" style={{borderRadius:"20px",backgroundColor:"#00b1d480"}}>contact</button>
                        </span>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Home