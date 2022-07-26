// import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return (
        <div className="Transaction">
           <ul>{`/transactions/${index}`}</ul>
           <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li>

                {/* <Link to={`/transactions/${index}`}>{transaction.item_name} {transaction.date}</Link> */}
          
        </div>
    );
}

export default Transaction;