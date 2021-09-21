import { display } from '@mui/system';
import React, { useState } from 'react';
import "../SASS/skill.scss"


//technologies,framework,language
const FrontEnd=[
    {
        id:1,
        name:"HTML",
        skillVal:80
    },
    {
        id:2,
        name:"CSS",
        skillVal:50
    },
    {
        id:3,
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
        id:5,
        name:"NODEJS",
        skillVal:70
    },
    {
        id:6,
        name:"DJANGO",
        skillVal:75
    },
    {
        id:7,
        name:"EXPRESS.JS(framework)",
        skillVal:80
    }
]
const Languages=[
    {
        id:8,
        name:"C",
        skillVal:75
    },
    {
        id:9,
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
        id:11,
        name:"SQL",
        skillVal:85
    },
    {
        id:10,
        name:"NOSQL",
        skillVal:75
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
    const content = props.skills.map((skill) =>
        <div className="col-lg-4 col-md-4 col-xl-3 py-2 px-2" key={skill.id}>
            <div className="card px-0 py-0 skillCard">
                <div className="card-body ">
                    <div class="progress mx-auto" data-value='90'>
                        <span class="progress-left" >
                            <span class="progress-bar border-primary " style={GenerateCircle(skill.skillVal)[0]}></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar border-primary " style={GenerateCircle(skill.skillVal)[1]}></span>
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
    );
    return (
      <div className="row py-2">
        {content}
      </div>
    );
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
    var skillObj=new Array('display','none','display','none');
    const [filter,setFilter]=useState(skillObj);

    function handleFilter(ev){
        // console.log(ev.target.className);
        const property=ev.target.className;
        if(property==='frontEnd'){
            const newObj=['display','none','display','none']
            setFilter(newObj);
        }
        if(property==='backEnd'){
            const newObj=['display','display','display','none']
            setFilter(newObj);
        }
        if(property==='languages'){
            const newObj=['display','display','display','none']
            setFilter(newObj);
        }
        if(property==='database'){
            const newObj=['display','display','display','display']
            setFilter(newObj);
        }
        console.log(filter[0]);
    }

    
    return(
        <React.Fragment>
            <h1 className="display-4 text-center">Skills & Experiences</h1>
            <br></br>
            <br></br>
            <div className="container col-xxl-10 py-4 px-2">
                <span >
                    <ul className="buttonList">
                        <li style={listStyle} key={20} >
                            <button className="frontEnd" onClick={(e)=>handleFilter(e)}>FRONTEND</button>
                        </li>
                        <li style={listStyle} key={21} >
                            <button className="backEnd" onClick={(e)=>handleFilter(e)}>BACKEND</button>
                        </li>
                        <li style={listStyle} key={22} >
                            <button className="languages" onClick={(e)=>handleFilter(e)}>LANGUAGES</button>
                        </li>
                        <li style={listStyle} key={23} >
                            <button className="database" onClick={(e)=>handleFilter(e)}>DATABASE</button>
                        </li>
                        <li style={listStyle} key={24} >
                            <button onClick={(e)=>handleFilter(e)}>FRAMEWORK</button>
                        </li>
                    </ul>
                </span>
                {/* <span>
                    <p className="display-4">WEB DEVELOPMENT</p>
                </span>*/}
                <br></br>
                <br></br> 
                <div className="frontEnd container col-xxl-10 py-2 px-0">
                    <span>
                        <h5 className="text-center">FrontEnd</h5>
                    </span>
                    <br></br>
                    <GenCardComp skills={FrontEnd}/>
                    <br></br>
                </div>
                <div className="backEnd container col-xxl-10  py-2 px-0">
                    <span>
                        <h5 className="text-center">Backend</h5>
                    </span>
                    <br></br>
                    <GenCardComp skills={Backend} />
                    <br></br>
                </div>
                <div className="Languages container col-xxl-10  py-2 px-0">
                    <span>
                        <h5 className="text-center">Languages</h5>
                    </span>
                    <br></br>
                    <GenCardComp skills={Languages}/>
                    <br></br>
                </div>
                <div className="DataBases container col-xxl-10  py-2 px-0">
                    <span>
                        <h5 className="text-center">Database</h5>
                    </span>
                    <br></br>
                    <GenCardComp skills={DataBases}/>
                    <br></br>
                </div>
            </div>
        </React.Fragment>
    );   
}

export default SkillExp