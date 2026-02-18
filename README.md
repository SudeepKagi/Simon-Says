# Simon Says 🎮
![GitHub last commit](https://img.shields.io/github/last-commit/SudeepKagi/Simon-Says) ![License](https://img.shields.io/github/license/SudeepKagi/Simon-Says) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=F7DF1E)

> **A lightweight, browser-only implementation of the classic “Simon Says” memory game.**  
> Play, test your memory, and watch the colors flash in an ever-growing sequence.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Game](#running-the-game)
6. [Usage](#usage)
7. [Development](#development)
   - [Running a Local Dev Server](#running-a-local-dev-server)
   - [Testing & Debugging](#testing--debugging)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [Roadmap](#roadmap)
11. [Troubleshooting & FAQ](#troubleshooting--faq)
12. [License & Credits](#license--credits)

## Overview

Simon Says is a simple, interactive memory game built with **plain HTML, CSS, and JavaScript**.  
When the page loads, press any key to start. The game will flash a random color button; repeat the sequence by clicking the buttons in the same order. Each successful round adds a new color to the sequence, increasing the difficulty. A mistake ends the game and displays your final score.

**Why use this project?**

- **Zero dependencies** – runs in any modern browser.
- **Educational** – great for learning DOM manipulation, event handling, and basic game loops.
- **Extensible** – easy to add new colors, sound effects, or a high-score leaderboard.

## Features

| Feature                         | Description       
| ---          
| **Color Sequence**             | The game generates a random sequence of colors that the player must repeat.
| **Level System**               | Each successful round adds a new color to the sequence, increasing the difficulty.
| **Game Over Screen**           | The game displays the player's final score when they make a mistake.
| **Restart Mechanism**         | The player can restart the game by pressing any key after a game over.
| **Responsive Design**         | The game is optimized for various screen sizes and devices.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **No dependencies or frameworks** – keeping it lightweight and easy to understand.

## Architecture

The game is structured around the following components:

- `index.html`: The main entry point of the game, containing the HTML structure and linking to the CSS and JavaScript files.
- `style.css`: Defines the visual styling and layout of the game.
- `app.js`: Contains the game logic, handling user input, generating the color sequence, and updating the game state.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari)
- A code editor or IDE (optional, for modifying the code)

### Installation

1. Clone the repository: `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Open the `index.html` file in a web browser

### Running the Game

1. Press any key to start the game.
2. Repeat the color sequence by clicking the buttons in the same order.
3. The game will add a new color to the sequence each round, increasing the difficulty.
4. If you make a mistake, the game will display your final score and allow you to restart.

## Usage

- **Starting the game**: Press any key to begin.
- **Playing the game**: Click the buttons in the same order as the flashed sequence.
- **Restarting the game**: Press any key after a game over.

## Development

### Running a Local Dev Server

1. Install a local development server (e.g., `live-server`) using npm: `npm install -g live-server`
2. Navigate to the project directory: `cd Simon-Says`
3. Start the development server: `live-server`

### Testing & Debugging

- **Console logs**: Use the browser's developer tools to inspect console logs and debug the game logic.
- **DOM inspection**: Use the browser's developer tools to inspect the HTML structure and CSS styles.

## Deployment

- **GitHub Pages**: Host the game on GitHub Pages for easy sharing and access.
- **Custom deployment**: Deploy the game to a custom server or hosting platform.

## Contributing

- **Fork the repository**: Create a fork of the Simon Says repository on GitHub.
- **Create a new branch**: Create a new branch for your feature or bug fix.
- **Submit a pull request**: Submit a pull request with your changes and a brief description.

## Roadmap

- **Add sound effects**: Implement sound effects for button clicks and game events.
- **High-score leaderboard**: Create a leaderboard to store and display high scores.
- **New game modes**: Introduce new game modes, such as a timed mode or a mode with multiple sequences.

## Troubleshooting & FAQ

- **Game not starting**: Ensure that you have pressed a key to start the game.
- **Game not responding**: Check that you have the latest version of the game and that your browser is up-to-date.

## License & Credits

- **License**: [MIT License](https://github.com/SudeepKagi/Simon-Says/blob/main/LICENSE)
- **Credits**: [Sudeep Kagi](https://github.com/SudeepKagi) - Creator and maintainer of the Simon Says game.