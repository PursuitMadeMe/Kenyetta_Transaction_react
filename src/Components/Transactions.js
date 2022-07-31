import { useState, useEffect } from "react";

// import wild card transaction localhost:333/transactions/2
import Transaction from "./Transaction";

// npm install axios
import axios from "axios";

// variable to access URL
const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
  // useState for dynamic list of transactions
  const [transactions, setTransactions] = useState([]);

  // useEffect to axios(fetch) URL Index(list) of transactions
  useEffect(() => {

    axios
      .get(`${API_URL}/transactions`)
    // set the axios response to the updated list of transactions data
      .then((res) =>  setTransactions(res.data))
    // set an error message if you don't get a dynamic list of transactions
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Transactions">
    <h1>Bank Account Total:</h1>
      <section>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
