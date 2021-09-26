import logo from './logo.svg';
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
        <div className="py-2"></div>
        <section>
          <Contact/>
        </section>
        <div className="py-4"></div>
        <section>
          <Footer/>
        </section>
      </div>
  );
}

export default App;
