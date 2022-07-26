import React from 'react'

import {useState} from 'react'

    import axios from 'axios'
    
    import { useNavigate } from 'react-router-dom'
    
    const API_URL = process.env.REACT_APP_API_URL;

    
    function TransactionNewForm(){

    const [transaction, setTransaction] = useState({
        item_name:'',
        amout:'',
        date:'',
        from:'',
        category:'',
    
    });
    
    const navigate = useNavigate()
    
    const addTransaction = ()=> {
        axios.post(`${API_URL}/transactions`, transaction)
        .then((res) => navigate(`/transactions`))
        .catch((error) => console.error(error))
    }
    
    const handleTextChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }
    
    const handleOnClick = (e => {
        e.preventDefault()
        addTransaction()
    });
    
    return(
        <div className='new'>
        <form>
        <fieldset>
    <label>Add a new item</label>
            <label>Date</label>
            <input id='date' type='text' placeholder='Date' onChange={handleTextChange}/>
            <label>Name</label>
            <input id='name' type='text'placeholder='Name' onChange={handleTextChange}/>
            <label>Amount</label>
            <input id='amount' type='number' placeholder='Amount' onChange={handleTextChange}/>
            <label>From</label>
            <input id='from' type='text' placeholder='From' onChange={handleTextChange}/>

            {/* NOT SURE */}
            <label form='categories'>Choose a Category</label>
            <select name='categories' id='categories'></select>

            {/* NOT TO SURE */}
            {/* Click on button  take you to a new page , with form to create new transaction */}
            <input type='button'onClick={handleOnClick}>CREATE NEW ITEM</input>
            </fieldset>
        </form>
        </div>
    )
    
    
    }
    













  
export default TransactionNewForm