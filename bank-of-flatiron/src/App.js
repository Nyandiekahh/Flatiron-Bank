// src/App.js

import React, { useState } from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
      </header>
      <main>
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList transactions={transactions} setTransactions={setTransactions} />
      </main>
    </div>
  );
}

export default App;
