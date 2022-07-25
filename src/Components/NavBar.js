import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="Navbar">
        <h1>Budget App</h1>
            <button>
            {/* NavBar visible on all pages link to budgets INDEX  and Form for New budget*/}
                <Link to="/budgets">Kenyetta Budget</Link>
            </button>
            <button>
                <Link to="/budget/new">New Budget</Link>
            </button>
        </nav>
    );
}