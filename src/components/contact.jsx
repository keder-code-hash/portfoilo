import React, { Component } from 'react';
import "../SASS/contact.scss"



const buttonStyle={
    color:'white'
    
}
function Contact(){
    return(
        <React.Fragment>
            <div className="container col-xxl-10 py-4 px-2">
                <h1 className="text-start display-5" style={{ textTransform: "uppercase",borderRadius: "25px"}} >
                        <a style={{ backgroundColor:"inehrit"}}>
                        04. Want To Contact
                        <div className="dividor"></div>
                        </a>
                </h1>
                <br></br>
                <br></br>
                <div className="row row-justify-content-center" style={{width:"100%",textAlign:"center"}}>
                    <div className="col-lg-9 col-sm-9 col-md-8 py-2 px-1 buttonDiv">
                        <p>
                            <h4>
                                Currently I am learning ML and AI.If you have any 
                                new idea,feel free to contact with me.Also if you have
                                any question jsut drop me message.I will 
                                try my best to solve.
                            </h4>
                        </p>
                    </div>
                    
                </div>
                <div className="row row-justify-content-center" style={{width:"100%",textAlign:"center",paddingTop:"4%"}}>
                    {/* <div className="col-lg-2 col-sm-2 col-md-2 py-2 px-1" style={{marginLeft:'auto'}}> */}
                        <div className="buttonDiv">
                            <div data-aos="fade-up" data-aos-duration="800">
                                <a href="mailto:kedernath.mallick.tint022@gmail.com" target="_blank" rel="noreferrer">
                                    <button id='btn' style={buttonStyle}>
                                            Contact
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                    {/* </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact