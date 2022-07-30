import { Link } from "react-router-dom";

{/* NavBar visible on all pages link to transactions INDEX  and Form for New transaction*/}
export default function NavBar(){
    return (
        <nav className="navbar">
        <h1>Transaction App</h1>
            <button className="transaction-button">
                <Link to="/transactions">TRANSACTIONS</Link>
            </button>
            <button className="new-button">
                <Link to="/transactions/new">NEW TRANSACTION</Link>
            </button>
        </nav>
    );
}