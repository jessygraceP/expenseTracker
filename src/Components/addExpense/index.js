import React, { useState } from 'react';


function AddExpense({ onClose, onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    const expenseData = { title, amount, category, date };
    // Here you can handle adding the expense with the form data
    console.log('Expense added:', { title, amount, category, date });
    onAddExpense(expenseData);
    // Reset form fields after adding expense
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
    
    // Close the modal
    onClose();
  };

  const handleCancel = () => {
    // Reset form fields
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
    
    // Close the modal
    onClose();
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form>
        <label>
          Title:
          <input 
            type='text'
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Price:
          <input 
            type="number" 
            placeholder="Enter Amount"
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </label>

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>

        <label>
          Date:
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </label>

        <button type="button" onClick={handleAddExpense}>Add Expense</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default AddExpense;
