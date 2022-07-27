import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();

  const navigate = useNavigate;

  const [transaction, setTransaction] = useState({
    item_name: "",
    date: "",
    amout: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateTransaction = () => {
    axios
      .put(`${API_URL}/transactions ${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction();
  };
  return (
    <div className="new">
      <form action="" onSubmit={handleSubmit} >
        <fieldset>
          <label>Add a new item</label>
          <label>Date</label>
          <input
            id="date"
            type="text"
            placeholder="Date"
            onChange={handleTextChange}
          />
          <label>Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />
          <label>Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            onChange={handleTextChange}
          />
          <label>From</label>
          <input
            id="from"
            type="text"
            placeholder="From"
            onChange={handleTextChange}
          />
          {/* NOT TO SURE */}
          {/* Click on button  take you to a new page , with form to create new transaction */}
          <br />
          <input
            type="submit"
            className="form"
            value="submit"  
          >
            CREATE NEW ITEM
          </input>
        </fieldset>
        <Link to={`/transactions/${index}`}>
        <button>BACK</button>
        </Link>
      </form>
    </div>
  );
}

export default TransactionEditForm;
