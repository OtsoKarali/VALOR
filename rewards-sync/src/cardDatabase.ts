export interface CashBackCard {
  id: string;
  name: string;
  issuer: string;
  network: string;
  annualFee: number;
  signUpBonus: string;
  rewards: { category: string; rate: string }[];
  redemption: {
    cashBack: string;
    statementCredit: string;
    giftCards: string;
    travel: string;
    other: string[];
  };
  notablePerks: string[];
  source: string;
  groceries: string;
  dining: string;
  travel: string;
  gas: string;
  streaming: string;
  drugstores: string;
  allOther: string;
  annualFeeMatrix: string;
  signUpBonusMatrix: string;
}

export interface PointsCard {
  id: string;
  name: string;
  issuer: string;
  network: string;
  annualFee: number;
  signUpBonus: string;
  rewards: { category: string; rate: string }[];
  redemption: {
    travelPortal: string;
    transferPartners: string[];
    statementCredit: string;
    giftCards: string;
    cashBack: string;
    other: string[];
  };
  notablePerks: string[];
  source: string;
  groceries?: string;
  dining?: string;
  travel?: string;
  gas?: string;
  streaming?: string;
  drugstores?: string;
  allOther?: string;
  annualFeeMatrix?: string;
  signUpBonusMatrix?: string;
}

export const cashBackCards: CashBackCard[] = [
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
    redemption: {
      cashBack: '1 cent per point',
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      travel: '1.25 cents per point (with Sapphire card)',
      other: ['Merchandise at 0.8 cents per point', 'Amazon purchases at 0.8 cents per point']
    },
    notablePerks: [
      'No annual fee',
      '0% intro APR for 15 months',
      'Purchase protection',
    ],
    source: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
    groceries: 'N/A',
    dining: 'N/A',
    travel: 'N/A',
    gas: 'N/A',
    streaming: 'N/A',
    drugstores: 'N/A',
    allOther: 'N/A',
    annualFeeMatrix: '$$0',
    signUpBonusMatrix: 'Additional 1.5% cash back on up to $20,000 spent in first year',
  },
  {
    id: 'wells-fargo-active-cash',
    name: 'Wells Fargo Active Cash',
    issuer: 'Wells Fargo',
    network: 'Visa',
    annualFee: 0,
    signUpBonus: '$200 cash rewards after spending $1,000 in 3 months',
    rewards: [
      { category: 'All purchases', rate: '2% cash back' },
    ],
    redemption: {
      cashBack: '1 cent per point',
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      travel: '1 cent per point',
      other: ['Merchandise at 0.8 cents per point']
    },
    notablePerks: [
      'No annual fee',
      'Cell phone protection',
      '0% intro APR for 15 months',
    ],
    source: 'https://www.wellsfargo.com/credit-cards/active-cash/',
    groceries: 'N/A',
    dining: 'N/A',
    travel: 'N/A',
    gas: 'N/A',
    streaming: 'N/A',
    drugstores: 'N/A',
    allOther: 'N/A',
    annualFeeMatrix: '$$0',
    signUpBonusMatrix: '$200 cash rewards after spending $1,000 in 3 months',
  },
  {
    id: 'capital-one-savorone',
    name: 'Capital One SavorOne',
    issuer: 'Capital One',
    network: 'Mastercard',
    annualFee: 0,
    signUpBonus: '$200 after spending $500 in 3 months',
    rewards: [
      { category: 'Dining, entertainment, popular streaming services', rate: '3% cash back' },
      { category: 'Grocery stores', rate: '3% cash back' },
      { category: 'All other purchases', rate: '1% cash back' },
    ],
    redemption: {
      cashBack: '1 cent per point',
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      travel: '1 cent per point',
      other: ['Merchandise at 0.8 cents per point', 'Charitable donations at 1 cent per point']
    },
    notablePerks: [
      'No annual fee',
      'No foreign transaction fees',
      '0% intro APR for 15 months',
    ],
    source: 'https://www.capitalone.com/credit-cards/savorone/',
    groceries: '3% cash back',
    dining: '3% cash back',
    travel: 'N/A',
    gas: 'N/A',
    streaming: 'N/A',
    drugstores: 'N/A',
    allOther: '1% cash back',
    annualFeeMatrix: '$$0',
    signUpBonusMatrix: '$200 after spending $500 in 3 months',
  },
  {
    id: 'citi-double-cash',
    name: 'Citi Double Cash',
    issuer: 'Citi',
    network: 'Mastercard',
    annualFee: 0,
    signUpBonus: 'No sign-up bonus',
    rewards: [
      { category: 'All purchases', rate: '2% cash back (1% when you buy, 1% when you pay)' },
    ],
    redemption: {
      cashBack: '1 cent per point',
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      travel: '1 cent per point',
      other: ['Merchandise at 0.8 cents per point', 'Amazon purchases at 0.8 cents per point']
    },
    notablePerks: [
      'No annual fee',
      '0% intro APR for 18 months',
      'No foreign transaction fees',
    ],
    source: 'https://www.citi.com/credit-cards/credit-card-details/citi.action?ID=citi-double-cash-credit-card',
    groceries: 'N/A',
    dining: 'N/A',
    travel: 'N/A',
    gas: 'N/A',
    streaming: 'N/A',
    drugstores: 'N/A',
    allOther: 'N/A',
    annualFeeMatrix: '$$0',
    signUpBonusMatrix: 'No sign-up bonus',
  },
];

