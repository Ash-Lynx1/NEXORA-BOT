<p align="center">
  <img src="https://files.catbox.moe/0ncdrw.jpg" alt="NΞXØRΛ-BOT Banner" width="100%" />
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=28&pause=1000&center=true&vCenter=true&width=650&lines=NΞXØRΛ-BOT+for+Telegram;Fast%2C+Modular%2C+Powerful;AI%2C+Media%2C+Group+Admin+features" alt="Typing SVG" />
</h1>

<p align="center">
  <a href="https://t.me/tg_nexorabot"><img src="https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram" alt="Telegram Bot" /></a>
  <img src="https://img.shields.io/github/license/Ash-Lynx1/NEXORA-BOT?color=green" alt="License" />
  <img src="https://img.shields.io/github/stars/Ash-Lynx1/NEXORA-BOT?style=social" alt="Stars" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=2000&pause=600&color=FEE75C&center=true&vCenter=true&width=600&lines=AI+Commands;+Media+Download;+Group+Management;+Admin+Features" alt="Typing SVG Features" />
</p>

---

## ⚙️ Installation — Termux

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+1%3A+Update+Termux+and+Install+Node.js" alt="Typing SVG" />
</div>

```bash
pkg update -y
```
```bash
pkg upgrade -y
```
```bash
pkg install nodejs -y
```
```bash
pkg install git -y
```

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+2%3A+Clone+the+Repository" alt="NEXORA BOT" />
</div>

```bash
git clone https://github.com/Ash-Lynx1/NEXORA-BOT.git
```
```bash
cd NEXORA-BOT
```

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+3%3A+Install+Dependencies" alt="Typing SVG" />
</div>

```bash
npm install
```

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+4%3A+Configure+.env+File" alt="Typing SVG" />
</div>

```bash
cp .env.example .env
```
```bash
nano .env
```

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+5%3A+Start+the+Bot" alt="Typing SVG" />
</div>

```bash
node index.js
```

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+6%3A+Keep+Running+in+Background" alt="Typing SVG" />
</div>

```bash
termux-wake-lock
```
```bash
nohup node index.js &
```

> **termux-wake-lock** prevents the device from sleeping.  
> **nohup node index.js &** runs the bot in background.

---

## ⚙️ Deployment — Render

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+1%3A+Create+Web+Service+on+Render" alt="Typing SVG" />
</div>

- Go to [Render](https://render.com) and create a new **Web Service**.

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+2%3A+Connect+Your+GitHub+Repository" alt="Typing SVG" />
</div>

- Connect your GitHub repository.

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+3%3A+Set+Environment" alt="Typing SVG" />
</div>

- **Environment**: `Node`
- **Build Command**: 
```bash
npm install
```
- **Start Command**: 
```bash
node index.js
```
- **Environment Variables**: Copy all variables from `.env`

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&duration=600&pause=800&color=FEE75C&width=600&center=true&lines=Step+4%3A+Deploy" alt="Typing SVG" />
</div>

- Deploy — Render keeps your bot **always online**!

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=19&pause=700&color=FEE75C&width=600&center=true&lines=Ready+to+supercharge+your+Telegram+groups%3F;Try+NΞXØRΛ-BOT+now!" alt="Typing SVG End" />
</p>
