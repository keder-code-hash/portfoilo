import React from 'react';
import "../SASS/skill.scss"



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
        <div className="col-lg-4 col-md-4 col-xl-3 py-2 px-1" key={skill.id}>
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
      <div className="row">
        {content}
      </div>
    );
  }

function SkillExp(params) {
    
    return(
        <React.Fragment>
            <div className="container col-xxl-10 py-4 px-2">
                <h1 className="display-4 ">Skills & Experiences</h1>
                <br></br>
                <br></br>
                <GenCardComp skills={FrontEnd}/>
            </div>
        </React.Fragment>
    );   
}

export default SkillExp