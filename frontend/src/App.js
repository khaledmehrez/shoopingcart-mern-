
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
function App() {
 
  const cart = useSelector(state => state.cart)
  const {cartItems}=cart
  return (
    
    <div className="App">
      <BrowserRouter>
      <div class="grid-container">
      <header class="row">
        <div>
          <Link  class="brand" to="index.html">amazona</Link>
        </div>
        <div>
          <Link to="cart.html">
            {cartItems.length>0 &&(<span className="badge">{cartItems.length}</span>)} Cart</Link>
          <Link to="signin.html">Sign In</Link>
        </div>
      </header>
      </div>
      <main>
      <Route path="/cart/:id?" component={CartScreen} ></Route>
        <Route path="/" component={HomeScreen} exact="/"/>
       <Route path="/product/:id" component={ProductScreen}/>
     
    </main>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
