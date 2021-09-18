import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/mainLandingSec';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <section>
          <Home/>
        </section>
      </div>
  );
}

export default App;
