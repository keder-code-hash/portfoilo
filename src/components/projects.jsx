import React from 'react';
import '../SASS/projectCard.scss'



const proj=[
    {
        project_id:1,
        project_name:"BlogIt",
        project_type:"web_application",
        project_url:"#",
        Project_small_desc:"It is a simple Blog Apllication made in <strong>DJANGO</strong>.Any one can write a story.Go Ahead and make one.."
    },
    {
        project_id:2,
        project_name:"TellMeAJoke",
        project_type:"web_extension",
        project_url:"#",
        Project_small_desc:"A simple web extension.It can tell you a funny joke and save you from a tedious works."
    }
]

function ProjectDet(){
    
    return(
        <React.Fragment>
            <div className="container col-xxl-8 px-2 py-5">
                <h1 className="text-center display-5">My Projects</h1>
                <br></br>
                <br></br>
                <div className="row px-1 py-1">
                    {
                        proj.map((pr)=>{
                            console.log(pr);
                            <div className="col-md-4">
                                <div className="projCard">
                                    <div className="face face1">
                                        <div className="content card-body">
                                            <span className="stars"></span>
                                            <h2 className="backText text-center">
                                                {pr.project_name}
                                            </h2>
                                            <br></br>
                                            <p className="backText">
                                                {pr.Project_small_desc}
                                            </p>
                                            <p className="linkProj">
                                                <a href="#">Know More</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <h2 className="h3 font-weight-bold text-center mb-4 heading">
                                            {pr.project_name}
                                        </h2>                               
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    
                </div>
            </div>
        </React.Fragment>
    )
}


export default ProjectDet