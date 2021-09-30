import React, { Component } from 'react';
// import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <React.Fragment>
            <div className="container-fluid navContainer">
                <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <img src={process.env.PUBLIC_URL+'align.png'} alt="align" srcset="" height="30px" width="30px"/>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        
                    <div class="navbar-nav" style={{paddingRight:"5px"}}>
                        <ul className="navbar-nav mr-auto"> 
                            <li class="nav-item" style={{listStyleType:'none'}}>
                                <a class="nav-link active" href="#LandingSection" >
                                    K 
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about" >About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects" >Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills" >Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact" >Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                    <span style={{paddingRight:"1%",margin:"0px"}}>
                        <a href="">
                            
                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 512 512"
                        style={{fill:"#000000"}}><path fill="#D6E5E5" d="M269.4,193.6c1.8-7.4,6.8-15.3,14.8-17.1c8.3-1.9,16.7-1.5,25.2-2c0.1-15.4,0.6-31-0.3-46.3c-0.5-8.7-0.7-17.4-0.8-26.1c-15.1,0.5-30.3,1.3-45.4,1.8c-20.4,0.6-45,4-59.8,19.6c-9.4,9.9-13,22.6-13.1,36.1c-0.1,15.9,0.3,31.4-1.2,47.3c-0.6,6.1-1.1,12.2-1.7,18.4h-4c-0.6,0.3-1.3,0.5-2.1,0.5c-7.1-0.1-14.2-0.8-21.3-1c-3.9-0.1-7.8-0.2-11.8,0c-1.4,0.1-2.7,0.1-4.1,0.3c0.1,15.8,0.5,31.7-1.4,47.3c5.4,1,10.9,1.7,16.3,2.1c4.8,0.4,13.7,1.6,17.6-1.2c5.6-4.1,11.5,4,7.3,8.6c-1.6,41.1-1.2,82.2,1.4,123.2c7.5,0.3,14.9,0.6,22.6,0.6H268c-0.1-41.9-1.2-83.7-1.3-125.6h0.4c-0.7-3.1,0.8-6.7,4.9-6.7h26.3c0.3-0.3,0.6-0.6,1-0.9c0,0,0-0.1,0-0.1c0.3-1,0.7-2.1,0.8-3.2c0.4-4.6,0.6-9.4,1.1-13.9c1-9.9,4-19.3,6.1-29c-3.1,0.2-6,0-8,0.1c-8.4,0.1-16.8-0.5-25.2-0.5c-0.9,0-1.7-0.2-2.4-0.5h-4.4c0-0.6,0-1.2,0-1.8C267.6,213.7,267,203.2,269.4,193.6z"></path><path fill="#1E4384" d="M463.8,159.9c-16.1-46.6-46.7-87.1-91.3-109.6c-50.9-25.7-111-28.1-166.4-19.3c-49.8,7.9-102.3,25.9-139.6,61.1c-19.6,18.5-34.7,40.9-42.7,66.8c-8,26-10.4,53.1-12.1,80.1c-0.1,1.1-0.4,2-1,2.7c0,0.2,0.1,0.5,0.1,0.8c0,52.9-1.1,108.3,30.1,153.9c25.3,37.1,64.5,61.5,107.2,73.7c88,25.2,194.2,9.6,264.9-50.8C487.2,356,494,247,463.8,159.9z M294,214.9c4.1,0,8.3,0,12.4-0.3c1.4-0.1,2.8-0.2,4.2-0.5c3.2-3.7,10.9-1.2,9.9,4.9c-0.2,0.9-0.5,1.8-0.9,2.5c0,0.5,0,1.1-0.1,1.7c-1.6,8.3-4.1,16.4-5.8,24.6c-1.5,7.5-1.9,15.3-2.5,22.9c-0.2,3.1-1.5,8.6-3.9,10.7c-0.3,0.3-0.7,0.6-1,0.8c-0.8,1.4-2.2,2.4-4.4,2.4h-24c0.2,41.4,1.3,82.7,1.3,124.1c0,1.5-0.5,2.7-1.2,3.7c-0.2,2.4-1.9,4.5-5,4.5h-77.9c-2.9,0-5.8-0.1-8.7-0.4c-0.4,0-0.8-0.1-1.3-0.1c-1.9,1.7-4.8,2.3-7.4,0.1c-1.7-1.5-2.6-3.1-2.7-4.7c-0.7-0.8-1.2-1.9-1.3-3.3c-2.7-40.2-3.2-80.5-1.8-120.8c0-0.6,0-1.1,0.1-1.7c-4.4,0.4-9.1,0-13-0.3c-8.1-0.5-16.2-1.6-24.1-3.3c-3.1-0.7-5-3.6-4.5-6.7c2.8-17.6,2-35.5,2-53.2c0,0,0,0,0,0v-0.2c0-1.9,0.8-3.4,1.9-4.4c3.3-6.2,15.4-4.9,21-4.7c6.8,0.2,13.5,0.7,20.3,1c0.4-0.6,0.8-1.1,1.3-1.5c0.8-7.9,1.4-15.8,1.8-23.8c0.6-15.5-2.2-31.8,1.7-47.1c3-11.6,8.7-21.7,17.8-29.6c16.5-14.3,39.8-19,61.1-19.8c20.2-0.8,40.4-1.9,60.7-2.3v11.4c-0.2,0-0.3,0-0.5,0c0.1,6.1,0.3,12.1,0.5,18.1v7.2h0.3c0,0.7,0.1,1.4,0.1,2.1c0.6,16.4,0.1,32.9,0.1,49.3c0,2.1-0.9,3.6-2.2,4.6c-0.8,1.2-2.2,2.1-4,2.3c-4.9,0.5-9.9,0.5-14.8,0.7c-4.1,0.1-9.3-0.2-13.1,1.7c-6.6,3.2-6.9,11.9-7.2,18.4c-0.1,2.8-0.2,5.6-0.3,8.3C283.9,214.7,289,214.9,294,214.9z"></path><path d="M477.5,166.8c-14.2-46.9-40.9-88.3-82-115.7c-46.4-31-105.3-38.4-159.8-34.4C184,20.4,131,34.5,87.1,62.6c-21.6,13.8-40.9,31.9-55,53.4c-14.9,22.7-22.5,48.8-26.6,75.4c-2.3,15.1-3.4,30.3-4.4,45.6c-0.1,0.9,0.1,1.8,0.4,2.6c-0.9,0.9-1.5,2.2-1.5,3.8c0,30.1-0.6,60.4,4.6,90.2c4.8,27.1,15.2,52.9,31.6,75.1c29.2,39.5,73.5,63.3,120.4,75c88.9,22.2,194.2,3.7,264.5-57.1C495.2,362.6,504.3,255.8,477.5,166.8z M413.1,419.3c-70.8,60.4-176.9,76-264.9,50.8c-42.7-12.2-81.9-36.6-107.2-73.7c-31.1-45.6-30.1-101-30.1-153.9c0-0.3,0-0.5-0.1-0.8c0.5-0.7,0.9-1.6,1-2.7c1.7-27,4.1-54.1,12.1-80.1c7.9-25.9,23.1-48.3,42.7-66.8c37.3-35.2,89.8-53.2,139.6-61.1c55.5-8.8,115.5-6.4,166.4,19.3c44.6,22.5,75.1,63.1,91.3,109.6C494,247,487.2,356,413.1,419.3z"></path><path d="M310.6,214.2c-1.4,0.2-2.8,0.4-4.2,0.5c-4.1,0.3-8.3,0.3-12.4,0.3c-5,0-10.1-0.3-15.1-0.4c0.1-2.8,0.2-5.6,0.3-8.3c0.3-6.5,0.6-15.2,7.2-18.4c3.8-1.9,9-1.5,13.1-1.7c4.9-0.2,9.9-0.1,14.8-0.7c1.9-0.2,3.2-1.1,4-2.3c1.3-1,2.2-2.6,2.2-4.6c0-16.4,0.5-32.9-0.1-49.3c0-0.7-0.1-1.4-0.1-2.1h-0.3v-7.2c-0.2-6-0.4-12.1-0.5-18.1c0.2,0,0.3,0,0.5,0V90.3c-20.2,0.4-40.5,1.6-60.7,2.3c-21.3,0.8-44.5,5.5-61.1,19.8c-9.1,7.9-14.8,18-17.8,29.6c-3.9,15.2-1.1,31.6-1.7,47.1c-0.3,7.9-1,15.9-1.8,23.8c-0.5,0.4-1,0.9-1.3,1.5c-6.8-0.2-13.5-0.8-20.3-1c-5.6-0.1-17.7-1.5-21,4.7c-1.1,1-1.9,2.5-1.9,4.4v0.2c0,0,0,0,0,0c0,17.7,0.8,35.7-2,53.2c-0.5,3.1,1.4,6,4.5,6.7c7.9,1.7,16,2.8,24.1,3.3c3.9,0.3,8.5,0.7,13,0.3c0,0.6-0.1,1.1-0.1,1.7c-1.4,40.3-0.9,80.6,1.8,120.8c0.1,1.4,0.6,2.4,1.3,3.3c0.1,1.6,1,3.2,2.7,4.7c2.5,2.2,5.5,1.6,7.4-0.1c0.4,0,0.8,0.1,1.3,0.1c2.9,0.3,5.7,0.4,8.7,0.4H273c3.2,0,4.8-2.1,5-4.5c0.8-0.9,1.2-2.2,1.2-3.7c0-41.4-1.1-82.7-1.3-124.1h24c2.1,0,3.6-1,4.4-2.4c0.4-0.2,0.7-0.5,1-0.8c2.4-2.2,3.6-7.7,3.9-10.7c0.6-7.6,1-15.5,2.5-22.9c1.6-8.3,4.2-16.3,5.8-24.6c0.1-0.6,0.1-1.1,0.1-1.7c0.5-0.7,0.8-1.5,0.9-2.5C321.6,213,313.8,210.5,310.6,214.2z M301.1,255.2c-0.5,4.6-0.7,9.4-1.1,13.9c-0.1,1.1-0.5,2.2-0.8,3.2c0,0,0,0.1,0,0.1c-0.4,0.2-0.7,0.5-1,0.9H272c-4.1,0-5.6,3.6-4.9,6.7h-0.4c0.1,41.9,1.2,83.7,1.3,125.6h-60.3c-7.7,0-15.1-0.3-22.6-0.6c-2.6-41-3-82.1-1.4-123.2c4.2-4.6-1.7-12.7-7.3-8.6c-3.8,2.8-12.7,1.6-17.6,1.2c-5.5-0.4-10.9-1.1-16.3-2.1c1.9-15.7,1.5-31.6,1.4-47.3c1.4-0.2,2.7-0.3,4.1-0.3c3.9-0.2,7.8-0.1,11.8,0c7.1,0.2,14.2,0.9,21.3,1c0.8,0,1.5-0.2,2.1-0.5h4c0.5-6.1,1.1-12.2,1.7-18.4c1.6-15.9,1.2-31.4,1.2-47.3c0-13.5,3.7-26.2,13.1-36.1c14.8-15.6,39.4-19,59.8-19.6c15.1-0.5,30.3-1.2,45.4-1.8c0,8.7,0.3,17.3,0.8,26.1c0.9,15.4,0.4,30.9,0.3,46.3c-8.4,0.5-16.8,0.2-25.2,2c-8,1.8-13,9.8-14.8,17.1c-2.3,9.6-1.8,20.1-2.1,29.8c0,0.6,0,1.2,0,1.8h4.4c0.7,0.3,1.5,0.5,2.4,0.5c8.4,0,16.8,0.6,25.2,0.5c2,0,4.9,0.1,8-0.1C305.1,235.8,302.2,245.3,301.1,255.2z"></path>
                        </svg> 
                        
                        </a>   
                    </span>
                    <span style={{paddingRight:'1%',margin:"0px"}} >
                        <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="30" height="30"
                            viewBox="0 0 48 48"
                            style={{fill:"#000000"}}><path fill="#2100c4" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path><path fill="#ddbaff" d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z"></path><path fill="#ddbaff" d="M15,18l3.838-1.279c1.01-0.337,1.231-1.684,0.365-2.302l-0.037-0.026 c-2.399,0.44-4.445,1.291-5.888,2.753C13.596,17.658,14.129,18,15,18z"></path><path fill="#ddbaff" d="M28.693,14.402c-0.878,0.623-0.655,1.987,0.366,2.327L32.872,18c0.913,0,1.461-0.37,1.773-0.924 c-1.46-1.438-3.513-2.274-5.915-2.701C28.717,14.384,28.705,14.393,28.693,14.402z"></path><path fill="#ddbaff" d="M24,31c-1.525,0-2.874,0.697-3.791,1.774C21.409,32.931,22.681,33,24,33s2.591-0.069,3.791-0.226 C26.874,31.697,25.525,31,24,31z"></path></svg>       
                        </a>    
                    </span>
                    
                    <span style={{paddingRight:'1%',margin:"0px"}} >
                        <a href="">
                            <img src={process.env.PUBLIC_URL+'instagram.png'} alt="linkedin" srcset="" height="30px" width="30px"/>
                        </a>      
                    </span>
                    <span style={{paddingRight:'1%',margin:"0px"}} >
                        <a href="">
                            <img src={process.env.PUBLIC_URL+'linkedInIcon.png'} alt="linkedin" srcset="" height="30px" width="30px"/>
                        </a>      
                    </span>
                    <span style={{paddingRight:'1%',margin:"0px"}} >
                        <a href="">
                            <img src={process.env.PUBLIC_URL+'gmail.png'} alt="gmail" srcset="" height="30px" width="30px"/>
                        </a>
                    </span>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar