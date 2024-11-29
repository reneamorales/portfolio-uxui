
import './App.css';

import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {Projects} from './components/Projects/Projects';
import {Principles} from './components/Principles/Principles';
import {Tools} from './components/Tools/Tools';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Projects/>
      <Principles/>
      <Tools/>
    </div>
  );
}


export default App;
