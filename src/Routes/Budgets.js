import { useState, useEffect } from "react";

// import wild card budget localhost:333/budgets/2
import Budget from "./Budget";

// npm install axios
import axios from "axios";

// variable to access URL
const API_URL = process.env.REACT_APP_API_URL;

function Budgets() {
  // useState for dynamic list of budgets
  const [budgets, setBudgets] = useState([]);

  // useEffect to axios(fetch) URL Index(list) of budgets
  useEffect(() => {

    axios
      .get(`${API_URL}/budgetss`)
    // set the axios response to the updated list of budgets data
      .then((res) => {
        setBudgets(res.data);
      })
    // set an error message if you don't get a dynamic list of budgets
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Budgets">
      <section>
        <table>
          <thead>
            <tr>
              <th>Bank Account Total:</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Budgets;
