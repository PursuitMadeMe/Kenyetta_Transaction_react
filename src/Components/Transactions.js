import { useState, useEffect } from "react";

// import wild card transaction localhost:333/transactions/2
import Transaction from "./Transaction";
// import account total component 
import AccountTotal from "./AccountTotal";

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
      .then((res) => setTransactions(res.data))
      // set an error message if you don't get a dynamic list of transactions
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Transactions">
    <AccountTotal transactions={transactions} className="total"/>
      <section>

          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
      </section>
    </div>
  );
}

export default Transactions;
