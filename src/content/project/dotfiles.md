---
type: project
draft: false
date: 2025-03-11
title: .dotfiles
categories:
  - System Setup
  - Development Tools
  - macOS
  - Linux
description: My personal dotfiles for macOS and Linux development environments with automated setup scripts and modern CLI tools
status: active
tech:
  - ZSH
  - Helix
  - Kitty
  - Starship
  - Yazi
  - NVM
  - Homebrew
  - Git
---

# My personal .dotfiles

Every developer should have this - a personal .dotfiles repository. A collection of configuration files and scripts that automates setting up a development environment on a new machine.

My dotfiles support both **macOS** and **Linux** (Debian/Ubuntu, Fedora, Arch) with automated installation scripts. I used to have a private one in the past but it was a mess. I decided to start from scratch and build a new one with proper organization and documentation.

## What's Inside

### Shell & Terminal

- **ZSH**: Shell configuration with Oh My ZSH and Starship prompt
- **Kitty**: GPU-based terminal emulator (macOS)
- **Starship**: Cross-shell prompt configuration with custom theming
- **Yazi**: Modern terminal file manager
- **lazygit**: Terminal UI for git (integrated with Helix via Ctrl-G)

### Development Tools

- **Helix**: Modern text editor with LSP support for TypeScript, Rust, Swift, Python, Astro, and more
- **NVM**: Node.js version management with auto-switching
- **git-delta**: Syntax-highlighted, side-by-side diffs
- **OpenCode**: Open source AI coding agent with Catppuccin theme

### Modern CLI Replacements

- **eza** → replaces `ls` (with git status & icons)
- **bat** → replaces `cat` (with syntax highlighting)
- **fd** → replaces `find` (faster)
- **ripgrep** → replaces `grep` (faster)
- **zoxide** → replaces `cd` (with frecency)
- **fzf** → Fuzzy finder for everything

### Development Utilities

- **jq**: JSON processor
- **hyperfine**: Benchmarking tool
- **tokei**: Code statistics
- **watchexec**: File watcher for running commands
- **xcbeautify**: Xcode build output formatter (macOS)

## Language Support

Helix is configured with LSP support for:

- **TypeScript/JavaScript**: typescript-language-server, eslint, tailwindcss, prettier
- **Rust**: rust-analyzer, clippy
- **Swift**: sourcekit-lsp, swiftformat
- **Python**: pylsp, ruff, jedi, pyright
- **Astro**: astro-ls
- **HTML/CSS**: vscode-langservers-extracted
- **TOML**: taplo
- **YAML**: yaml-language-server
- **Bash**: bash-language-server
- **Markdown**: marksman

## Installation

Clone the repository and run the automated installer:

```bash
git clone https://github.com/jeroenvanwissen/.dotfiles.git
cd .dotfiles

# macOS
./install_macos.sh

# Linux (Debian/Ubuntu, Fedora, Arch)
./install_linux.sh
```

All tools can be kept up to date with a single command:

```bash
update-tools
```

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/.dotfiles '.dotfiles on GitHub')
