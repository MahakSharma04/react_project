import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from'./Components/Footer';
import Menu from './Components/Menu';
import ContactUs from './Components/ContactUs';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navigation/>
      
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>

        </Routes>
       
      <Footer/>
      </BrowserRouter>
      <div>
      </div>
    </div>
  );
}

export default App;
