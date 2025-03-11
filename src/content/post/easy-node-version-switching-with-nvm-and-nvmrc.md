---
categories:
  - Coding
  - JavaScript / TypeScript
  - Node.js
  - Shell Scripting
date: 2023-09-11
description: ''
draft: false
title: Automatically switching Node.js version per project with nvm and a .nvmrc file
type: blog
---

# Automatically switching Node.js version per project with nvm and a .nvmrc file

When working on multiple Node.js projects, you often need to switch between different Node.js versions. One project might run on Node.js 16, while another required Node.js 18. Manually switching versions every time you switch projects folders can be annoying and error-prone.

Luckily, there is a simple solution to this problem. By using [nvm](https://github.com/nvm-sh/nvm 'Node Version Manager'), you can easily switch between different Node.js versions. And by adding a `.nvmrc` file to your project, you can automatically switch to the correct Node.js version when you enter the project folder.

Here's how you can set up automatic Node.js version switching per project with `nvm` and a `.nvmrc` file:

## Installing nvm

First, you need to install nvm on your system. You can find the installation instructions on the [nvm GitHub page](https://github.com/nvm-sh/nvm#installing-and-updating 'nvm installation instructions').
Follow the instructions for your operating system to install nvm.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Then, restart your terminal and verify that `nvm` is installed:

```bash
nvm --version
```

## Creating a `.nvmrc` file

Next up, you need to create a `.nvmrc` file in your project folder. This file will contain the Node.js version that your project requires. For example, if your project requires Node.js version 18, create a `.nvmrc` file with the following content:

```bash
18
```

This will tell `nvm` to use Node.js version 18 when you enter the project folder.

to manually switch to the version specified in the `.nvmrc` file, you can run the following command in your project folder:

```bash
nvm use
```

## Automatically switching Node.js version with a shell script

To automate this process, we can add a script in our shell configuration file. This script detects when a `.nvmrc` file is present in a folder and automatically switches to the Node.js version specified in the file.

### For Bash (`.bashrc` or `.bash_profile`)

Add the following script to your `.bashrc` or `.bash_profile` file:

```bash
cdnvm() {
    command cd "$@" || return $?
    nvm_path="$(nvm_find_up .nvmrc | command tr -d '\n')"

    # If there are no .nvmrc file, use the default nvm version
    if [[ ! $nvm_path = *[^[:space:]]* ]]; then

        declare default_version
        default_version="$(nvm version default)"

        # If there is no default version, set it to `node`
        # This will use the latest version on your machine
        if [ $default_version = 'N/A' ]; then
            nvm alias default node
            default_version=$(nvm version default)
        fi

        # If the current version is not the default version, set it to use the default version
        if [ "$(nvm current)" != "${default_version}" ]; then
            nvm use default
        fi
    elif [[ -s "${nvm_path}/.nvmrc" && -r "${nvm_path}/.nvmrc" ]]; then
        declare nvm_version
        nvm_version=$(<"${nvm_path}"/.nvmrc)

        declare locally_resolved_nvm_version
        # `nvm ls` will check all locally-available versions
        # If there are multiple matching versions, take the latest one
        # Remove the `->` and `*` characters and spaces
        # `locally_resolved_nvm_version` will be `N/A` if no local versions are found
        locally_resolved_nvm_version=$(nvm ls --no-colors "${nvm_version}" | command tail -1 | command tr -d '\->*' | command tr -d '[:space:]')

        # If it is not already installed, install it
        # `nvm install` will implicitly use the newly-installed version
        if [ "${locally_resolved_nvm_version}" = 'N/A' ]; then
            nvm install "${nvm_version}";
        elif [ "$(nvm current)" != "${locally_resolved_nvm_version}" ]; then
            nvm use "${nvm_version}";
        fi
    fi
}

alias cd='cdnvm'
cdnvm "$PWD" || exit
```

Restart your terminal or run `source ~/.bashrc` to apply the changes.

### For Zsh (`.zshrc`)

Add the following script to your `.zshrc` file:

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook

load-nvmrc() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

Then restart your terminal or run `source ~/.zshrc` to apply the changes.

### For Fish (`.config/fish/config.fish`)

This requires you th have [bass](https://github.com/edc/bass) installed.

And some files to be created in the `~/.config/fish/functions` folder.

`~/.config/fish/functions/nvm.fish`:

```bash
function nvm
  bass source ~/.nvm/nvm.sh --no-use ';' nvm $argv
end
```

`~/.config/fish/functions/nvm_find_nvmrc.fish`:

```bash
function nvm_find_nvmrc
  bass source ~/.nvm/nvm.sh --no-use ';' nvm_find_nvmrc
end
```

`~/.config/fish/functions/load_nvm.fish`:

```bash
function load_nvm --on-variable="PWD"
  set -l default_node_version (nvm version default)
  set -l node_version (nvm version)
  set -l nvmrc_path (nvm_find_nvmrc)
  if test -n "$nvmrc_path"
    set -l nvmrc_node_version (nvm version (cat $nvmrc_path))
    if test "$nvmrc_node_version" = "N/A"
      nvm install (cat $nvmrc_path)
    else if test "$nvmrc_node_version" != "$node_version"
      nvm use $nvmrc_node_version
    end
  else if test "$node_version" != "$default_node_version"
    echo "Reverting to default Node version"
    nvm use default
  end
end
```

And then in your `~/.config/fish/config.fish`:

```bash
# You must call it on initialization or listening to directory switching won't work
load_nvm > /dev/stderr
```

Restart your terminal or run `source ~/.config/fish/config.fish` to apply the changes.

Now, whenever you `cd` into a project with a `.nvmrc` file, the shell will automatically switch to the correct Node.js version. This setup makes it easy to work on multiple Node.js projects with different versions without having to worry about switching versions manually.

<sub>last updated: 2025-03-11</sub>

I hope this post was helpful to you.
If you have any questions or feedback, feel free to contact me on
[Twitter/X](https://x.com/jvwissen),
[Bluesky](https://bsky.app/profile/jeroenvanwissen.nl), or
[Mastodon](https://mastodon.social/@jeroenvanwissen). I'd love to hear
from you! 🚀
