import React from 'react';
import { cashBackCards, pointsCards } from './cardDatabase';

const matrixCategories = [
  { key: 'groceries', label: 'Groceries', icon: '🛒' },
  { key: 'dining', label: 'Dining', icon: '🍽️' },
  { key: 'travel', label: 'Travel', icon: '✈️' },
  { key: 'gas', label: 'Gas', icon: '⛽' },
  { key: 'streaming', label: 'Streaming', icon: '📺' },
  { key: 'drugstores', label: 'Drugstores', icon: '💊' },
  { key: 'allOther', label: 'All Other', icon: '💳' },
  { key: 'annualFeeMatrix', label: 'Annual Fee', icon: '💸' },
  { key: 'signUpBonusMatrix', label: 'Sign-Up Bonus', icon: '🎁' },
];

function parseValue(val: string) {
  if (!val) return 0;
  const match = val.match(/([\d.]+)(%|x)?/);
  return match ? parseFloat(match[1]) : 0;
}

function getShortText(val: string) {
  if (!val) return '';
  const match = val.match(/([\d.]+)\s*([%x$]+)/);
  if (match) return match[1] + match[2];
  if (val.startsWith('$0')) return '$0';
  if (val.toLowerCase().includes('no sign')) return '—';
  return val;
}

// Blue/gray color scale: base = #f3f4f6, mid = #60a5fa, best = #1e3a8a
function getHeatColor(val: string, min: number, max: number) {
  const v = parseValue(val);
  if (max === min) return '#e5e7eb';
  if (val.startsWith('$0') || val.toLowerCase().includes('no sign')) return '#d1fae5'; // $0 fee/bonus is greenish
  if (val.startsWith('$')) return '#f3f4f6';
  const pct = Math.max(0, Math.min(1, (v - min) / (max - min)));
  // Interpolate: base (#f3f4f6) -> mid (#60a5fa) -> best (#1e3a8a)
  if (pct < 0.5) {
    // base to mid
    const t = pct / 0.5;
    return `rgb(${243 + (96-243)*t},${244 + (165-244)*t},${246 + (250-246)*t})`;
  } else {
    // mid to best
    const t = (pct-0.5)/0.5;
    return `rgb(${96 + (30-96)*t},${165 + (58-165)*t},${250 + (138-250)*t})`;
  }
}

function getTextColor(bg: string) {
  if (!bg.startsWith('rgb')) return '#181A20';
  const rgb = bg.match(/\d+/g)?.map(Number) || [255,255,255];
  const lum = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return lum > 0.6 ? '#181A20' : '#fff';
}

function getBestIndices(cards: any[], key: string) {
  let max = -Infinity;
  let indices: number[] = [];
  cards.forEach((card, i) => {
    const v = parseValue((card as any)[key]);
    if (v > max) {
      max = v;
      indices = [i];
    } else if (v === max) {
      indices.push(i);
    }
  });
  return indices;
}

function MatrixTable({ cards }: { cards: any[] }) {
  const minMax = matrixCategories.map(cat => {
    const vals = cards.map(card => parseValue((card as any)[cat.key]));
    return { min: Math.min(...vals), max: Math.max(...vals) };
  });
  const bestIndicesByCol = matrixCategories.map(cat => getBestIndices(cards, cat.key));
  return (
    <div style={{ overflowX: 'auto', fontFamily: 'system-ui, Inter, Roboto, Arial, sans-serif' }}>
      <table style={{ width: '100%', minWidth: 900, borderCollapse: 'separate', borderSpacing: 0, background: '#181A20', color: '#fff', borderRadius: 18, boxShadow: '0 4px 32px #0002', marginBottom: 40 }}>
        <thead>
          <tr>
            <th style={{ background: '#23263a', color: '#a78bfa', fontWeight: 800, padding: '20px 16px', borderBottom: '2px solid #312e81', position: 'sticky', left: 0, backgroundClip: 'padding-box', zIndex: 2, fontSize: 18, letterSpacing: 0.5, textAlign: 'left' }}>Card</th>
            {matrixCategories.map(cat => (
              <th key={cat.key} style={{ background: '#23263a', color: '#a78bfa', fontWeight: 700, padding: '20px 12px', borderBottom: '2px solid #312e81', fontSize: 16, textAlign: 'center', whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: 20, marginRight: 6 }}>{cat.icon}</span>
                {cat.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cards.map((card, rowIdx) => (
            <tr key={card.id} style={{ transition: 'background 0.2s' }}>
              <td style={{ background: '#23263a', fontWeight: 700, position: 'sticky', left: 0, zIndex: 1, fontSize: 16, borderRight: '2px solid #312e81', minWidth: 180, padding: '18px 16px', letterSpacing: 0.2 }}>{card.name}</td>
              {matrixCategories.map((cat, colIdx) => {
                const value = (card as any)[cat.key];
                const isBest = bestIndicesByCol[colIdx].includes(rowIdx);
                const bg = getHeatColor(value, minMax[colIdx].min, minMax[colIdx].max);
                const textColor = getTextColor(bg);
                return (
                  <td
                    key={cat.key}
                    style={{
                      background: bg,
                      color: textColor,
                      textAlign: 'center',
                      fontWeight: isBest ? 900 : 600,
                      fontSize: 20,
                      minWidth: 90,
                      height: 60,
                      padding: '0 10px',
                      borderBottom: '1px solid #23263a',
                      borderRight: colIdx === matrixCategories.length - 1 ? undefined : '1px solid #23263a',
                      boxShadow: isBest ? '0 0 0 2px #a78bfa' : undefined,
                      transition: 'background 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    title={value}
                    onMouseOver={e => (e.currentTarget.style.boxShadow = '0 2px 12px #6366f1')}
                    onMouseOut={e => (e.currentTarget.style.boxShadow = isBest ? '0 0 0 2px #a78bfa' : 'none')}
                  >
                    {getShortText(value)}
                    {isBest && <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 18, color: '#facc15' }}>★</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RewardsDatabase() {
  return (
    <div style={{ maxWidth: 1300, margin: '0 auto', padding: 32, fontFamily: 'system-ui, Inter, Roboto, Arial, sans-serif' }}>
      <h1 style={{ color: '#fff', fontSize: 36, marginBottom: 8, fontWeight: 900, letterSpacing: 0.5 }}>Credit Card Rewards Database</h1>
      <div style={{ fontSize: 26, color: '#a78bfa', margin: '32px 0 8px 0', fontWeight: 800 }}>Cash Back Cards</div>
      <MatrixTable cards={cashBackCards} />
      <div style={{ fontSize: 26, color: '#a78bfa', margin: '32px 0 8px 0', fontWeight: 800 }}>Points Cards</div>
      <MatrixTable cards={pointsCards} />
    </div>
  );
} 