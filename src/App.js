import logo from './logo.svg';
import './App.css';


import { Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Admin from './component/Admin';
import Footer from './component/Footer';
import Productt from './component/Productt'

function App() {
  return (
  <div>

    <>  ``                                                          
    <Navbar/>
    <Product/>
        <Routes>
          <Route path='/User' element={<Productt/>}/>
          <Route path='/Admin' element={<Admin/>}/>
        </Routes>
        <Footer/>

</>
  </div>
  );
}

export default App;
