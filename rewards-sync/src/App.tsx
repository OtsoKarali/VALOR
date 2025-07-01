import React, { useState } from 'react';
import Welcome from './Welcome';
import Home from './Home';
import PlaidFlow from './PlaidFlow';
import RewardsDatabase from './RewardsDatabase';

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'home' | 'plaid' | 'rewards-db'>('welcome');

  if (screen === 'welcome') {
    return <Welcome onNext={() => setScreen('home')} />;
  }
  if (screen === 'home') {
    return (
      <Home onPlaid={() => setScreen('plaid')} onRewardsDb={() => setScreen('rewards-db')} />
    );
  }
  if (screen === 'plaid') {
    return <PlaidFlow />;
  }
  if (screen === 'rewards-db') {
    return <RewardsDatabase />;
  }
  return null;
}
