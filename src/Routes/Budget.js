import { Link } from "react-router-dom";

function Budget({ log, index }) {
    return (
        <tr className="Log">
            <td>
                {log.captainName}
            </td>  
            <td>
                <Link to={`/budgets/${index}`}></Link>
            </td>
        </tr>
    );
}

export default Budget;