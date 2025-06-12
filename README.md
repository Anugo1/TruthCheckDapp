# 🧠 TruthCheck - Decentralized Fact Verification Platform

**TruthCheck** is a Web3-powered fact-checking platform that allows users to verify claims using fast checks and decentralized technology. Users can connect their wallet, submit claims, verify them via integrated APIs or AI, and earn a reward token for participation. The application ensures transparency, immutability, and community-driven trust.

---

## 🚀 Features

- 🔗 **Wallet Connection** – Seamless Web3 login using MetaMask.
- ✍️ **Claim Submission** – Submit any claim you want verified.
- ✅ **Claim Verification** – Integrates Google Fact Check API (with plans for AI-based verification).
- 🪙 **Token Reward System** – Mint Truth Tokens on claim submission (on-chain).
- 📜 **Smart Contract** – Deployed to Base Testnet, storing all verification records immutably.
- 🔍 **Transparency** – All data and claim results are visible on the blockchain.

---

## 🛠 Tech Stack

| Layer        | Tools Used                                      |
|--------------|--------------------------------------------------|
| Frontend     | React, Vite, Typescript                   |
| Web3 Wallet  | MetaMask (via Ethers.js)                         |
| Blockchain   | Solidity, Hardhat, Sepolia Testnet                  |
| Backend API  | Google Fact Check API        |
| Token        | ERC-20 based "TruthToken" for rewarding users    |

---

## 📸 Screenshots



---

## 📦 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/truthcheck.git
cd truthcheck
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Compile & Deploy Smart Contract (Hardhat)
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Start the App (Frontend)
You can run the  server:

```bash
npm run dev
```

---

## 🔐 Smart Contract Overview

The smart contract:
- Accepts user claims
- Verifies claims
- Mints TruthTokens as a reward
- Emits events for every submission and verification


---

## 📚 Future Plans

- Integrate OpenAI API as fallback for claims the Google Fact Check API can't verify.
- Introduce staking for fact-checkers.
- Add DAO voting on disputed claims.
- Launch on Ethereum Mainnet.

---

---


## 🌐 Live Demo

[https://truth-check-dapp-group2w3.vercel.app/](https://truth-check-dapp-group2w3.vercel.app/) 

---
