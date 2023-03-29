
import './App.css';
import Layout from './component/Layout/Layout';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
