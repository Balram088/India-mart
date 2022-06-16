import './App.css';
import NavbarSecond, { NavbarSecound } from './components/Navbar/NavbarSecound';
import NavbarTop from './components/Navbar/NavbarTop';
import Mainroutes from './components/Mainroutes';

function App() {
  return (
    <div className="App">
        <NavbarTop/>
        <NavbarSecond/> 
         <Mainroutes/>
    </div>
  );
}

export default App;
