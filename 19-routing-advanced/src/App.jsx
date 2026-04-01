import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Company from './pages/Company';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Category from './pages/Category';
import Men from './pages/Men';
import Women from './pages/Women';
import ContactDetails from './pages/ContactDetails';
import Navbar2 from './Components/Navbar2';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
        <Route path='company' element={<Company/>}/>
        <Route path='product' element={<Product/>}/>
        </Route>
        <Route path='/category' element={<Category/>}>
        <Route path='men' element={<Men/>} />
        <Route path='women' element={<Women/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/:id' element={<ContactDetails/>} />

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
