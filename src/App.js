import Banner from './Layout';
import Projects from './Layout/Projects';
import './index.css';
import Skills from './Layout/Skills';

function App() {
  return (
    <div className='App overflow-hidden'>
      <Banner />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
