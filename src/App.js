import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';
import ProjectDet from './components/projects';


function App() {
  return (
    <div className="App ">
        <Navbar/>
        <section>
          <Home/>
        </section>
        <hr></hr>
        <section>
          <ProjectDet/>
        </section>
      </div>
  );
}

export default App;
