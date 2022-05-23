import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import Products from './Pages/Products/Products';

function App() {
  return (
    <>
      <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      </Navbar>
    </>
  );
}

export default App;
