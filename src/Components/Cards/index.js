import React, { useState } from 'react';
import Modal from 'react-modal';
import AddExpense from '../addExpense';
import Transactions from '../Transactions';

const Cards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [editedTransaction, setEditedTransaction] = useState(null);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleAddExpense = (expenseData) => {
    setTransactions([...transactions, expenseData]);
    setModalIsOpen(false);
  };

  const handleDelete = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const handleEdit = (index) => {
    const transactionToEdit = transactions[index];
    setEditedTransaction({
      index,
      title: transactionToEdit.title,
      amount: transactionToEdit.amount,
      date: transactionToEdit.date
    });
    setModalIsOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedTransactions = [...transactions];
    updatedTransactions[editedTransaction.index] = editedTransaction;
    setTransactions(updatedTransactions);
    setEditedTransaction(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <div className='cards'>
        <div className='card1'><button onClick={handleOpenModal}>Add Expense</button></div>
        <div className='card2'><button>Add income</button></div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <AddExpense onClose={handleCloseModal} onAddExpense={handleAddExpense} />
      </Modal>
      
      <Transactions transactions={transactions} onDelete={handleDelete} onEdit={handleEdit} />
      
      {editedTransaction && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
        >
          <div>
            <h2>Edit Transaction</h2>
            <input type="text" value={editedTransaction.title} onChange={(e) => setEditedTransaction({ ...editedTransaction, title: e.target.value })} />
            <input type="date" value={editedTransaction.date} onChange={(e) => setEditedTransaction({ ...editedTransaction, date: e.target.value })} />
            <input type="number" value={editedTransaction.amount} onChange={(e) => setEditedTransaction({ ...editedTransaction, amount: e.target.value })} />
            <button onClick={handleSaveEdit}>Save</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cards;
