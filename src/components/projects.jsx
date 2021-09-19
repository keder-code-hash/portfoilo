import React from 'react';
import '../SASS/projectCard.scss'


const proj=[
    {
        project_id:1,
        project_name:"BlogIt",
        project_type:"web_application",
        project_url:"#",
        Project_small_desc:"It is a simple Blog Apllication made in 𝗗𝗝𝗔𝗡𝗚𝗢.Any one can write a story.Go Ahead and make one.."
    },
    {
        project_id:2,
        project_name:"TellMeAJoke",
        project_type:"web_extension",
        project_url:"#",
        Project_small_desc:"A simple web extension.It can tell you a funny joke and save you from a tedious works."
    }
]

function Cards(props) {
    const content = props.projs.map((post) =>
        <div className="col-lg-4 col-md-4 col-xl-3 py-2 px-1 m-1 py-2" key={post.project_id}>
            <div className="projCard">
                <div className="face face1">
                    <div className="content card-body">
                        <span className="stars"></span>
                        <h2 className="backText text-center">
                            {post.project_name}
                        </h2>
                        <br></br>
                        <p className="backText">
                            {post.Project_small_desc}
                        </p>
                        <p className="linkProj">
                            <a href="#">Know More</a>
                        </p>
                    </div>
                </div>
                <div className="face face2">
                    <h2 className="h3 font-weight-bold text-center mb-4 heading">
                        {post.project_name}
                    </h2>                               
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
  
  
function ProjectDet(){
    return(
        <React.Fragment>
            <div className="container col-xxl-10 px-2 py-5">
                <h1 className="text-center display-5">My Projects</h1>
                <br></br>
                <br></br>
                <Cards projs={proj}/>
            </div>
        </React.Fragment>
    )
}


export default ProjectDet