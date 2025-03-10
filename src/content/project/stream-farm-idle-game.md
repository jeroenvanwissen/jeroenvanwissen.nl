---
draft: false
date: 2024-01-16
title: Stream Farm idle game
categories:
  - JavaScript / TypeScript
  - Twitch
  - Coding
  - Game Development
type: project
image:
  img: ../../assets/images/stream-farm-idle-game1.png
  alt: Screenshot of a part of a map of the game frontend.
description: Fun little farming idle game I wrote and run on my live streams on Twitch.
---

# Stream Farm

**_This needs to be rewritten and updated_**

This is a fun little project I started to build on my live streams on Twitch. It's a simple idle game where you can sow, water and harvest crops to produce resources. You can buy seeds and sell harvested crops to make money.

The backend is core of the game build with NestJS and a PostgreSQL database to store the game state. The frontend is built with Phaser 3. The backend uses Server Side Events to communicate updates to the Frontend. The game can run headless, the Frontend is not required to run and play the game.
