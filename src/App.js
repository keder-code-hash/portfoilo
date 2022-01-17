import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';
import SkillExp from './components/skillAndExperience';
import CreateAboutMe from './components/AboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Fade from'react-reveal/Fade';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
      <div className="App">
          <Navbar/> 
          <br/>

          <div data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            <section id="LandingSection" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
              <Home/>
            </section> 
          </div>
 
            <section  id="about" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
              <br/>
              <br/>
              <CreateAboutMe/>
              <br/>
              <br/>
              <br/>
            </section> 

        
        <div data-aos="fade-down" 
        data-aos-easing="linear"
        data-aos-duration="800"
        data-aos-anchor-placement="top-center">
          <section id="projects"  style={{paddingTop:'100px',paddingBottom:'50px',paddingLeft:'0px',paddingRight:'0px'}}>
            <br/>
            <ProjectDet/>
          </section>
        </div>

        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-easing="linear" data-aos-duration="800">
          <section  id="skills"> 
            <SkillExp/>
            <br/>
            <br/>
          </section>
        </div>

        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-easing="linear" data-aos-duration="800">
          <section  id="contact" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
            <br/>
            <br/>
            <br/>
            <Contact/>
          </section>
        </div>


        
        <section style={{paddingTop:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <Footer/>
        </section>
      </div>
  );
}

export default App;
