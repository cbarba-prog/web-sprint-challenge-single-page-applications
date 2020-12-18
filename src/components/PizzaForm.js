import React, {useState,useEffect} from 'react';
import Pizza from './Pizza'
import schema from '../validation/formSchema'
import * as yup from 'yup'

const initialValues= { 
    name: '',
    size: '', 
    sauce: '',
    pepperoni:false, 
    cheese: false, 
    meatLovers: false,
    veggieLovers: false,
    instructions:""
}

let ordered = false
const initialDisabled = true

const PizzaForm = () => {
    const [formValues,setFormValues]=useState(initialValues)
    const [pizza, setPizza]=useState()
    const [disabled, setDisabled] =useState(initialDisabled)

    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => { 
          setDisabled(!valid)
        })
      }, [formValues])


    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({
            ...formValues,
            [name]: valueToUse
          })
      }

      const onSubmit = (event) => { 
          event.preventDefault()
          const newPizza= {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            sauce: formValues.sauce.trim(),
            intructions:formValues.instructions.trim(),
            toppings: ['pepperoni', 'cheese', 'meatLovers', 'veggieLovers'].filter((topping => formValues[topping]))
          }
          setPizza(newPizza)
          ordered=true
      }

      if (ordered) {
        return <Pizza pizza={pizza} />

    } else {
        return (
        <div >
            <h2>Build Your Own Pizza</h2>

          

            <form className='form-container' onSubmit={onSubmit}>
            <label id='name'>
                    <h3>Please Enter your name:</h3> 
                    <input name='name'
                    value={formValues.name}
                    onChange={onChange}
                    />
                </label>
                <label>
                    <h3>Choose Your Size</h3>
                </label>
                <div id='drop-down'>
                    <select 
                        name='size'
                        value={formValues.size}
                        onChange={onChange}
                        >
                        <option value=''>- Choose your size -</option>
                        <option value='Small' 
                        
                        >
                            Small
                        </option>
                        <option value='Medium'
                       
                        >
                            Medium
                        </option>
                        <option value='Large'
                        
                        >
                            Large
                        </option>
                        <option value='X-Large'

                        >
                            Extra Large
                        </option>
                    </select>
                </div>

                <label id='bottom-border'>
                    <h3>Choose Your Sauce</h3>
                </label>
                <div className='choices'>
                    <div>
                        <input type='radio' 
                        name='sauce'
                        value='House Red'
                        checked={formValues.sauce === 'House Red'}
                        onChange={onChange}
                        /> House Red
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Garlic Ranch"
                        checked={formValues.sauce === 'Garlic Ranch'}
                        onChange={onChange} 
                        /> Garlic Ranch
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Kentucky BBQ"
                        checked={formValues.sauce === 'Kentucky BBQ'}
                        onChange={onChange} 
                        /> Kentucky BBQ
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Spinach Alfredo"
                        checked={formValues.sauce === 'Spinach Alfredo'}
                        onChange={onChange} 
                        /> Spinach Alfredo
                    </div>
                </div>

                <label id='bottom-border'>
                    <h3>Add Toppings</h3>
                </label>
        {   }
        {   }
        {   }
        <div className='toppings'>
            <div className='section'>
            <div>Cheese
            <input 
            type='checkbox'
            name="cheese"
            checked={formValues.cheese}
            onChange={onChange}
            />

        </div>
        <div>Pepperoni
            <input 
            type='checkbox'
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
            />
            </div>
        </div>
        <div className='section'>
            <div>Meat Lovers
            <input 
            type='checkbox'
            name='meatLovers'
            checked={formValues.meatLovers}
            onChange={onChange}
            />

            </div>
            <div >Veggie Lovers
            <input 
            type='checkbox'
            name='veggieLovers'
            checked={formValues.veggieLovers}
            onChange={onChange}
            />
            </div>
        </div>
        </div>
            <label id='bottom-border'>
                <h3 >Special Instructions </h3>
                </label>
                <textarea id='instructions'
                type='text'
                name='instructions'
                value={formValues.instructions}
                onChange={onChange}
                />
                <div className='controls'>

                <button id='submit'disabled={disabled}>Make My PIZZA</button> 
                <button id='cancel' onClick={() => window.location.reload()}>Cancel</button>
                </div>
                

            </form>
        </div>
     )
}
}

 
export default PizzaForm;