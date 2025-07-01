import React, { useState } from 'react';

interface Card {
  id: string;
  name: string;
  issuer: string;
  image: string;
  selected: boolean;
}

const cards: Card[] = [
  { id: 'chase-sapphire-preferred', name: 'Sapphire Preferred', issuer: 'Chase', image: '/assets/cards/chase-sapphire-preferred.png', selected: false },
  { id: 'chase-sapphire-reserve', name: 'Sapphire Reserve', issuer: 'Chase', image: '/assets/cards/chase-sapphire-reserve.png', selected: false },
  { id: 'chase-freedom-unlimited', name: 'Freedom Unlimited', issuer: 'Chase', image: '/assets/cards/chase-freedom-unlimited.png', selected: false },
  { id: 'amex-platinum', name: 'Platinum', issuer: 'American Express', image: '/assets/cards/amex-platinum.png', selected: false },
  { id: 'amex-gold', name: 'Gold', issuer: 'American Express', image: '/assets/cards/amex-gold.png', selected: false },
  { id: 'wells-fargo-active-cash', name: 'Active Cash', issuer: 'Wells Fargo', image: '/assets/cards/wells-fargo-active-cash.png', selected: false },
  { id: 'capital-one-venture-x', name: 'Venture X', issuer: 'Capital One', image: '/assets/cards/capital-one-venture-x.png', selected: false },
  { id: 'capital-one-savorone', name: 'SavorOne', issuer: 'Capital One', image: '/assets/cards/capital-one-savorone.png', selected: false },
  { id: 'citi-premier', name: 'Premier', issuer: 'Citi', image: '/assets/cards/citi-premier.png', selected: false },
  { id: 'bofa-premium-rewards', name: 'Premium Rewards', issuer: 'Bank of America', image: '/assets/cards/bofa-premium-rewards.png', selected: false },
  { id: 'bilt-mastercard', name: 'Bilt Mastercard', issuer: 'Bilt', image: '/assets/cards/bilt-mastercard.png', selected: false },
];

export default function PlaidFlow({ onNext }: { onNext?: () => void }) {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const toggleCard = (card: Card) => {
    if (selectedCards.find(c => c.id === card.id)) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleConnect = () => {
    console.log('Connecting cards:', selectedCards);
    if (onNext) onNext();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#101828', padding: 24 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>
          Select Your Cards
        </h1>
        <p style={{ color: '#A3A3A3', fontSize: 16, marginBottom: 32, textAlign: 'center' }}>
          Choose the cards you'd like to connect and sync rewards
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: 24,
          marginBottom: 32
        }}>
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => toggleCard(card)}
              style={{
                background: selectedCards.find(c => c.id === card.id) ? '#7C3AED' : '#1F2937',
                border: selectedCards.find(c => c.id === card.id) ? '2px solid #A855F7' : '2px solid #374151',
                borderRadius: 16,
                padding: 20,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: selectedCards.find(c => c.id === card.id) ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <div style={{ 
                width: '100%', 
                height: 200, 
                background: '#2D3748',
                borderRadius: 12,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src={card.image} 
                  alt={card.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: 8
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div style={{ 
                  display: 'none',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 14
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>💳</div>
                  <div>{card.issuer}</div>
                  <div>{card.name}</div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                  {card.name}
                </div>
                <div style={{ color: '#A3A3A3', fontSize: 14 }}>
                  {card.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleConnect}
            disabled={selectedCards.length === 0}
            style={{
              width: '100%',
              maxWidth: 320,
              padding: '16px 0',
              borderRadius: 16,
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 0.5,
              color: '#fff',
              background: selectedCards.length > 0 ? 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' : '#374151',
              border: 'none',
              cursor: selectedCards.length > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
              opacity: selectedCards.length > 0 ? 1 : 0.5,
            }}
          >
            {selectedCards.length === 0 
              ? 'Select Cards to Connect' 
              : `Connect ${selectedCards.length} Card${selectedCards.length > 1 ? 's' : ''}`
            }
          </button>
        </div>
      </div>
    </div>
  );
} 