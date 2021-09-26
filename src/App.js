import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';
import SkillExp from './components/skillAndExperience';
import CreateAboutMe from './components/AboutMe';
import Contact from './components/contact';

function App() {
  return (
    <div className="App ">
        <Navbar/>
        <section>
          <Home/>
        </section>
        <br/>
        <br/>
        <br/>
        {/* <hr></hr> */}
        <section>
          <CreateAboutMe/>
        </section>
        <section>
          <ProjectDet/>
        </section>
        {/* <hr></hr> */}
        <section>
          <SkillExp/>
        </section>
        <section>
          <Contact/>
        </section>
      </div>
  );
}

export default App;
