import React from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#101828', padding: 24, color: 'white' }}>
      <h1 style={{ fontSize: 30, fontWeight: 800, marginBottom: 32 }}>
        Your Wallet, Super-charged
      </h1>
      <button
        style={{
          width: '100%',
          maxWidth: 320,
          padding: '16px 0',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.5,
          color: 'white',
          background: '#b28cff',
          border: 'none',
          marginBottom: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
        }}
        onClick={() => alert('Plaid flow would start here!')}
      >
        Connect a Card
      </button>
      <button
        style={{
          width: '100%',
          maxWidth: 320,
          padding: '16px 0',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.5,
          color: 'white',
          background: '#2A2F4C',
          border: 'none',
          marginBottom: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
        }}
        onClick={() => alert('View Earnings pressed')}
      >
        View Earnings
      </button>
      <button
        style={{
          width: '100%',
          maxWidth: 320,
          padding: '16px 0',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.5,
          color: 'white',
          background: '#2A2F4C',
          border: 'none',
          marginBottom: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
        }}
        onClick={() => alert('Best New Card pressed')}
      >
        Best New Card
      </button>
    </div>
  );
} 