export const pointsCards: PointsCard[] = [
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
    redemption: {
      travelPortal: '1.25 cents per point',
      transferPartners: ['United Airlines', 'Southwest Airlines', 'British Airways', 'Air France/KLM', 'Marriott', 'Hyatt', 'IHG'],
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      cashBack: '1 cent per point',
      other: ['Amazon purchases at 0.8 cents per point', 'Merchandise at 0.8 cents per point']
    },
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
    redemption: {
      travelPortal: '1.5 cents per point',
      transferPartners: ['United Airlines', 'Southwest Airlines', 'British Airways', 'Air France/KLM', 'Marriott', 'Hyatt', 'IHG'],
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      cashBack: '1 cent per point',
      other: ['Amazon purchases at 0.8 cents per point', 'Merchandise at 0.8 cents per point']
    },
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
    id: 'amex-platinum',
    name: 'American Express Platinum',
    issuer: 'American Express',
    network: 'Amex',
    annualFee: 695,
    signUpBonus: '80,000 points after spending $6,000 in 6 months',
    rewards: [
      { category: 'Flights booked directly with airlines', rate: '5x points' },
      { category: 'Flights booked through Amex Travel', rate: '5x points' },
      { category: 'Prepaid hotels booked through Amex Travel', rate: '5x points' },
      { category: 'Dining', rate: '1x point' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    redemption: {
      travelPortal: '1 cent per point',
      transferPartners: ['Delta', 'British Airways', 'Air France/KLM', 'Hilton', 'Marriott', 'Choice Hotels'],
      statementCredit: '0.6 cents per point',
      giftCards: '0.5-1 cent per point',
      cashBack: '0.6 cents per point',
      other: ['Merchandise at 0.5-0.7 cents per point', 'Amazon purchases at 0.7 cents per point']
    },
    notablePerks: [
      '$200 airline fee credit',
      '$200 hotel credit',
      'Centurion Lounge access',
      'Priority Pass lounge access',
      'Global Entry/TSA PreCheck credit',
      'Clear Plus credit',
      'No foreign transaction fees',
    ],
    source: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
  },
  {
    id: 'amex-gold',
    name: 'American Express Gold',
    issuer: 'American Express',
    network: 'Amex',
    annualFee: 250,
    signUpBonus: '60,000 points after spending $4,000 in 6 months',
    rewards: [
      { category: 'Dining at restaurants', rate: '4x points' },
      { category: 'U.S. supermarkets', rate: '4x points (up to $25,000 per year)' },
      { category: 'Flights booked directly with airlines', rate: '3x points' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    redemption: {
      travelPortal: '1 cent per point',
      transferPartners: ['Delta', 'British Airways', 'Air France/KLM', 'Hilton', 'Marriott', 'Choice Hotels'],
      statementCredit: '0.6 cents per point',
      giftCards: '0.5-1 cent per point',
      cashBack: '0.6 cents per point',
      other: ['Merchandise at 0.5-0.7 cents per point', 'Amazon purchases at 0.7 cents per point']
    },
    notablePerks: [
      '$120 dining credit ($10/month)',
      '$120 Uber credit ($10/month)',
      'No foreign transaction fees',
    ],
    source: 'https://www.americanexpress.com/us/credit-cards/card/gold/',
  },
  {
    id: 'capital-one-venture-x',
    name: 'Capital One Venture X',
    issuer: 'Capital One',
    network: 'Visa',
    annualFee: 395,
    signUpBonus: '75,000 points after spending $4,000 in 3 months',
    rewards: [
      { category: 'Flights booked through Capital One Travel', rate: '10x points' },
      { category: 'Hotels booked through Capital One Travel', rate: '10x points' },
      { category: 'Car rentals booked through Capital One Travel', rate: '10x points' },
      { category: 'All other purchases', rate: '2x points' },
    ],
    redemption: {
      travelPortal: '1 cent per point',
      transferPartners: ['British Airways', 'Air France/KLM', 'Avianca', 'Cathay Pacific', 'Emirates', 'Etihad', 'Hilton', 'Marriott', 'Wyndham'],
      statementCredit: '0.5 cents per point',
      giftCards: '0.5-1 cent per point',
      cashBack: '0.5 cents per point',
      other: ['Merchandise at 0.5 cents per point']
    },
    notablePerks: [
      '$300 annual travel credit',
      'Priority Pass lounge access',
      'Capital One lounge access',
      'Global Entry/TSA PreCheck credit',
      'No foreign transaction fees',
      'Primary rental car insurance',
    ],
    source: 'https://www.capitalone.com/credit-cards/venture-x/',
  },
  {
    id: 'citi-premier',
    name: 'Citi Premier',
    issuer: 'Citi',
    network: 'Mastercard',
    annualFee: 95,
    signUpBonus: '60,000 points after spending $4,000 in 3 months',
    rewards: [
      { category: 'Restaurants', rate: '3x points' },
      { category: 'Supermarkets', rate: '3x points' },
      { category: 'Gas stations', rate: '3x points' },
      { category: 'Air travel', rate: '3x points' },
      { category: 'Hotels', rate: '3x points' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    redemption: {
      travelPortal: '1.25 cents per point',
      transferPartners: ['American Airlines', 'Avianca', 'Cathay Pacific', 'Emirates', 'Etihad', 'Eva Air', 'Flying Blue', 'JetBlue', 'Qatar', 'Singapore Airlines', 'Thai Airways', 'Turkish Airlines', 'Virgin Atlantic'],
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      cashBack: '1 cent per point',
      other: ['Merchandise at 0.8 cents per point']
    },
    notablePerks: [
      'No foreign transaction fees',
      'Primary rental car insurance',
    ],
    source: 'https://www.citi.com/credit-cards/credit-card-details/citi.action?ID=citi-premier-credit-card',
  },
  {
    id: 'bofa-premium-rewards',
    name: 'Bank of America Premium Rewards',
    issuer: 'Bank of America',
    network: 'Visa',
    annualFee: 95,
    signUpBonus: '50,000 points after spending $3,000 in 3 months',
    rewards: [
      { category: 'Travel and dining', rate: '2x points' },
      { category: 'All other purchases', rate: '1.5x points' },
    ],
    redemption: {
      travelPortal: '1 cent per point',
      transferPartners: ['No transfer partners'],
      statementCredit: '1 cent per point',
      giftCards: '1 cent per point',
      cashBack: '1 cent per point',
      other: ['Merchandise at 0.8 cents per point']
    },
    notablePerks: [
      '$100 airline incidental fee credit',
      'Global Entry/TSA PreCheck credit',
      'No foreign transaction fees',
      'Primary rental car insurance',
    ],
    source: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/',
  },
  {
    id: 'bilt-mastercard',
    name: 'Bilt Mastercard',
    issuer: 'Wells Fargo',
    network: 'Mastercard',
    annualFee: 0,
    signUpBonus: 'No sign-up bonus',
    rewards: [
      { category: 'Rent payments', rate: '1x point' },
      { category: 'Dining', rate: '3x points' },
      { category: 'Travel', rate: '2x points' },
      { category: 'All other purchases', rate: '1x point' },
    ],
    redemption: {
      travelPortal: '1.25 cents per point',
      transferPartners: ['American Airlines', 'United Airlines', 'Air France/KLM', 'British Airways', 'Cathay Pacific', 'Emirates', 'Etihad', 'Flying Blue', 'Hawaiian Airlines', 'Iberia', 'JetBlue', 'Qatar', 'Singapore Airlines', 'Turkish Airlines', 'Virgin Atlantic', 'World of Hyatt', 'IHG', 'Marriott'],
      statementCredit: '0.55 cents per point',
      giftCards: '0.8 cents per point',
      cashBack: '0.55 cents per point',
      other: ['Rent payments at 1 cent per point', 'Down payments at 1 cent per point']
    },
    notablePerks: [
      'No annual fee',
      'No foreign transaction fees',
      'Rent payment without fees',
      'Cell phone protection',
    ],
    source: 'https://www.biltrewards.com/card',
  },
];

// Normalize cashBackCards
cashBackCards.forEach(card => {
  // Find base rate
  let base = '1%';
  const allOther = card.rewards.find(r => r.category.toLowerCase().includes('all other') || r.category.toLowerCase().includes('all purchases'));
  if (allOther) base = allOther.rate;
  card.groceries = base;
  card.dining = base;
  card.travel = base;
  card.gas = base;
  card.streaming = base;
  card.drugstores = base;
  card.allOther = base;
  card.annualFeeMatrix = `$${card.annualFee}`;
  card.signUpBonusMatrix = card.signUpBonus;
  card.rewards.forEach(r => {
    const cat = r.category.toLowerCase();
    if (cat.includes('grocery')) card.groceries = r.rate;
    if (cat.includes('dining')) card.dining = r.rate;
    if (cat.includes('travel')) card.travel = r.rate;
    if (cat.includes('gas')) card.gas = r.rate;
    if (cat.includes('streaming')) card.streaming = r.rate;
    if (cat.includes('drugstore')) card.drugstores = r.rate;
    if (cat.includes('all other') || cat.includes('all purchases')) card.allOther = r.rate;
  });
});

// Normalize pointsCards
pointsCards.forEach(card => {
  // Find base rate
  let base = '1x';
  const allOther = card.rewards.find(r => r.category.toLowerCase().includes('all other') || r.category.toLowerCase().includes('all purchases'));
  if (allOther) base = allOther.rate;
  card.groceries = base;
  card.dining = base;
  card.travel = base;
  card.gas = base;
  card.streaming = base;
  card.drugstores = base;
  card.allOther = base;
  card.annualFeeMatrix = `$${card.annualFee}`;
  card.signUpBonusMatrix = card.signUpBonus;
  card.rewards.forEach(r => {
    const cat = r.category.toLowerCase();
    if (cat.includes('grocery') || cat.includes('supermarket')) card.groceries = r.rate;
    if (cat.includes('dining') || cat.includes('restaurant')) card.dining = r.rate;
    if (cat.includes('travel') || cat.includes('flight') || cat.includes('hotel') || cat.includes('car rental') || cat.includes('air')) card.travel = r.rate;
    if (cat.includes('gas')) card.gas = r.rate;
    if (cat.includes('streaming')) card.streaming = r.rate;
    if (cat.includes('drugstore')) card.drugstores = r.rate;
    if (cat.includes('all other') || cat.includes('all purchases')) card.allOther = r.rate;
  });
}); 