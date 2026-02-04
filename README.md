# Simon Says 🎮  
**A colorful, browser‑based memory game built with vanilla HTML, CSS & JavaScript.**  

[![License](https://img.shields.io/github/license/SudeepKagi/Simon-Says)](LICENSE)  
[![Version](https://img.shields.io/github/v/tag/SudeepKagi/Simon-Says?label=version)](https://github.com/SudeepKagi/Simon-Says/releases)  
[![Stars](https://img.shields.io/github/stars/SudeepKagi/Simon-Says)](https://github.com/SudeepKagi/Simon-Says/stargazers)  
[![Issues](https://img.shields.io/github/issues/SudeepKagi/Simon-Says)](https://github.com/SudeepKagi/Simon-Says/issues)  

---  

## Overview  

Simon Says is a classic memory challenge where the player must repeat an ever‑growing sequence of colored tiles.  
- **Instant start** – press any key to begin.  
- **Progressive difficulty** – each successful round adds a new random tile to the pattern.  
- **Immediate feedback** – flashing tiles for correct moves and a dramatic background flash on failure.  

Target audience: anyone looking for a quick, fun brain‑teaser that runs in any modern web browser.  

Current version: **v1.0.0** (stable).  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| Classic gameplay | Replicates the original Simon electronic game. | ✅ Stable |
| Neon UI | Soft‑glow buttons with a dark background for a modern look. | ✅ Stable |
| Level counter | Shows the current level/score at the top of the screen. | ✅ Stable |
| Tile flash animation | Buttons flash when part of the sequence or when clicked. | ✅ Stable |
| Game‑over background flash | Red flash effect signals a mistake. | ✅ Stable |
| Responsive layout | Works on desktop browsers; scales gracefully on tablets. | ✅ Stable |
| Keyboard start | Press any key to start or restart the game. | ✅ Stable |

---  

## Tech Stack  

| Layer | Technology | Reason |
|-------|------------|--------|
| Markup | **HTML5** | Semantic structure, easy to host. |
| Styling | **CSS3** (Flexbox, custom properties, keyframe animations) | Provides the neon look and responsive layout. |
| Logic | **Vanilla JavaScript (ES6)** | No external dependencies; pure client‑side game engine. |
| Build / Deploy | **GitHub Pages** (optional) | Static site, zero‑config hosting. |

---  

## Architecture  

```
Simon-Says/
├─ index.html      ← Main page, loads the UI and script
├─ style.css       ← All visual styling, animations, responsive rules
├─ app.js          ← Game engine (state, sequence generation, UI interaction)
└─ README.md       ← Project documentation
```

- **`app.js`** maintains three core arrays: `gameSeq` (the generated pattern), `userSeq` (player input), and `btns` (available colors).  
- The **state machine** (`started`, `level`) drives the flow:  
  1. **Start** – any key press triggers `levelUp()`.  
  2. **Sequence generation** – a random color is appended to `gameSeq`.  
  3. **User interaction** – button clicks push to `userSeq` and invoke `checker()`.  
  4. **Validation** – `checker()` compares the two arrays; on success the next level starts, on failure the game resets.  

---  

## Getting Started  

### Prerequisites  

- A modern web browser (Chrome, Firefox, Edge, Safari) with JavaScript enabled.  
- No server‑side runtime or package manager is required.  

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/SudeepKagi/Simon-Says.git
cd Simon-Says

# 2️⃣ Open the game in your browser
#    (any of the following commands works)
open index.html               # macOS
xdg-open index.html           # Linux
start index.html              # Windows
```

Alternatively, you can download the ZIP from GitHub and double‑click `index.html`.  

### Configuration  

The project uses **environment‑free** configuration.  
If you wish to customize colors or timing, edit the constants in `app.js` or the CSS variables in `style.css`.  

---  

## Usage  

1. Open `index.html` in a browser.  
2. Press any key – the game will display **Level 1** and flash the first tile.  
3. Click the flashing tile.  
4. If correct, the level increments and a new tile is added to the sequence.  
5. Continue reproducing the full sequence.  

### Code Example – Starting a Level  

```javascript
function levelUp() {
    userSeq = [];               // reset player input
    level++;                    // advance level counter
    h4.innerHTML = `Level: ${level}`;

    // pick a random color from the button list
    const randIdx   = Math.floor(Math.random() * btns.length);
    const randColor = btns[randIdx];
    const randBtn   = document.querySelector(`#${randColor}`);

    gameSeq.push(randColor);    // store in the master sequence
    btnFlash(randBtn);          // visual cue for the player
}
```

### Visual Guide  

| Start screen | Correct move | Game over |
|--------------|--------------|-----------|
| ![Start](https://raw.githubusercontent.com/SudeepKagi/Simon-Says/main/assets/start.png) | ![Correct](https://raw.githubusercontent.com/SudeepKagi/Simon-Says/main/assets/correct.png) | ![Game Over](https://raw.githubusercontent.com/SudeepKagi/Simon-Says/main/assets/gameover.png) |

*(Replace the URLs with actual screenshots if you add them to the repo.)*  

---  

## Development  

> **Note:** The project is intentionally lightweight; there is no build step.  

| Task | Command |
|------|---------|
| Run lint (optional) | `npx eslint .` |
| Open live reload server (if you prefer) | `npx serve .` |
| Run tests (none yet) | — |

### Code Style  

- Use **ES6** syntax (`let`, `const`, arrow functions where appropriate).  
- Keep functions **single‑purpose** and well‑named (e.g., `btnFlash`, `checker`).  
- Follow the existing naming conventions (`camelCase` for variables, `PascalCase` for classes – none used).  

---  

## Deployment  

Because the app is a static site, deployment is straightforward:

1. **GitHub Pages** – enable Pages from the repository settings, select the `main` branch root.  
2. **Netlify / Vercel** – connect the repo and deploy; both automatically serve static files.  
3. **Custom server** – copy the three files (`index.html`, `style.css`, `app.js`) to any HTTP server directory.  

No environment variables or server‑side configuration are required.  

---  

## API Documentation  

*Not applicable.* The game runs entirely in the browser and does not expose a public API.  

---  

## Contributing  

We welcome contributions!  

1. **Fork** the repository.  
2. **Create a feature branch** (`git checkout -b feat/awesome-feature`).  
3. **Commit** your changes with clear messages.  
4. **Push** to your fork (`git push origin feat/awesome-feature`).  
5. Open a **Pull Request** against `main`.  

### Guidelines  

- Keep the UI consistent with the existing neon theme.  
- Add or update unit tests if you introduce new logic.  
- Update the README if you add new features or change usage.  

---  

## Troubleshooting  

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| No tiles flash on start | `app.js` not loaded | Ensure `script src="app.js"` is present in `index.html` and the file path is correct. |
| Game never progresses to next level | `btns` array length mismatch | Verify `btns` contains exactly the four color strings (`"pink","blue","yellow","green"`). |
| Background flash is missing on game over | CSS class `bg-flash` missing | Add the `.bg-flash` rule from `style.css` or re‑import the stylesheet. |
| Errors in console like `Uncaught TypeError: Cannot read property 'classList' of null` | Wrong button ID in HTML | Confirm each button element has an `id` matching its color (`id="pink"` etc.). |

For further help, open an **Issue** on GitHub with a description and screenshots.  

---  

## Roadmap  

- **Add sound effects** for each button press.  
- **High‑score persistence** using `localStorage`.  
- **Mobile‑first responsive design** (larger touch targets).  
- **Difficulty settings** (speed, number of colors).  

---  

## License & Credits  

**License:** MIT – see the [LICENSE](LICENSE) file for details.  

**Author:** Sudeep Kagi – [GitHub](https://github.com/SudeepKagi)  

**Contributors:**  
- (List of contributors will appear automatically via GitHub's contributors graph.)  

**Acknowledgments:**  
- Inspired by the classic **Simon** electronic game (by Milton Bradley).  
- UI inspiration from various neon‑style CSS tutorials.  

---  

*Happy memorizing!* 🎉  