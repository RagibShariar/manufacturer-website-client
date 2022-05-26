import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Login/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import Review from './Pages/Reviews/Review';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyPortfolio from './Pages/MyPortfolio';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          
          <Route path="checkout" element={
            <RequireAuth><Checkout></Checkout></RequireAuth>
          }></Route>

          <Route path="purchase/:id" element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>

          <Route path="dashboard" element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            {/* nested route */}
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
            <Route path="manage-order" element={<ManageOrder></ManageOrder>}></Route>
            <Route path="manage-product" element={<ManageProduct></ManageProduct>}></Route>
          </Route>
          
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </Navbar>
    </>
  );
}

export default App;
