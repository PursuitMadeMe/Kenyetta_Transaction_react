// import React from 'react'

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amout: "",
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API_URL}/transactions`, transaction)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    addTransaction();
  };

  return (
    <div className="new">
      <form action="">
        <fieldset>
          <label>Add a new item</label>
          <label>Date</label>
          <input
            id="date"
            value={transaction.date}
            type="text"
            placeholder="Date"
            onChange={handleTextChange}
            required 
          />
          <label>Name</label>
          <input
            id="name"
            value={transaction.item_name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
            required 

          />
          <label>Amount</label>
          <input
            id="amount"
            value={transaction.amout}
            type="number"
            placeholder="Amount"
            onChange={handleTextChange}
            required 

          />
          <label>From</label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            placeholder="From"
            onChange={handleTextChange}
            required 

          />

          {/* NOT SURE BONUS*/}
          {/* <label form='categories'>Choose a Category</label>
             <select name='categories' id='categories'>
                 <option value='Checking'>Checkings</option>
                 <option  value='Ssavings' >Savings</option>
             </select> */}

          {/* NOT TO SURE */}
          {/* Click on button  take you to a new page , with form to create new transaction */}

          
          <br />
          <button
            type="submit"
            className="form"
            value="submit"
            onClick={handleOnClick}
          >
            CREATE NEW ITEM
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default TransactionNewForm;
