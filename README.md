# 🎓 **Edupay — Revolutionizing School Payments on Base**

<p align="center">
  <img src="https://i.imgur.com/WHpkFuJ.png" alt="Edupay Logo" width="120" height="120" />
</p>

<p align="center">
  <b>Seamless, transparent, and borderless school payments powered by blockchain.</b>
</p>

<p align="center">
  <a href="https://base.org/"><img src="https://img.shields.io/badge/Built%20On-Base-blue?logo=coinbase&logoColor=white" alt="Built on Base" /></a>
  <a href="https://edupaydefi.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-Visit-green?logo=vercel" alt="Edupay Demo" /></a>
  <a href="https://edu-chain-testnet.blockscout.com/tx/0xd3851365582369b236fe059039c6252b14955a87e075e2233dfdf68af99fcef7"><img src="https://img.shields.io/badge/Smart%20Contract-Verified%20on%20Base-blue?logo=ethereum" alt="Smart Contract" /></a>
  <a href="https://github.com/Thedongraphix/EduPayDeFi"><img src="https://img.shields.io/github/stars/Thedongraphix/EduPayDeFi?style=social" alt="GitHub Stars" /></a>
</p>

---

## 🚀 **Introduction**

**Edupay** is a **blockchain-powered school payment platform** built on the **Base network**, designed to simplify **tuition payments, fee tracking, and fund management** for schools, parents, and students.

By leveraging the **scalability of Base (an Ethereum Layer 2)**, Edupay delivers **secure, low-cost, and transparent** payment infrastructure for the education ecosystem.

With Edupay, every transaction is **on-chain, verifiable, and automated** — empowering schools to focus on learning, not paperwork.

---

## 🎯 **Problem Statement**

Traditional school payment systems are broken:

* ⏳ **Slow & opaque** — Banks delay transfers and reconciliation.
* 💸 **High fees** — Intermediaries add hidden costs.
* 🚫 **Limited accessibility** — Unbanked parents are excluded.
* 🧾 **Manual records** — Schools track fees via spreadsheets or paperwork.

**Edupay fixes this** by introducing a **transparent, decentralized, and instant** school payment experience powered by **Base**.

---

## 🔑 **Key Features**

* 💰 **Seamless Crypto Payments** — Pay tuition securely with **ETH, USDC, or Base-native assets**.
* ⚡ **Instant Settlement** — On-chain payments confirmed in seconds.
* 📊 **Real-Time Dashboards** — Schools monitor incoming fees live.
* 🧾 **Automated Receipts** — Every payment triggers on-chain proof and downloadable receipts.
* 💼 **Decentralized Fund Management** — Smart wallets ensure transparency.
* 🔄 **DeFi Integration (Coming Soon)** — Enable yield generation on idle school funds.
* 💵 **Fiat ↔ Crypto On-Ramp (Planned)** — Easily top up using M-Pesa or cards via integrated ramps.

---

## 🏗️ **How It Works**

1. **Wallet Connection** — Users connect via **MetaMask**, **Coinbase Wallet**, or **WalletConnect**.
2. **Fee Selection** — Parents or students select the amount and payment method (**ETH / USDC / BASE**).
3. **Transaction Confirmation** — Payment executes **on Base**, optimized for low gas.
4. **Automatic Verification** — Smart contracts update the school dashboard instantly.
5. **Record Keeping** — Receipts are generated and stored on-chain for audit purposes.

---

## 🛠️ **Tech Stack**

| **Layer**            | **Technology**                           | **Purpose**                                                    |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| **Blockchain**       | Base (Ethereum L2)                       | Fast, affordable, and scalable network for Edupay transactions |
| **Smart Contracts**  | Solidity, Hardhat                        | Tuition logic, payment verification, and wallet management     |
| **Web3 Integration** | ethers.js, wagmi, thirdweb SDK           | Wallet connectivity and blockchain interactions                |
| **Frontend**         | Next.js, React, Tailwind CSS, ShadCN/UI  | Intuitive and responsive user interface                        |
| **Backend**          | Node.js, Express, Firebase, PostgreSQL   | Off-chain data and event logging                               |
| **Authentication**   | Coinbase Wallet, WalletConnect, MetaMask | Secure user access                                             |
| **Deployment**       | Vercel + Base Testnet                    | Continuous deployment and live testing                         |

