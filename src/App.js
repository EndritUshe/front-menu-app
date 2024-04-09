import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddProduct from './product/AddProduct';
import EditProduct from './product/EditProduct';
import ViewProduct from './product/ViewProduct';
import AddReview from './reviews/AddReview'
import AddVendor from './vendors/AddVendor';
import ViewReview from './reviews/ViewReview';
import ViewVendor from './vendors/ViewVendor';
import LoginSignUp from './login-signup/LoginSignUp';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
        
        <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route exact path='/login' element={<LoginSignUp/>}></Route>
          <Route exact path= "/findall" element={<Home/>}></Route>
          <Route exact path="/save" element={<AddProduct/>}></Route>
          <Route exact path="/view/:id" element={<ViewProduct/>}></Route>
          <Route exact path="product/:id" element={<EditProduct/>}></Route>
          <Route exact path="/addreview/:id" element={<AddReview/>}></Route>
          <Route exact path="/addvendor/:id" element={<AddVendor/>}></Route>
          <Route exact path="/reviews/:id" element={<ViewReview/>}></Route>
          <Route exact path="/vendors/:id" element={<ViewVendor/>}></Route>
              </Routes>

      </Router>
    
    </div>
  );
}

export default App;
