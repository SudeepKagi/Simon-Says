# Simon Says 🎮
![GitHub last commit](https://img.shields.io/github/last-commit/SudeepKagi/Simon-Says) ![License](https://img.shields.io/github/license/SudeepKagi/Simon-Says) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=F7DF1E)

> **A lightweight, browser‑only implementation of the classic “Simon Says” memory game.**  
> Play, test your memory, and watch the colors flash in an ever‑growing sequence.

---

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

---

## Overview
Simon Says is a simple, interactive memory game built with **plain HTML, CSS, and JavaScript**.  
When the page loads, press any key to start. The game will flash a random color button; repeat the sequence by clicking the buttons in the same order. Each successful round adds a new color to the sequence, increasing the difficulty. A mistake ends the game and displays your final score.

**Why use this project?**  
- **Zero dependencies** – runs in any modern browser.  
- **Educational** – great for learning DOM manipulation, event handling, and basic game loops.  
- **Extensible** – easy to add new colors, sound effects, or a high‑score leaderboard.

---

## Features
| Feature | Description | Status |
|---------|-------------|--------|
| **Dynamic sequence generation** | Randomly selects a new color each level. | ✅ Stable |
| **Visual feedback** | Buttons flash on game turn; background flashes on failure. | ✅ Stable |
| **Score tracking** | Displays current level and final score on game over. | ✅ Stable |
| **Responsive layout** | Works on desktop and mobile browsers. | ✅ Stable |
| **Keyboard start** | Press any key to begin or restart. | ✅ Stable |
| **Extensible architecture** | Clear separation of game logic (`app.js`) and UI (`index.html`, `style.css`). | ✅ Stable |
| **Future‑ready** | Hooks ready for sound effects, high‑score persistence, or multiplayer mode. | 🟡 Planned |

---

## Tech Stack
| Layer | Technology | Reason |
|-------|------------|--------|
| **Markup** | HTML5 | Semantic structure, easy to extend. |
| **Styling** | CSS3 (Flexbox) | Simple responsive layout, flash animations. |
| **Logic** | Vanilla JavaScript (ES6) | No build step, runs directly in the browser. |
| **Version Control** | Git + GitHub | Collaboration & CI. |
| **Optional Dev Server** | `live-server` (npm) or any static file server | Quick hot‑reload while developing. |

---

## Architecture
```
Simon-Says/
├─ index.html      ← Main page, button markup, heading
├─ style.css       ← Visual styling, flash animations
├─ app.js          ← Game state, event listeners, UI updates
└─ README.md       ← Documentation (this file)
```

- **`index.html`** defines four colored buttons (`pink`, `blue`, `yellow`, `green`) and a heading (`<h4>`).  
- **`style.css`** provides the layout, button colors, and two CSS classes (`flash` for button flash, `bg-flash` for background flash).  
- **`app.js`** holds the entire game engine:  
  - **State variables** (`userSeq`, `gameSeq`, `level`, `started`).  
  - **Core functions**: `levelUp()`, `btnFlash()`, `checker()`, `reset()`.  
  - **Event wiring**: keypress to start, click listeners on each button.  

Data flow:  
1. **Start** → `levelUp()` creates a new random color, pushes to `gameSeq`, flashes the button.  
2. **User clicks** → `btnPress()` records the choice, calls `checker()`.  
3. **Checker** validates the user input; on success, advances level; on failure, shows “Game over” and resets.

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).  
- (Optional) Node.js **≥ 14** if you want to run a local static server.

### Installation
```bash
# 1️⃣ Clone the repository
git clone https://github.com/SudeepKagi/Simon-Says.git
cd Simon-Says

# 2️⃣ (Optional) Install a lightweight dev server
npm install -g live-server   # or use any static server you prefer
```

### Running the Game
#### Option A – Open directly
```bash
# On macOS / Linux
open index.html

# On Windows
start index.html
```

#### Option B – Use a local dev server (recommended for live reload)
```bash
live-server .
# The browser will automatically open at http://127.0.0.1:8080
```

You should see a page with four colored buttons and a heading that reads **“Press any key to start”**.

---

## Usage

