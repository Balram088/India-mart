import './App.css';
import NavbarSecond, { NavbarSecound } from './components/Navbar/NavbarSecound';
import NavbarTop from './components/Navbar/NavbarTop';
import Mainroutes from './components/Mainroutes';

function App() {
  return (
    <div>
        <NavbarTop/>
        <NavbarSecond/> 
        <br/>
         <Mainroutes/>
    </div>
  );
}

export default App;
