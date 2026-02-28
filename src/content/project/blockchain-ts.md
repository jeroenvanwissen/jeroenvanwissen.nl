---
type: project
draft: false
date: 2025-02-02
title: Blockchain.ts
categories:
  - JavaScript / TypeScript
  - Blockchain
  - Coding
  - Learning Project
description: A fun experimental blockchain implementation in TypeScript with hybrid PoW/PoS consensus, P2P networking, and UTXO transactions - purely for learning!
status: active
tech:
  - TypeScript
  - Node.js
  - WebSocket
  - Proof of Work
  - Proof of Stake
  - UTXO Model
  - Jest
---

# Blockchain.ts

A fun experimental blockchain implementation in TypeScript! This is purely a learning project to explore how blockchain technology works under the hood. **Not intended for any real-world use** - just a playground for understanding distributed systems, consensus mechanisms, and cryptography.

## What This Project Is

This started as a simple JavaScript blockchain and evolved into a more comprehensive TypeScript implementation. It's my way of learning by building, experimenting with concepts like:

- How does Proof of Work actually work?
- What's the difference between PoW and Proof of Stake?
- How do nodes communicate in a P2P network?
- How does the UTXO model prevent double-spending?
- How do digital signatures secure transactions?

**Important**: This is an educational experiment, not a real cryptocurrency! Don't use this for anything beyond learning and tinkering.

## Features (For Fun!)

Here's what I've built so far:

### Consensus Mechanisms

- **Hybrid PoW/PoS**: Starts with Proof of Work, transitions to Proof of Stake at block 100
- **Worker Thread Mining**: Non-blocking PoW mining using Node.js worker threads
- **Staking System**: Stake registration, weight calculation, and PoS block generation

### Transaction Model

- **UTXO Model**: Unspent Transaction Output tracking (like Bitcoin)
- **Double-Spend Prevention**: Chain validation ensures transaction integrity
- **Digital Signatures**: secp256k1 elliptic curve cryptography for signing

### Networking

- **P2P WebSocket Network**: Nodes communicate and sync via WebSocket
- **Chain Synchronization**: Automatic longest-chain consensus
- **Message Protocol**: Broadcast blocks, transactions, and stake registrations

### Wallet System

- **Key Generation**: Generate wallet keypairs
- **Address Encoding**: Base58Check address format
- **Persistent Storage**: Wallet data saved to JSON files

### Developer Experience

- **TypeScript**: Type-safe blockchain implementation
- **Jest Testing**: Test suite for core functionality
- **ESLint**: Code quality enforcement
- **Multiple Nodes**: Run multiple nodes locally for testing

## Quick Start (Try It Out!)

```bash
# Clone the repository
git clone https://github.com/jeroenvanwissen/blockchain-ts.git
cd blockchain-ts

# Install dependencies
npm install

# Start a node
npm run dev

# In another terminal, start a second node
P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev

# In another terminal, run the miner
npm run mine

# Run tests
npm test
```

## How It Works

The project consists of several core components:

- **Block**: Block structure with hash calculation and PoW/PoS support
- **Blockchain**: Chain management, UTXO tracking, and consensus logic
- **Transaction**: Input/output model with signing and verification
- **Wallet**: Key generation, address encoding, and persistence
- **Miner**: Worker thread-based PoW mining
- **StakingService**: Periodic PoS block generation
- **P2PServer**: WebSocket networking and message routing

Data is persisted to JSON files in the `./data/` directory, making it easy to inspect the blockchain state.

## What I've Learned

Building this has taught me:

- How consensus mechanisms prevent double-spending
- The trade-offs between PoW and PoS
- Why the UTXO model is used instead of account balances
- How P2P networks stay synchronized
- The importance of cryptographic signatures in distributed systems
- How worker threads prevent blocking in Node.js

## Disclaimer

**This is a fun learning project!** It's not secure, not audited, and definitely not meant for handling real value. If you're interested in blockchain technology, feel free to explore the code, run it locally, and learn from it. But please don't use it for anything serious!

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/blockchain-ts 'Blockchain.TS on GitHub')
