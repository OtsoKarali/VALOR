export interface CardReward {
  id: string;
  name: string;
  issuer: string;
  network: string;
  annualFee: number;
  signUpBonus: string;
  rewards: { category: string; rate: string }[];
  notablePerks: string[];
  source: string;
}

export const cardRewards: CardReward[] = [
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    network: 'Visa',
    annualFee: 95,
    signUpBonus: '60,000 points after spending $4,000 in 3 months',
    rewards: [
      { category: 'Travel (booked through Chase)', rate: '5x points' },
      { category: 'Dining', rate: '3x points' },
      { category: 'Online grocery (excluding Walmart/Target)', rate: '3x points' },
      { category: 'Streaming services', rate: '3x points' },
      { category: 'Other travel', rate: '2x points' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    notablePerks: [
      '25% more value when redeeming through Chase Ultimate Rewards',
      '$50 annual hotel credit (Chase Travel)',
      'No foreign transaction fees',
      'Primary rental car insurance',
    ],
    source: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
  },
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve',
    issuer: 'Chase',
    network: 'Visa',
    annualFee: 550,
    signUpBonus: '60,000 points after spending $4,000 in 3 months',
    rewards: [
      { category: 'Travel (booked through Chase)', rate: '10x points (hotels & car rentals)' },
      { category: 'Travel (booked through Chase)', rate: '5x points (air travel)' },
      { category: 'Dining', rate: '3x points' },
      { category: 'Other travel', rate: '3x points' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    notablePerks: [
      '$300 annual travel credit',
      'Priority Pass lounge access',
      '50% more value when redeeming through Chase Ultimate Rewards',
      'Global Entry/TSA PreCheck credit',
      'No foreign transaction fees',
      'Primary rental car insurance',
    ],
    source: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
  },
  {
    id: 'chase-freedom-unlimited',
    name: 'Chase Freedom Unlimited',
    issuer: 'Chase',
    network: 'Visa',
    annualFee: 0,
    signUpBonus: 'Additional 1.5% cash back on up to $20,000 spent in first year',
    rewards: [
      { category: 'Travel (booked through Chase)', rate: '5% cash back' },
      { category: 'Dining', rate: '3% cash back' },
      { category: 'Drugstores', rate: '3% cash back' },
      { category: 'All other purchases', rate: '1.5% cash back' },
    ],
    notablePerks: [
      'No annual fee',
      '0% intro APR for 15 months',
      'Purchase protection',
    ],
    source: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
  },
]; 