import './App.css';
import NavbarSecond, { NavbarSecound } from './components/Navbar/NavbarSecound';
import NavbarTop from './components/Navbar/NavbarTop';
import Mainroutes from './components/Mainroutes';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div>
        <NavbarTop/>
        <NavbarSecond/> 
        <br/>
         <Mainroutes/>
         <BackToTop/>
    </div>
  );
}

export default App;
