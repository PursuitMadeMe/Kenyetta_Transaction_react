import { Link } from "react-router-dom";
import '../Components/NavBar.css'

export default function NavBar(){
    return (
        <nav className="navbar">
        <h1>Budget App</h1>
            <button className="budget-button">
            {/* NavBar visible on all pages link to budgets INDEX  and Form for New budget*/}
                <Link to="/budgets">Kenyetta Budget</Link>
            </button>
            <button className="new-button">
                <Link to="/budget/new">New Budget</Link>
            </button>
        </nav>
    );
}