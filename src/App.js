import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';
import SkillExp from './components/skillAndExperience';
import CreateAboutMe from './components/AboutMe';
import Contact from './components/contact';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
function App() {
  return (
      <div className="App">
        <Navbar/>
        <section>
          <Home/>
        </section>
        <br/>
        <br/>
        <br/>
        <section>
          <CreateAboutMe/>
        </section>
        <section>
          <ProjectDet/>
        </section>
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
