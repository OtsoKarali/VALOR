import React from 'react';

export default function PlaidFlow() {
  return (
    <div style={{ minHeight: '100vh', background: '#101828', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <h1 style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>
        🔗 Plaid Link Demo
      </h1>
      <p style={{ color: '#A3A3A3', fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
        In a real app, this would show the Plaid Link interface to connect your bank account.
      </p>
      <button
        style={{
          background: '#b28cff',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          borderRadius: 12,
          padding: '16px 32px',
          marginBottom: 16,
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => alert('Simulating successful Plaid Link connection')}
      >
        Simulate Success
      </button>
      <button
        style={{
          background: '#2A2F4C',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          borderRadius: 12,
          padding: '16px 32px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => alert('Cancel')}
      >
        Cancel
      </button>
    </div>
  );
} 