---

## 👩‍🎓 **Target Users**

* 🎓 **Students & Parents** — Pay fees with crypto, track payment history.
* 🏫 **Schools & Universities** — Accept tuition, automate reporting.
* 💰 **Scholarship Funds & NGOs** — Disburse financial aid transparently via smart contracts.

---

## 💡 **Why Edupay on Base?**

* ⚙️ **Low Gas Fees** – Base ensures transactions are ultra-cheap and scalable.
* 🔒 **Secure & Transparent** – Immutable smart contracts protect user funds.
* 🌍 **Borderless Payments** – Accept payments globally, not just locally.
* 💸 **Interoperable** – Works seamlessly with **USDC** and other Base assets.
* 🧠 **Future-Ready** – Designed for DeFi integrations, stablecoins, and on-chain identity (ERC-6551).

---

## 🔗 **Live Links**

* 🌐 **Edupay App:** [edupaydefi.vercel.app](https://edupaydefi.vercel.app)
* 🔍 **Smart Contract on Base Explorer:** [View Transaction](https://edu-chain-testnet.blockscout.com/tx/0xd3851365582369b236fe059039c6252b14955a87e075e2233dfdf68af99fcef7)
* 🧰 **Repository:** [EduPayDeFi GitHub](https://github.com/Thedongraphix/EduPayDeFi)

---

## 🧑‍💻 **Run Locally**

### 1. Clone the Repository

```bash
git clone https://github.com/Thedongraphix/EduPayDeFi.git
cd EduPayDeFi
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
PRIVATE_KEY=<your_wallet_private_key>
NEXT_PUBLIC_CONTRACT_ADDRESS=<deployed_contract_address>
```

### 4. Compile Smart Contracts

```bash
npx hardhat compile
```

### 5. Deploy Contracts to Base Testnet

```bash
npx hardhat run scripts/deploy.js --network base-sepolia
```

### 6. Run the Development Server

```bash
npm run dev
```

Then visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🤝 **Contributing**

We welcome contributions from builders passionate about **Web3, DeFi, and EdTech**.

1. **Fork the repo**
2. **Create your feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit changes**

   ```bash
   git commit -m "feat: add new smart contract logic"
   ```
4. **Push branch & submit PR**

   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** and describe your update clearly.

---

## 🧭 **Best Practices**

* Follow **Solidity security standards (OpenZeppelin)**
* Use **Etherscan verification** for contracts
* Maintain **consistent commit messages**
* Ensure **unit tests pass** before merging
* Respect **Base ecosystem guidelines** for Layer 2 deployments

---

## 🔐 **Security**

* ✅ Smart contract security follows OpenZeppelin patterns.
* 🔒 No private keys or credentials should ever be committed.
* 🧪 Test all contracts locally or on Base Sepolia before mainnet deployment.

---

## 🌍 **Community & Governance**

Join the growing Edupay community:

* 🗳️ **Governance (coming soon)** via on-chain DAO voting.
* 💬 **Chat:** [Discord (coming soon)]()
* 🧵 **Follow updates:** [Twitter / X](https://x.com/thedongraphix)

---

## ✨ **Future Roadmap**

| Phase       | Focus Area         | Description                                         |
| ----------- | ------------------ | --------------------------------------------------- |
| **Q4 2025** | On-Chain Receipts  | Integrate tokenized receipt NFTs for payment proofs |
| **Q1 2026** | Fiat On-Ramp       | Enable M-Pesa & Card payments via Paycrest          |
| **Q2 2026** | EduDAO             | Introduce decentralized school governance           |
| **Q3 2026** | Scholarship Vaults | Deploy DeFi pools for scholarship distribution      |

---

## 🧾 **License**

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

> 💡 *Edupay on Base is more than a payment tool — it’s an on-chain financial infrastructure designed to make education borderless, affordable, and transparent.*
