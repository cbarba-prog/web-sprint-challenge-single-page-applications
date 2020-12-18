  
import React from "react";
import {Route, Link} from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pizza">Order Pizza</Link>
              </li>
            </ul>
          </nav>
      <h1>Lambda Eats</h1>
      
          <Route exact path="/pizza">
            <PizzaForm />
          </Route>
        
    </div>
  );
};
export default App;