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
| Color Sequence                 | The game generates a random sequence of colors that the player must repeat.
| Leveling System                 | Each successful round increases the difficulty by adding a new color to the sequence.
| User Input Handling             | The game handles user input through keyboard presses and mouse clicks.
| Game Over Detection             | The game detects when the player makes a mistake and ends the game.
| Score Display                   | The game displays the player's final score when the game ends.

## Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript
* **No dependencies or frameworks** – pure vanilla JavaScript

## Architecture

The game is built using a simple, modular architecture:

* **index.html**: The main entry point of the game, containing the HTML structure and links to the CSS and JavaScript files.
* **style.css**: The CSS file containing the game's styles and layout.
* **app.js**: The JavaScript file containing the game's logic and functionality.

## Getting Started

### Prerequisites

* A modern web browser (e.g., Google Chrome, Mozilla Firefox)
* A code editor or IDE (e.g., Visual Studio Code, Sublime Text)

### Installation

1. Clone the repository using Git: `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Open the `index.html` file in a web browser

### Running the Game

1. Press any key to start the game
2. Repeat the color sequence by clicking the buttons in the same order
3. Try to beat your high score!

## Usage

The game is easy to use:

1. Open the `index.html` file in a web browser
2. Press any key to start the game
3. Follow the on-screen instructions to play the game

## Development

### Running a Local Dev Server

To run a local development server, you can use a tool like `live-server`:

1. Install `live-server` using npm: `npm install -g live-server`
2. Navigate to the project directory: `cd Simon-Says`
3. Start the development server: `live-server`

### Testing & Debugging

The game uses the browser's console for debugging. You can use the browser's developer tools to inspect the game's state and debug any issues.

## Deployment

To deploy the game, you can simply upload the `index.html`, `style.css`, and `app.js` files to a web server.

## Contributing

Contributions are welcome! To contribute to the project, please follow these steps:

1. Fork the repository using Git: `git fork https://github.com/SudeepKagi/Simon-Says.git`
2. Create a new branch: `git branch feature/new-feature`
3. Make your changes and commit them: `git commit -m "Added new feature"`
4. Push your changes to the remote repository: `git push origin feature/new-feature`
5. Create a pull request to merge your changes into the main repository

## Roadmap

* Add sound effects for button presses and game events
* Implement a high-score leaderboard
* Add support for multiple game modes (e.g., timed mode, endless mode)

## Troubleshooting & FAQ

* Q: The game is not working in my browser. What should I do?
A: Try updating your browser to the latest version or switching to a different browser.
* Q: I found a bug in the game. How can I report it?
A: Please create an issue on the GitHub repository with a detailed description of the bug.

## License & Credits

The game is licensed under the MIT License. Credits go to the original creator of the Simon Says game, as well as the contributors to this open-source implementation.