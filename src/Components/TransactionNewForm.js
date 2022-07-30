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


  // click on a button take me t
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

  const handleNumberChange = (e) => {
    setTransaction({...transaction, [e.target.id]: Number(e.target.value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  };

  return (
    <div class="row"className="new">
      <form onSubmit={handleSubmit} >
          <label>Add a new item</label>
          <label>Date</label>
          <input
            id="date"
            value={transaction.date}
            type="text"
            placeholder="Date"
            onChange={handleTextChange}
          />
          <label>Name</label>
          <input
            id="item_name"
            value={transaction.item_name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}

          />
          <label>Amount</label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            placeholder="Amount"
            onChange={handleNumberChange}

          />
          <label>From</label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            placeholder="From"
            onChange={handleTextChange}

          />

          {/* NOT SURE BONUS*/}
          {/* <label form='categories'>Choose a Category</label>
             <select name='categories' id='categories'>
                 <option value='Checking'>Checkings</option>
                 <option  value='Ssavings' >Savings</option>
             </select> */}

          {/* NOT TO SURE -------------------------------------------------- */}
          {/* Click on button  take you to a new page , with form to create new transaction */}

          
          <br />
          <button
            type="submit"
            className="form"
            value="submit"
          >
            CREATE NEW ITEM
          </button>
      </form>
    </div>
  );
}

export default TransactionNewForm;
