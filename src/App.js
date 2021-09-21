import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';
import SkillExp from './components/skillAndExperience';


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
          <ProjectDet/>
        </section>
        {/* <hr></hr> */}
        <SkillExp/>
      </div>
  );
}

export default App;
