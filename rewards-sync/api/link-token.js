// Example backend API for Plaid Link token generation
// This would typically be a Node.js/Express server or Cloud Function

const express = require('express');
const { PlaidApi, PlaidEnvironments } = require('plaid');

const app = express();
app.use(express.json());

// Initialize Plaid client
const client = new PlaidApi({
  basePath: PlaidEnvironments.sandbox, // or production
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

// Generate Link Token endpoint
app.post('/api/link-token', async (req, res) => {
  try {
    const request = {
      user: { client_user_id: req.body.userId || 'demo-user' },
      client_name: 'Rewards Sync',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
      redirect_uri: 'rew-sync://oauth', // iOS universal link
    };

    const response = await client.linkTokenCreate(request);
    
    res.json({ 
      link_token: response.data.link_token,
      expiration: response.data.expiration 
    });
  } catch (error) {
    console.error('Error creating link token:', error);
    res.status(500).json({ 
      error: 'Failed to create link token',
      details: error.message 
    });
  }
});

// Exchange public token for access token
app.post('/api/exchange-token', async (req, res) => {
  try {
    const { public_token } = req.body;
    
    const response = await client.itemPublicTokenExchange({
      public_token: public_token
    });

    // In a real app, store the access_token securely for the user
    const access_token = response.data.access_token;
    const item_id = response.data.item_id;

    res.json({ 
      access_token,
      item_id,
      message: 'Token exchanged successfully'
    });
  } catch (error) {
    console.error('Error exchanging token:', error);
    res.status(500).json({ 
      error: 'Failed to exchange token',
      details: error.message 
    });
  }
});

// Sync transactions endpoint
app.post('/api/transactions/sync', async (req, res) => {
  try {
    const { access_token, start_date, end_date } = req.body;
    
    const response = await client.transactionsGet({
      access_token,
      start_date,
      end_date,
      options: {
        include_personal_finance_category: true
      }
    });

    // Process and store transactions
    const transactions = response.data.transactions;
    
    res.json({ 
      transactions,
      total_transactions: transactions.length,
      message: 'Transactions synced successfully'
    });
  } catch (error) {
    console.error('Error syncing transactions:', error);
    res.status(500).json({ 
      error: 'Failed to sync transactions',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 