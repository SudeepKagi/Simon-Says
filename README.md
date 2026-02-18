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
| ---                             | ---              
| Color Sequence                  | Randomly generated color sequence to repeat
| Button Flashing                 | Visual cue for the player to repeat the sequence
| Scorekeeping                     | Displays the player's current level and final score
| Keyboard Start                  | Press any key to start the game
| Mouse Input                     | Click the buttons to repeat the sequence

## Tech Stack

- **HTML5**: For structuring the game layout
- **CSS3**: For styling the game elements and animations
- **JavaScript**: For handling game logic, events, and DOM manipulation

## Architecture

The game is built using a simple, modular architecture:

- `index.html`: The main game layout and structure
- `style.css`: Styles and animations for the game elements
- `app.js`: Game logic, event handling, and DOM manipulation

## Getting Started

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor or IDE (e.g., Visual Studio Code, Sublime Text)

### Installation

1. Clone the repository: `git clone https://github.com/SudeepKagi/Simon-Says.git`
2. Open the `index.html` file in a web browser

### Running the Game

1. Press any key to start the game
2. Repeat the color sequence by clicking the buttons in the same order
3. Try to beat your high score!

## Usage

- Press any key to start the game
- Click the buttons to repeat the sequence
- Try to beat your high score!

## Development

### Running a Local Dev Server

1. Install a local dev server (e.g., `live-server`)
2. Run the dev server: `live-server`
3. Open the game in a web browser: `http://localhost:8080`

### Testing & Debugging

- Use the browser's developer tools to inspect and debug the game
- Test the game in different browsers and devices

## Deployment

- Deploy the game to a web server or hosting platform (e.g., GitHub Pages, Netlify)
- Update the `index.html` file to point to the deployed location

## Contributing

- Fork the repository: `git fork https://github.com/SudeepKagi/Simon-Says.git`
- Create a new branch: `git branch feature/new-feature`
- Commit your changes: `git commit -m "Added new feature"`
- Open a pull request: `git push origin feature/new-feature`

## Roadmap

- Add sound effects for button clicks and game events
- Implement a high-score leaderboard
- Add new colors and game modes

## Troubleshooting & FAQ

- Q: The game doesn't start when I press a key.
A: Check that you have pressed a key and that the game is loaded correctly.
- Q: The game is too easy/hard.
A: Try adjusting the game speed or adding more colors to the sequence.

## License & Credits

- **License**: [MIT License](https://github.com/SudeepKagi/Simon-Says/blob/master/LICENSE)
- **Credits**: [Sudeep Kagi](https://github.com/SudeepKagi) - Creator and maintainer of the project