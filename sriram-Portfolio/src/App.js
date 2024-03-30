import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import GitHubActivity from './GithubActivity/GithubActivity';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Project';
import Qualification from './Qualification/Qualification';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <hr class='breakLine'></hr>
     <About/>
     <hr class='breakLine'></hr>
     <Qualification/>
     <hr class='breakLine'></hr>
     <Projects/>
     <hr class='breakLine'></hr>
     <Skills/>
     <hr class='breakLine'></hr>
     <GitHubActivity/>
     <hr class='breakLine'></hr>
     <Contact/>
    </div>
  );
}

export default App;
