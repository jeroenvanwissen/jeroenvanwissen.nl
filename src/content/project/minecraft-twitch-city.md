---
type: project
draft: true
date: 2026-02-09
title: Minecraft Twitch City
categories:
  - Game Development
  - Twitch
  - Minecraft
  - Kotlin
  - Live Coding
description: An interactive Minecraft mod where Twitch viewers spawn and control NPCs through chat commands and channel point redemptions
status: active
tech:
  - Kotlin
  - Minecraft
  - Twitch API
  - Game Development
  - Live Streaming
---

# Minecraft Twitch City

An interactive Minecraft experience where Twitch viewers become part of the game! Viewers can spawn their own NPCs in a custom-built city, control them through chat commands, and participate in various game modes.

## What Makes This Special

This entire project is being developed **live on Twitch**, building both the Minecraft mod and the world together with the community. Viewers contribute ideas, watch the code being written in real-time, and immediately see their suggestions come to life in the game.

## Current Features

- **Twitch Integration**: Full channel point redemption system
- **Viewer NPCs**: Each viewer can spawn their own NPC
- **Custom Spawn System**: Special spawn point block placement
- **NPC Management**: One NPC per viewer with Twitch username display
- **City Center Spawning**: NPCs appear in the center of the custom-built city

## Planned Features

### NPC Commands

Chat-based NPC control and interaction for movement, emotes, and actions.

### Duel System

- Challenge other viewer NPCs to combat
- Accept/decline mechanics
- Random hit/miss combat system (10 hearts per NPC)
- Winner/loser tracking

### Capture the Flag

Team-based gameplay mode where viewer NPCs compete in teams.

### Combat System

- NPC damage from players
- Environmental hazards (TNT, etc.)
- Respawn mechanics for defeated NPCs

## How Viewers Interact

### Spawning NPCs

- Redeem channel points to spawn your NPC
- Only one NPC per viewer at a time
- NPCs display your Twitch username
- Spawn location: City center

### Chat Commands

- `!duel @viewer` - Challenge another viewer's NPC
- More commands in development!

## Development Phases

### Phase 0: Foundation ✓

- Clean up experimental code
- Update dependencies
- Ensure compilation stability

### Phase 1: Core Functionality (In Progress)

- Minecraft server setup with mods
- Twitch connection and channel points
- Basic NPC spawning mechanics
- Custom spawn point marker block

### Phase 2: Interactive Commands

- Twitch chat command system
- NPC control and interaction

### Phase 3: Game Modes

- Duel system
- Capture the Flag
- Additional game modes based on community feedback

## Built Live with Community

The best part? **You can watch this being built!** Join the Twitch streams to:

- Watch development in real-time
- Suggest features and mechanics
- See your ideas implemented live
- Test new features as they're coded
- Contribute to the Minecraft world design

## Technical Stack

Built with Kotlin for Minecraft modding, integrating the Twitch API for real-time viewer interaction. The project uses modern development practices and is continuously refined based on community testing during live streams.

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/minecraft-labsworld 'Minecraft Twitch City on GitHub')