1. **Start** – Press any key on the keyboard.  
2. **Watch** – The game flashes one button (e.g., pink).  
3. **Repeat** – Click the same button.  
4. **Progress** – If correct, a new random button is added to the sequence.  
5. **Fail** – A wrong click triggers a red background flash and displays *Game over! Your score: X*. Press any key to restart.

### Code Example – Adding a New Color

If you want to extend the game with a new **orange** button:

1. **HTML** – Add the button:
   ```html
   <div id="orange" class="btns"></div>
   ```
2. **CSS** – Define its color:
   ```css
   #orange { background: orange; }
   ```
3. **JS** – Append to the `btns` array:
   ```javascript
   let btns = ["pink","blue","yellow","green","orange"];
   ```
4. The rest of the logic automatically supports the new color.

---

## Development

### Running a Local Dev Server
If you prefer not to install `live-server` globally:

```bash
# Using npx (no global install)
npx serve .
```

### Testing & Debugging
- Open the browser’s DevTools (F12) → **Console** to view `console.log` output of `gameSeq` and `userSeq`.  
- Breakpoints can be set inside `app.js` to step through `levelUp`, `checker`, and `reset`.  
- CSS animations can be tweaked in `style.css` under the `.flash` and `.bg-flash` classes.

### Code Style Guidelines
- Use **ES6** syntax (`let`, `const`, arrow functions where appropriate).  
- Keep functions **single‑purpose** and well‑named.  
- Add comments for any new feature or complex logic.

---

## Deployment

The game is a static site – you can host it anywhere that serves static files:

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | 1. Push to `main`. 2. In repo settings enable *GitHub Pages* from the `root` folder. |
| **Netlify** | 1. Connect the repo. 2. Set build command to `npm run build` (if you add a build step) or leave blank. 3. Publish directory = `/`. |
| **Vercel** | Same as Netlify – just import the repo and deploy. |
| **Custom Server** | Serve the folder with Nginx, Apache, or any static file server. |

**Performance tip:** Minify `style.css` and `app.js` for production (e.g., using `terser` or `cssnano`).

---

## Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository.  
2. **Create a branch** for your feature or bug‑fix:  
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. **Commit** with clear messages:  
   ```bash
   git commit -m "feat: add sound effects on button flash"
   ```
4. **Push** to your fork and open a **Pull Request**.  
5. Ensure the PR description includes:
   - What the change does.  
   - Any new dependencies.  
   - Screenshots (if UI changes).  

### Code Review Guidelines
- No linting errors (use `eslint` if you add it).  
- All new functionality must be **tested manually** and documented in the README.  
- Keep the repository **dependency‑free** unless a strong case is made.

---

## Roadmap

| Milestone | Description | Status |
|-----------|-------------|--------|
| **v1.1** | Add sound effects for each button flash. | 🟡 Planned |
| **v1.2** | Persist high scores using `localStorage`. | 🟡 Planned |
| **v1.3** | Add difficulty settings (speed, number of colors). | 🟡 Planned |
| **v2.0** | Turn into a reusable npm package (`simon-says-game`). | 🟡 Long‑term |

Feel free to suggest other ideas via **Issues**.

---

## Troubleshooting & FAQ

| Issue | Solution |
|-------|----------|
| **Game doesn’t start after keypress** | Ensure the page is focused (click anywhere on the page) and that no other element captures the key event. |
| **Buttons don’t flash** | Verify that `style.css` is correctly linked in `index.html`. |
| **Console shows `Uncaught TypeError: Cannot read property 'classList' of null`** | The button ID in the script doesn’t match the HTML element. Check the `btns` array and the `id` attributes. |
| **Game restarts immediately after a wrong move** | The `reset()` function is called correctly; the issue is likely due to a stray `keypress` event still being listened to. Press a key only after the “Game over” message disappears. |

For further help, open an **Issue** or contact the repository maintainer.

---

## License & Credits

**License:** MIT © 2024 Sudeep Kagi  
See the [LICENSE](LICENSE) file for full details.

### Credits
- **Original Simon game concept** – Atari/Milton Bradley.  
- **Color palette & flash animation** – handcrafted CSS.  
- **README generation** – Inspired by the *RepoScribe* project (original README template).  

---