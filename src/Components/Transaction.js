import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return (
        <tr className="Transaction">
            <td>
            </td>  
            <td>

                <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
            </td>
        </tr>
    );
}

export default Transaction;