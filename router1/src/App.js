import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Person from './Pages/Person';
import Enterprise from './Pages/Enterprise';

function App() {
  return (
    <div className="container">
      <header>
        <nav className='bg-light navbar navbar-expand-lg'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="/">
                Home </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="/contact">
                Contact </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="/about">
                About </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className=''>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact/*' element={<Contact />}>
            <Route path='person' element={<Person />} />
            <Route path='enterprise' element={<Enterprise />} />
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
        <aside>
        </aside>
      </div>
      <footer>
        2023
      </footer>
    </div>
  );
}

export default App;
