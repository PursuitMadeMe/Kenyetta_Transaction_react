import React from "react";


function AccountTotal({ transactions }) {
  let total = 0;


  let amounts = transactions.map((transaction) => Number(transaction.amount));

  amounts.forEach((amount) => {
    total += amount;
  });

  return (
    <div className="total">
      <h2>Account Total : <span id="total">{total}</span></h2>
    </div>
  );
}

export default AccountTotal;