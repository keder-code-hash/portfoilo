import React, { useState } from 'react';
import "../SASS/skill.scss"
import Fade from 'react-reveal/Fade';

//technologies,framework,language
const FrontEnd=[
    
    {
        id:3,
        name:"HTML",
        skillVal:80
    },
    {
        id:2,
        name:"CSS",
        skillVal:50
    },{
        id:1,
        name:"BOOTSTRAP",
        skillVal:80
    },
    {
        id:4,
        name:"JS+JQUERY",
        skillVal:70
    }
]
//technologies,framework
const Backend=[
    
    {
        id:1,
        name:"DJANGO",
        skillVal:75
    },
    {
        id:2,
        name:"EXPRESS.JS(framework)",
        skillVal:80
    },
    {
        id:3,
        name:"NODEJS",
        skillVal:70
    }
]
const Languages=[
    {
        id:8,
        name:"C",
        skillVal:75
    },
    {
        id:19,
        name:"C++",
        skillVal:70
    },
    {
        id:9,
        name:"python",
        skillVal:80
    },
    {
        id:10,
        name:"JAVA",
        skillVal:70
    },
]
const DataBases=[
    
    {
        id:12,
        name:"NOSQL",
        skillVal:75
    },{
        id:11,
        name:"SQL",
        skillVal:85
    },
]


const percentToDeg=(percent)=>{
    return ((percent/100) * 360);
}
function GenerateCircle(val){
    var leftPart={
        transform:''
    }
    var rightPart={
        transform:''
    }
    if(val>0){
        if(val<=50){
            rightPart.transform="rotate("+percentToDeg(val)+"deg)"
        }
        else{
            rightPart.transform="rotate(180deg)"
            leftPart.transform="rotate("+percentToDeg(val-50)+"deg)"
        }
    }
    return [leftPart,rightPart]
}

function GenCardComp(props) {
    const content = props.skills.map((skill,index) =>
        <Fade left duration={700+(500*(index+2))}>
            <div className="col-lg-4 col-md-4 col-xl-3 py-2 px-2" key={skill.id}>
                <div className="card px-0 py-0 skillCard">
                    <div className="card-body ">
                        <div class="progress mx-auto" data-value='90'>
                            <span class="progress-left" >
                                <span class="progress-bar border-primary" style={GenerateCircle(skill.skillVal)[0]}></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar border-primary" style={GenerateCircle(skill.skillVal)[1]}></span>
                            </span>
                            <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div class="h2 font-weight-bold">{skill.skillVal}%</div>
                            </div>
                        </div>
                        <br></br>
                        <p className="display-5 lead text-center">
                            {skill.name}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
    return (
      <div className="row py-2">
        {content}
      </div>
    );
  }


function GenContainer(props){
    const cName=props.containerName;
    const name="container col-xxl-10  py-2 px-0"+cName;
    const container=
            <div className={name}>
                <span>
                    <h5 className="text-center">{props.conatinerName}</h5>
                </span>
                <br></br>
                <GenCardComp skills={props.containerName}/>
                <br></br>
            </div>
    return(
        <div>
            {container}
        </div>
    )
  }


const initButtonStyle={
    "border-radius":"15px"
}
const listStyle={
    "list-style-type": "none",
    "padding": "5px"
}


function handleFilter(ev){
    console.log(ev.target.className);
    // console.log)
}

function SkillExp() {
    var skillObj=new Array('ds','ds','s','ds');
    const [filter,setFilter]=useState(skillObj);
    const [container,SetContainer]=useState(Backend);


    function handleFilter(ev){
        SetContainer(null);
        // console.log(ev.target.style.backgroundColor);
        const property=ev.target.className;
        if(property==='frontEnd'){
            
            SetContainer(FrontEnd);
            const newFilter=filter;
            if(filter[0]==='ds'){
                console.log("select");
                newFilter[0]='s';
                setFilter(newFilter);
            }
            else if(filter[0]==='s'){
                console.log("deselect");
                newFilter[0]='ds';
                setFilter(newFilter);
            }
             
        }
        if(property==='backEnd'){
            SetContainer(Backend);
            const newFilter=filter;
            if(filter[1]==='s'){
                console.log("deselect");
                newFilter[1]='ds';
                setFilter(newFilter);
            }
            else if(filter[1]==='ds'){
                console.log("select");
                newFilter[1]='s';
                setFilter(newFilter);
            }
        }
        if(property==='languages'){
            SetContainer(Languages);
            const newFilter=filter;
            if(filter[2]==='s'){
                newFilter[2]='ds';
                setFilter(newFilter);
            }
            else if(filter[2]==='ds'){
                newFilter[2]='s';
                setFilter(newFilter);
            }
        }
        if(property==='database'){
            SetContainer(DataBases);
            const newFilter=filter;
            if(filter[3]==='s'){
                newFilter[3]='ds';
                setFilter(newFilter);
            }
            else if(filter[3]==='ds'){
                newFilter[3]='s';
                setFilter(newFilter);
            }
        }
    }

    
    return(
        <React.Fragment>
            <div className="container col-xxl-10 py-4 px-2">
                <h1 className="text-start display-5" style={{ textTransform: "uppercase",borderRadius: "25px"}} >
                        <a style={{ backgroundColor:"inehrit"}}>
                        03. Skills & Experiences
                        <div className="dividor"></div>
                        </a>
                </h1>
                <br></br>
                <br></br>
                <div className="row row-justify-content-center" style={{width:"100%",textAlign:"center"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <span >
                            <ul className="buttonList">
                                <li style={listStyle} key={20} >
                                    <button id="btn" className="frontEnd"  onClick={(e)=>handleFilter(e)} >FRONTEND</button>
                                </li>
                                <li style={listStyle} key={21} >
                                    <button id="btn"  className="backEnd" onClick={(e)=>handleFilter(e)} >BACKEND</button>
                                </li>
                                <li style={listStyle} key={22} >
                                    <button  id="btn" className="languages" onClick={(e)=>handleFilter(e)} >LANGUAGES</button>
                                </li>
                                <li style={listStyle} key={23} >
                                    <button  id="btn" className="database" onClick={(e)=>handleFilter(e)} >DATABASE</button>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
                <Fade cascade duration={1000}>
                    <div className="row row-justify-content-center" style={{width:"100%",textAlign:"center"}}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <br></br> 
                            <GenContainer containerName={container}/>
                        </div>
                    </div>
                </Fade>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>
    );   
}

export default SkillExp