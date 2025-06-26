# 🚀 Rewards-Sync MVP

A candy-colored mobile app that supercharges your wallet with smart rewards tracking and Plaid Link integration.

## ✨ Features

### 🎨 Candy-Colored UI
- **Addictive watermelon** (#FF6B6B) primary buttons
- **Mint** (#4ECDC4) secondary actions  
- **Yellow pop** (#FFE66D) accent highlights
- Beautiful gradient backgrounds
- Smooth micro-interactions with haptic feedback
- Scale animations on button press

### 🔗 Plaid Integration
- Secure bank account connection via Plaid Link
- Transaction syncing capabilities
- Mock interface for development (easily replaceable with real Plaid SDK)

### 📱 Mobile-First Design
- Big, thumb-friendly buttons
- Simple, intuitive flows
- Haptic feedback for better UX
- Responsive layout

## 🛠️ Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for routing
- **Expo Linear Gradient** for beautiful backgrounds
- **React Native Haptic Feedback** for tactile responses
- **Plaid Link SDK** for bank connections

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Clone and install dependencies**
   ```bash
   cd rewards-sync
   pnpm install
   ```

2. **Start the development server**
   ```bash
   pnpm expo start
   ```

3. **Run on device/simulator**
   ```bash
   # iOS
   pnpm expo run:ios
   
   # Android  
   pnpm expo run:android
   ```

## 🎯 Project Structure

```
rewards-sync/
├── app/
│   ├── index.tsx          # Home screen with candy UI
│   └── PlaidFlow.tsx      # Plaid Link integration
├── lib/
│   └── ui.ts              # Global style helpers
├── api/
│   └── link-token.js      # Backend API example
├── tailwind.config.js     # Tailwind configuration
└── App.tsx                # Main app with navigation
```

## 🔧 Configuration

### Tailwind CSS
The app uses a custom candy-colored theme defined in `tailwind.config.js`:

```js
colors: {
  primary:  "#FF6B6B",  // addictive watermelon
  secondary:"#4ECDC4",  // mint
  accent:   "#FFE66D",  // yellow pop
}
```

### Plaid Setup
1. Sign up for a [Plaid account](https://plaid.com)
2. Get your API keys from the dashboard
3. Update the backend API with your credentials
4. Replace the mock Plaid interface with real SDK calls

## 🎨 UI Components

### Big Button Style
```tsx
const bigBtn = "w-full py-4 rounded-xl items-center justify-center mb-4 shadow-lg";
const bigTxt = "text-lg font-bold tracking-wide text-white";
```

### Gradient Backgrounds
```tsx
<LinearGradient colors={["#FF9A9E", "#FAD0C4"]}>
  {/* Your content */}
</LinearGradient>
```

## 🔗 Plaid Integration

### Backend API Endpoints

1. **Generate Link Token**
   ```bash
   POST /api/link-token
   ```

2. **Exchange Public Token**
   ```bash
   POST /api/exchange-token
   Body: { public_token: "..." }
   ```

3. **Sync Transactions**
   ```bash
   POST /api/transactions/sync
   Body: { access_token: "...", start_date: "...", end_date: "..." }
   ```

### Environment Variables
Create a `.env` file in your backend:
```env
PLAID_CLIENT_ID=your_client_id
PLAID_SECRET=your_secret_key
```

## 🚀 Next Steps

### Immediate TODOs
- [ ] Add **Lottie confetti** on successful link
- [ ] Hook analytics (`analytics.track("Card linked")`)
- [ ] Compute reward totals; feed list into *View Earnings* screen
- [ ] Build "Add-one-Card" recommendation logic

### Advanced Features
- [ ] Real-time transaction notifications
- [ ] Reward optimization algorithms
- [ ] Social features (compare with friends)
- [ ] Dark mode support
- [ ] Offline capability

### Backend Enhancements
- [ ] User authentication
- [ ] Database integration (Postgres/Supabase)
- [ ] Daily sync cron jobs
- [ ] Webhook handling for real-time updates

## 🎨 Color Palette

| Role      | Hex     | Use                       |
| --------- | ------- | ------------------------- |
| Primary   | #FF6B6B | CTA buttons, gradients    |
| Secondary | #4ECDC4 | Secondary actions, chips  |
| Accent    | #FFE66D | Highlight amounts, badges |
| Dark text | #1A202C | Copy                      |
| Light bg  | #FDFDFD | Cards & modals            |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own rewards app!

---

**Happy building! 🚀✨** 