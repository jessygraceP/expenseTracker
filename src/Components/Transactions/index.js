import React, { useState } from 'react';

function Transactions({ transactions, onDelete, onEdit, }) {
//   if (!transactions || transactions.length === 0) return <div>No transactions</div>;
const [editedTransaction, setEditedTransaction] = useState(null);

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    const transactionToEdit = transactions[index];
    setEditedTransaction({
      index,
      title: transactionToEdit.title,
      amount: transactionToEdit.amount,
      date: transactionToEdit.date
    });
}
const handleSaveEdit = () => {
    onEdit(editedTransaction.index, editedTransaction);
    setEditedTransaction(null);
  };

  const handleChange = (key, value) => {
    setEditedTransaction(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  return (
    <div>
      <h2>Recent Transactions</h2>
      <table>
        {/* <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead> */}
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{editedTransaction && editedTransaction.index === index ?
                <input type="text" value={editedTransaction.title} onChange={(e) => handleChange("title", e.target.value)} />
                : transaction.title}</td>
              <td>{editedTransaction && editedTransaction.index === index ?
                <input type="date" value={editedTransaction.date} onChange={(e) => handleChange("date", e.target.value)} />
                : transaction.date}</td>
              <td>{editedTransaction && editedTransaction.index === index ?
                <input type="number" value={editedTransaction.amount} onChange={(e) => handleChange("amount", e.target.value)} />
                : transaction.amount}</td>
              <td>
                {editedTransaction && editedTransaction.index === index ?
                  <button onClick={handleSaveEdit}>Save</button>
                  :
                  <button onClick={() => handleEdit(index)}>Edit</button>
                }
               <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
