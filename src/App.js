//import Product from './Component/Product';
import './App.css';
import NavBar from './NavBar/NavBar';
import Products from './Component/Products';
import ChechoutPage from './Component/CheckoutPage'
//import CheckoutCard from './Component/CheckoutCard';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './Component/SignIn';
import SignUp from './Component/SingUp';
import Product from './Component/Product';


function App ()  {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path="/SingUp">
      <SignUp/>
      </Route>
      <Route path="/SingIn">
      <SignIn/>
      </Route>
     <Route path="/Checkout-page">
        <ChechoutPage/>
     </Route>
      <Route path='/'>
        <Products/>
      </Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
