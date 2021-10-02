import React from 'react';
import '../SASS/projectCard.scss'
import Fade from'react-reveal/Fade'

const proj=[
    {
        project_id:1,
        project_name:"BlogIt",
        project_type:"web application",
        project_url:"https://sheltered-journey-30026.herokuapp.com/",
        project_image:"blogSS.jpg",
        project_tags:['Django','PostgreSql','Bootstrap','editor.js'],
        Project_small_desc:"It is a simple Blog Apllication made in 𝗗𝗝𝗔𝗡𝗚𝗢.Any one can write a story.Go Ahead and make one.."
    },
    {
        project_id:2,
        project_name:"TellMeAJoke",
        project_type:"web extension",
        project_url:"https://microsoftedge.microsoft.com/addons/detail/tellmeajoke/olgjbgflgghcnmjecidhaomidkopicdg",
        project_image:"first.jpg",
        project_tags:['JS','HTML','Bootstrap','CSS'],
        Project_small_desc:"A simple web extension.It can tell you a funny joke and save you from a tedious works."
    }
]

function NumberList(props) {
    const numbers = props.tags;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul className="projTag">{listItems}</ul>
    );
  }

function Cards(props) {
    const content = props.projs.map((post) =>
        <Fade up duration={1500}>
            <div className="row justify-content-center py-4 px-2">
                <div className="offset-lg-4 col-lg-8 col-md-6 col-sm-8 p-0 m-0" style={{alignItems:"center"}}>
                    <div class="blog-card py-0">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(/"+post.project_image+")" }}></div>
                        </div>
                        <div class="description">
                            <h1>{post.project_name}</h1>
                            <br></br>
                            <h2>{post.project_type}</h2>
                            <p> {post.Project_small_desc}</p>
                            <br></br>
                            <NumberList tags={post.project_tags}/>
                            <p class="read-more">
                                <a href={post.project_url}><em>Explore</em></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    );
    return (
      <div className="container-fluid mx-3 px-0 py-2 rowParent">
        {content}
      </div>
    );
  }

  
  
function ProjectDet(){
    return(
        <div data-aos="fade-down" 
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-center">
            <React.Fragment>
                <div className="container col-xxl-10 px-2 py-5">
                    <h1 className="text-start display-5" style={{ textTransform: "uppercase",borderRadius: "25px"}} >
                        <a>
                        02. My Projects
                        <div className="dividor"></div>
                        </a>
                    </h1>
                    <Cards projs={proj}/>
                </div>
            </React.Fragment>
        </div>
    )
}


export default ProjectDet

