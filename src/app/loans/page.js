"use client";
import { useState } from 'react';

export default function Loans() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');

// Lógica para solicitar un préstamo
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ amount, term });
  };

  return (
    <div className="loans-container">
      <h1>Solicitar Préstamo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto del préstamo"
          required
          className='input'
        />
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Plazo en meses"
          required
          className='input'
        />
        <button type="submit">Solicitar Préstamo</button>
      </form>
    </div>
  );
}
