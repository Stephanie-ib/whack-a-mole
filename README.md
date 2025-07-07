# 🐹 Whack-a-Mole Game (React)

A fun, interactive **Whack-a-Mole** game built using **React**! The game lets users choose difficulty levels, track high scores per level, and enjoy animations and sound effects — all wrapped in a modern, sleek interface.

---

## 🚀 Features

- 🎮 Click "Start" to begin the game and whack the moles before time runs out.
- ⏳ 30-second countdown timer.
- 🔁 Restart the game anytime.
- 🔊 Sound effects on every hit.
- 📈 Tracks and stores high scores **per difficulty level** (Easy, Medium, Hard).
- ⚡️ Responsive design for desktop and mobile.
- 🖱️ Club/hammer animation that follows your clicks.
- ↩️ Back button to exit to the home screen at any time.

---

## 📂 Folder Structure

```

public/
├── images/
│   ├── play-solid.svg
│   └── clock-rotate-left-solid.svg
├── sounds/
│   ├── click.wav
│   ├── type\_sound1.wav
│   └── type\_sound2.wav

src/
├── components/
│   ├── MoleHole.jsx
│   ├── Message.jsx
│   └── Club.jsx
├── pages/
│   └── Game.jsx
├── App.jsx
├── index.js
├── index.css

```

---

## 🛠️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/whack-a-mole-react.git
cd whack-a-mole-react
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The app will run on `http://localhost:3000`

---

## 🎯 How to Play

1. On the home page, choose a difficulty level.
2. Click the `▶` Start button.
3. Whack the moles (click them) when they appear in the holes.
4. Your score increases by +1 for every successful hit.
5. When time runs out, your score is displayed. If it's a new high score, it's saved!

---

## 🧠 Technologies Used

- **React.js**
- **React Router DOM**
- **HTML5 & CSS3**
- **JavaScript (ES6+)**

---

## ✨ UI & UX Highlights

- Custom animated club follows your cursor while playing.
- Responsive grid layout and adaptive design.
- Smooth hover transitions and sound feedback.
- Toggle-able Start/Restart buttons.
- Each difficulty has its own high score (stored in `localStorage`).

---

## 📌 Todo / Improvements

- 🎨 Add animated mole images
- 🔈 Toggle background music
- ⏳ Countdown before game starts
- 📱 Improve mobile UI even more
- 📊 Add leaderboard or multiplayer mode

---

## 📄 License

MIT License – Feel free to use, modify, and share!

---

## 🙌 Acknowledgments

Thanks to:

- [Emojicdn.elk.sh](https://emojicdn.elk.sh) for emoji image rendering.
- Open Source icon sets used from [Icon8](https://icons8.com/).

---

## 🧑‍💻 Built by

**Your Name**
React Developer & JavaScript Enthusiast 💻
[LinkedIn](https://linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)

---
