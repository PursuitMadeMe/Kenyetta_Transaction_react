import { Link } from "react-router-dom";
// import budget from "./Images/budget.jpg"

function Transaction({ transaction, index }) {
// const imgUrl = budget;

  return (
    <div className="Transaction">

    
      {/* <ul>{`/transactions/${index}`}</ul> */}
      <li>
        <h3>{transaction.date}</h3>

        <Link to={`/transactions/${index}`}>{transaction.item_name} </Link>

        <h3>${transaction.amount}</h3>

      </li>
      {/* <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li> */}
    </div>
  );
}

export default Transaction;
