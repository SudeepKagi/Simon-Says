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
| **Game Over Screen**           | Displays the player's final score when they make a mistake.
| **Keyboard Start**             | The game starts when the player presses any key.
| **Button Clicks**              | The player can repeat the sequence by clicking the buttons in the same order.

## Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript
* **No dependencies** – runs in any modern browser

## Architecture

The game is built using a simple architecture:

* **index.html**: The main HTML file that contains the game layout and buttons.
* **style.css**: The CSS file that styles the game layout and buttons.
* **app.js**: The JavaScript file that contains the game logic and event handlers.

## Getting Started

### Prerequisites

* A modern web browser (e.g. Google Chrome, Mozilla Firefox)

### Installation

1. Clone the repository using `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Open the `index.html` file in a web browser

### Running the Game

1. Press any key to start the game
2. Repeat the sequence by clicking the buttons in the same order
3. Try to beat your high score!

## Usage

* Press any key to start the game
* Click the buttons to repeat the sequence
* Try to beat your high score!

## Development

### Running a Local Dev Server

1. Install a local dev server (e.g. `live-server`) using `npm install -g live-server`
2. Run the dev server using `live-server` in the project directory
3. Open the game in a web browser at `http://localhost:8080`

### Testing & Debugging

* Use the browser's developer tools to debug the game
* Test the game in different browsers to ensure compatibility

## Deployment

* Deploy the game to a web server (e.g. GitHub Pages)
* Update the `index.html` file to point to the deployed location

## Contributing

* Fork the repository using `git fork https://github.com/SudeepKagi/Simon-Says.git`
* Make changes to the code and commit them using `git commit -m "Your changes"`
* Create a pull request to merge your changes into the main repository

## Roadmap

* Add new colors to the sequence
* Implement a high-score leaderboard
* Add sound effects to the game

## Troubleshooting & FAQ

* Q: The game doesn't start when I press a key. A: Make sure you are using a modern web browser.
* Q: The game is too easy/hard. A: Try adjusting the sequence length or adding new colors to the sequence.

## License & Credits

* The game is licensed under the [MIT License](https://github.com/SudeepKagi/Simon-Says/blob/main/LICENSE)
* Credits to [Sudeep Kagi](https://github.com/SudeepKagi) for creating the game.