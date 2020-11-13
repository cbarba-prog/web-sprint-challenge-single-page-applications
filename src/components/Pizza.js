import React from 'react'; 


const Pizza = (props) => {
    const {pizza}= props
    return (<div>
        <h2> You order is on the way!!!!</h2>
        <h4>Order Details</h4>
        <ul>
            <li>Name:{pizza.name}</li>
            <li>Size:{pizza.size}</li>
            <li>Sauce Type:{pizza.sauce}</li>
            <li>Special Instructions:{pizza.instructions}</li>
        </ul>
        {
        !!pizza.toppings && !!pizza.toppings.length &&
        <div>
          Toppings:
          <ul>
            {pizza.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }


    </div>  );
}
 
export default Pizza;