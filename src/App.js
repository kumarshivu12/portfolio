import { Box} from '@mui/material';
import './App.css';

//Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { BrowserRouter} from 'react-router-dom';

const App=()=>{
  return (
    <Box>
      <BrowserRouter>
        <Navbar/>
          <Box style={{marginTop:82}}>
              <Home/>
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
          </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
