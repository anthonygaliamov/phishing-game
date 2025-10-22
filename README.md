# 🕵️ Phishing Game
A simple Node.js app that runs a browser-based phishing detection game with an Outlook-style interface.

## 🚀 Setup

### Requirements

```bash
node -v
npm -v
```

### Install
```bash
# Navigate to the project folder
cd phishing-game

# Install dependencies
npm install
```

### ▶️ Run the Game

```bash
npm start
```

Then open your browser at:

http://localhost:3000

## 🧩 How to play

1. Click an email in the left pane to open it.
1. Read the message in the reader pane (links are non-navigable in the demo).
1. Choose Mark as Phishing or Mark as Legitimate.
1. Score updates in the sidebar (e.g. 3/10). Get all 10 correct to unlock the bonus challenge.
1. Use Next to move to the next unanswered email.