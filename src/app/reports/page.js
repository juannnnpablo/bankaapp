"use client";
import { useEffect, useState } from 'react';

export default function Reports() {
  const [reports, setReports] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    totalDebt: 0,
  });

  // Lógica para obtener reportes financieros del usuario
  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('/api/reports'); 
      const data = await response.json();
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <div className="reports-container">
      <h1>Reportes Financieros</h1>
      <h2>Ingresos Totales: ${reports.totalIncome}</h2>
      <h2>Egresos Totales: ${reports.totalExpenses}</h2>
      <h2>Deudas Pendientes: ${reports.totalDebt}</h2>
    </div>
  );
}
