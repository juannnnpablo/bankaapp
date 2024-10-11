"use client";
import { useState } from 'react';

export default function Transactions() {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [accountNumber, setAccountNumber] = useState('');

// Lógica para realizar la transacción
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ amount, transactionType, accountNumber });
  };

  return (
    <div className="transactions-container">
      <h1>Realizar Transacciones</h1>
      <form onSubmit={handleSubmit}>
        <select className='input' value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="deposit">Depósito</option>
          <option value="withdraw">Retiro</option>
          <option value="transfer">Transferencia</option>
        </select>
        {transactionType === 'transfer' && (
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Número de cuenta destino"
            required
            className='input'
          />
        )}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto"
          required
          className='input'
        />
        <button type="submit">Realizar Transacción</button>
      </form>
    </div>
  );
}