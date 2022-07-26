import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails(){
    const [transaction, setTransaction] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/transactions/${index}`)
        .then((res) => {setTransaction(res.data)})
        .catch(() => {navigate("/not-found");
        });
    }, [index, navigate]);

return(
    <section>
        <h3>{transaction.item_name}</h3>
        <h3>{transaction.date}</h3>
        <h3>{transaction.amount}</h3>
        <h3>{transaction.from}</h3>
        <h3>{transaction.category}</h3>
    </section>
)



}





    export default TransactionDetails;