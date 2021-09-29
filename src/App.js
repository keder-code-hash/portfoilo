import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';
import SkillExp from './components/skillAndExperience';
import CreateAboutMe from './components/AboutMe';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
      <div className="App">
        <Navbar/> 
        <br/>
        <section id="LandingSection" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <Home/>
        </section>
        <section  id="about" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <br/>
          <br/>
          <br/>
          <CreateAboutMe/>
          <br/>
          <br/>
          <br/>
          
        </section>
        <section id="projects"  style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <br/>
          <br/>
          <ProjectDet/>
        </section>
        <section  id="skills">
          <br/>
          <br/>
          <br/>
          <SkillExp/>
          <br/>
          <br/>
        </section>
        <section  id="contact" style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <br/>
          <br/>
          <br/>
          <Contact/>
        </section>
        <section style={{paddingTop:'100px',paddingLeft:'0px',paddingRight:'0px'}}>
          <Footer/>
        </section>
      </div>
  );
}

export default App;
