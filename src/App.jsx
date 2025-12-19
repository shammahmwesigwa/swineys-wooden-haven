// import React from 'react'
// import Homepage from './components/homepage'
// import Products from './components/products'
// import About from './components/about'
// import{Routes,Route} from 'react-router-dom'
// import Nav from './components/nav'
// import { Contact } from 'lucide-react'
// import ContactUs from './components/contact'
// import ContactOrder from './components/contact'
// import OrderPage from './components/contact'

// const App = () => {
//   return (
//     <div className='home'>
      
//       <Nav/>
      
//       <Routes> 
//       <Route path='/homepage'element={<Homepage/>}></Route>
//      <Route path='products' element={<Products/>}></Route>
//       <Route path='About' element={<About/>}></Route>
//     <Route path='contact' element={<OrderPage/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Homepage from './components/homepage';
import Products from './components/products';
import About from './components/about';
import OrderPage from './components/contact';

const App = () => {
  return (
    <div className='home'>
      <Nav />

      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;

