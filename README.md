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

<<<<<<< HEAD
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
=======
| Feature                         | Description       
| ---          
| Color Sequence                 | The game generates a random color sequence that the player must repeat.
| Level System                    | Each successful round adds a new color to the sequence, increasing the difficulty.
| Game Over Detection             | The game detects when the player makes a mistake and ends the game.
| Score Display                   | The game displays the player's final score when the game ends.
| Restart Mechanism               | The game can be restarted by pressing any key after the game ends.

## Tech Stack

* **HTML5**: Used for structuring the game's UI.
* **CSS3**: Used for styling the game's UI.
* **JavaScript**: Used for implementing the game's logic.

## Architecture

The game's architecture is simple and straightforward. The game's logic is implemented in the `app.js` file, which handles user input, generates the color sequence, and updates the game state. The game's UI is defined in the `index.html` file, which includes the buttons and display elements. The game's styles are defined in the `style.css` file.
>>>>>>> e7673ea06dbc5c671f761f56e959a7f5fbcd5018

## Getting Started

### Prerequisites

<<<<<<< HEAD
- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor or IDE (e.g., Visual Studio Code, Sublime Text)
=======
* A modern web browser (e.g. Google Chrome, Mozilla Firefox, Safari).
* A code editor or IDE (e.g. Visual Studio Code, Sublime Text).
>>>>>>> e7673ea06dbc5c671f761f56e959a7f5fbcd5018

### Installation

1. Clone the repository using Git: `git clone https://github.com/SudeepKagi/Simon-Says.git`.
2. Open the `index.html` file in a web browser to run the game.

### Running the Game

1. Open the `index.html` file in a web browser.
2. Press any key to start the game.
3. Repeat the color sequence by clicking the buttons in the same order.
4. The game will end when you make a mistake, and your final score will be displayed.

## Usage

The game is easy to use. Simply open the `index.html` file in a web browser, press any key to start, and repeat the color sequence by clicking the buttons in the same order.

## Development

### Running a Local Dev Server

To run a local dev server, you can use a tool like `live-server` or `http-server`. Here's an example of how to use `live-server`:

1. Install `live-server` using npm: `npm install live-server`.
2. Run `live-server` in the project directory: `live-server`.
3. Open `http://localhost:8080` in a web browser to access the game.

### Testing & Debugging

To test and debug the game, you can use the browser's developer tools. Here's an example of how to use the Chrome DevTools:

1. Open the `index.html` file in Google Chrome.
2. Press F12 to open the Chrome DevTools.
3. Use the Console tab to view error messages and debug the game.
4. Use the Elements tab to inspect the game's UI and debug CSS issues.

## Deployment

To deploy the game, you can simply upload the `index.html`, `app.js`, and `style.css` files to a web server. Here's an example of how to deploy the game to GitHub Pages:

1. Create a new repository on GitHub.
2. Upload the `index.html`, `app.js`, and `style.css` files to the repository.
3. Go to the repository settings and enable GitHub Pages.
4. Set the GitHub Pages branch to the main branch.
5. The game will be deployed to `https://your-username.github.io/your-repo-name`.

## Contributing

To contribute to the game, you can fork the repository and submit a pull request. Here's an example of how to contribute:

1. Fork the repository using GitHub.
2. Clone the forked repository using Git: `git clone https://github.com/your-username/Simon-Says.git`.
3. Make changes to the code and commit them using Git: `git commit -m "Your changes"`.
4. Push the changes to the forked repository using Git: `git push origin main`.
5. Submit a pull request to the original repository.

## Roadmap

<<<<<<< HEAD
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
=======
The game is currently in its initial version. Here are some potential features that could be added in the future:

* **Sound effects**: Add sound effects to the game to make it more engaging.
* **High-score leaderboard**: Add a high-score leaderboard to the game to track players' progress.
* **New colors**: Add new colors to the game to increase the difficulty.
* **Game modes**: Add new game modes to the game, such as a timed mode or a mode with multiple sequences.

## Troubleshooting & FAQ

Here are some common issues and solutions:

* **Game not working**: Make sure you have a modern web browser and that the `index.html` file is loaded correctly.
* **Game crashing**: Make sure you have the latest version of the game and that your browser is up to date.

## License & Credits

The game is licensed under the MIT License. Here are the credits:

* **Author**: Sudeep Kagi
* **Contributors**: None
* **License**: MIT License
>>>>>>> e7673ea06dbc5c671f761f56e959a7f5fbcd5018
