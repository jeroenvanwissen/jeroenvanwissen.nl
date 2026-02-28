---
type: project
draft: false
date: 2026-02-05
title: LABS Keyboards
categories:
  - Hardware
  - QMK
  - Mechanical Keyboards
  - Open Source
description: Custom QMK/VIAL keyboard firmware for mechanical keyboards with focus on split layouts and customization
status: active
tech:
  - C
  - QMK
  - VIAL
  - Embedded Systems
  - Hardware
  - Make
---

# LABS Keyboards

Custom QMK/VIAL keyboard firmware for building and customizing mechanical keyboards. Supporting 5 different keyboard layouts ranging from compact 36-key splits to full ortholinear boards.

## What This Is

A collection of keyboard firmware configurations built on top of QMK and VIAL, making it easy to customize and build firmware for mechanical keyboards. The project uses VIAL's graphical configurator for easy keymap customization without recompiling.

## Supported Keyboards

### Corne v4 (CRKBD)

**3x6+3 split with LCD & encoders (RP2040)**

A popular 42-key split keyboard featuring:

- OLED displays for status information
- Rotary encoders for volume/media control
- Per-key RGB lighting support
- RP2040 microcontroller

### DASBOB

**36-key diodeless split (RP2040)**

Ultra-compact split keyboard:

- 36 keys total (18 per side)
- Diodeless design for simplified build
- RP2040 microcontroller
- Minimal and efficient layout

### Piantor

**42-key diodeless split (RP2040)**

Compact split with more keys than DASBOB:

- 42 keys total (21 per side)
- Diodeless design
- RP2040 microcontroller
- Balance between compact and functional

### Planck v7

**47-key ortholinear (STM32)**

Classic ortholinear grid layout:

- 47 keys in a grid layout
- STM32 microcontroller
- Compact form factor
- Ideal for minimalists

### ZSA Voyager

**52-key split ergonomic (STM32)**

Premium ergonomic split keyboard:

- 52 keys with ergonomic layout
- STM32 microcontroller
- Professional-grade build quality
- Highly customizable layout

## Features

### QMK Foundation

Built on the powerful QMK firmware platform providing:

- Extensive key customization
- Layer support
- Macro capabilities
- Advanced features (tap dance, combos, etc.)

### VIAL Integration

VIAL support enables:

- Real-time keymap editing without flashing
- Graphical configurator
- Easy layer management
- Macro recording
- No need to recompile firmware for changes

### Development Setup

Streamlined build process with:

- Makefile for easy building
- Setup script for symlinks
- Submodule management for VIAL-QMK
- Build targets for each keyboard

## Quick Start

```bash
# Clone with submodules
git clone --recursive https://github.com/jeroenvanwissen/LABSKeyboards.git
cd LABSKeyboards

# Initialize vial-qmk submodules
cd vial-qmk
git submodule update --init --recursive
cd ..

# Setup QMK environment
make qmk-setup

# Create symlinks
make setup

# Build firmware (examples for each keyboard)
make crkbd_v4      # Corne v4
make dasbob        # DASBOB
make piantor       # Piantor
make planck_v7     # Planck v7
make voyager       # ZSA Voyager

# Build and copy to RP2040 (for RP2040-based keyboards)
make crkbd_v4-copy
make dasbob-copy
make piantor-copy

# Build and flash via QMK
make crkbd_v4-flash
make planck_v7-flash
make voyager-flash
```

## Project Structure

```
LABSKeyboards/
├── vial-qmk/              # VIAL QMK submodule
├── keyboards/
│   └── labskeyboards/
│       ├── crkbd_v4/      # Corne v4 keyboard
│       ├── dasbob/        # DASBOB 36-key split
│       ├── piantor/       # Piantor 42-key split
│       ├── planck_v7/     # Planck v7 ortholinear
│       └── voyager/       # ZSA Voyager split
├── Makefile               # Build convenience wrapper
├── setup.sh               # Setup script
└── README.md
```

## Why This Project?

Mechanical keyboards are highly personal tools. This project makes it easy to:

- Maintain keyboard firmware in version control
- Share configurations across multiple keyboard layouts
- Build custom layouts without fighting build systems
- Experiment with different key mappings
- Support both RP2040 and STM32 microcontrollers
- Contribute to the mechanical keyboard community

## Keyboard Categories

The collection covers different use cases:

- **Ultra-compact** (DASBOB): Minimal 36-key layout
- **Compact** (Piantor, Corne): 42-key balanced layouts
- **Ortholinear** (Planck): Grid-based typing
- **Ergonomic** (Voyager): Premium split design

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/LABSKeyboards 'LABS Keyboards on GitHub')
- [QMK Firmware](https://qmk.fm/ 'QMK Firmware')
- [VIAL](https://get.vial.today/ 'VIAL Keyboard Configurator')
