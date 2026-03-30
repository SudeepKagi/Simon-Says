# Simon Says

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

| Feature        | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| Color Sequence | The game generates a random sequence of colors that the player must repeat.        |
| Level System   | Each successful round adds a new color to the sequence, increasing the difficulty. |
| Score Display  | The game displays the player's final score when they make a mistake.               |
| Keyboard Start | The game starts when the player presses any key.                                   |
| Color Buttons  | The game features four color buttons: pink, blue, yellow, and green.               |

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **No dependencies** – runs in any modern browser

## Architecture

The game is built using a simple architecture:

- **index.html**: The main HTML file that contains the game's structure and layout.
- **style.css**: The CSS file that styles the game's elements and adds visual effects.
- **app.js**: The JavaScript file that contains the game's logic and functionality.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor or IDE (e.g., Visual Studio Code, Sublime Text)

### Installation

1. Clone the repository using Git: `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Open the project folder in your code editor or IDE
3. Open the `index.html` file in a web browser to run the game

### Running the Game

1. Open the `index.html` file in a web browser
2. Press any key to start the game
3. Repeat the color sequence by clicking the buttons in the same order
4. Try to beat your high score!

## Usage

1. Start the game by pressing any key
2. Repeat the color sequence by clicking the buttons in the same order
3. Try to beat your high score!
4. If you make a mistake, the game will display your final score and reset

## Development

### Running a Local Dev Server

1. Install a local dev server (e.g., `live-server`) using npm: `npm install -g live-server`
2. Navigate to the project folder in your terminal or command prompt
3. Run the dev server: `live-server`
4. Open the `index.html` file in a web browser to run the game

### Testing & Debugging

1. Use the browser's developer tools to inspect and debug the game's elements and functionality
2. Test the game in different browsers and devices to ensure compatibility

## Deployment

1. Clone the repository using Git: `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Navigate to the project folder in your terminal or command prompt
3. Run the command: `git push origin main` to deploy the game to GitHub Pages

## Contributing

1. Fork the repository using GitHub
2. Create a new branch for your feature or bug fix
3. Commit your changes and push them to your fork
4. Create a pull request to merge your changes into the main branch

## Roadmap

- Add sound effects for button clicks and game events
- Implement a high-score leaderboard
- Add new colors and game modes
- Improve game performance and optimization

## Troubleshooting & FAQ

- Q: The game doesn't start when I press a key.
  A: Make sure you have the latest version of the game and that your browser supports the game's functionality.
- Q: The game is too easy/hard.
  A: Try adjusting the game's difficulty by adding or removing colors from the sequence.

## License & Credits

- This project is licensed under the MIT License
- Credits: Sudeep Kagi (author and maintainer)
