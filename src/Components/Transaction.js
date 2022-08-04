import { Link } from "react-router-dom";
// import budget from "./Images/budget.jpg"

function Transaction({ transaction, index }) {
// const imgUrl = budget;

  return (
    <>

    
      {/* <ul>{`/transactions/${index}`}</ul> */}
        <p>{transaction.date}</p>

        <p><Link to={`/transactions/${index}`}>{transaction.item_name} </Link></p>

        <p>${transaction.amount}</p>

      {/* <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li> */}
      </>
  );
}

export default Transaction;
