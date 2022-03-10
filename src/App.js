import {Hero} from './components/Hero'
import { Declartive, Components, SingleWay, JSX } from './components/sections/Sections';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      <section class="react-expl">
        <div class="container" style={{display: 'flex', textAlign: 'left'}}>
          <Declartive />
          <Components />
          <SingleWay />
          <JSX />
        </div>    
      </section>
    </div>
  );
}

export default App;
