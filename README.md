![Oyun Ekran Görüntüsü](https://github.com/sezaras85/falling-object-game/blob/main/succinct%20pic.jpg?raw=true)
![Oyun Ekran Görüntüsü](https://github.com/sezaras85/falling-object-game/blob/main/game2.png?raw=true)




# 🎮 Falling Object Catch Game  

Falling Object Catch Game is a fun and interactive web-based game where players catch falling objects to score points. The game features **SP1 Zero-Knowledge Proof (ZKP) integration**, ensuring that scores can be verified securely and transparently.
Play the game here: https://succinctlabs.netlify.app/

The game is **hosted on Netlify**, allowing players to access it **24/7** without requiring any additional setup.

## ✨ Features  
✅ Catch falling objects to score points  
✅ **SP1 Zero-Knowledge Proof** integration for secure score verification  
✅ **24/7 availability** via Netlify hosting  
✅ Lightweight, fast, and easy to play  



## 🛠️ Technologies Used  
- **HTML5** - Structure of the game  
- **CSS3** - Styling and layout  
- **JavaScript** - Game logic and interaction  
- **SP1** - Zero-Knowledge Proof (ZKP) based score verification  
- **Netlify** - Hosting for global access  



## 📌 Requirements  

Before setting up the project, ensure you have the following installed on your system:

- **Git** → [Download & Install](https://git-scm.com/downloads)  
- **Rust & Cargo** → [Install Rust](https://www.rust-lang.org/tools/install)  
- **SP1** (Zero-Knowledge Proof system)  
- **Netlify account** (for deployment)  



## 📥 Clone the Repository  
To get started, clone this repository to your local machine:  

```bash
git clone https://github.com/sezaras85/falling-object-game.git
cd falling-object-game
```

---

## ⚙️ Install SP1  
SP1 is required for score verification. Follow these steps to install it on **Ubuntu**:

```bash
curl -L https://sp1up.succinct.xyz | bash
```

Verify that SP1 is installed correctly:

```bash
sp1 --version
```

---

## 🔗 SP1 Integration  

This game uses **SP1** to prove and verify scores using **zero-knowledge proofs**.

### 1️⃣ **Create a New SP1 Program**  
Inside your project folder, create a new SP1 program:

```bash
sp1 new confirm_score
cd confirm_score
```

Update `Cargo.toml` to include the SP1 SDK:

```toml
[dependencies]
sp1-sdk = "0.1"
```

Edit `src/main.rs` and add the SP1 proof logic:

```rust
use sp1_sdk::{prove, verify};

fn main() {
    let score: u32 = 100; // Replace with actual game score
    let proof = prove(score);
    assert!(verify(&proof, score));

    println!("Score proof generated: {:?}", proof);
}
```

Then, build the SP1 program:

```bash
cargo build --release --target=wasm32-unknown-unknown
```
```bash
cd /root/falling-object-game/backend
nano server.js
```

```bash
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
```bash
npm install express cors
node server.js
```




---

### 2️⃣ **Connect the Game to SP1**  
Modify `index.html` to add a button:

```html
<button id="sp1-confirm-score">SP1 Confirm Score</button>
```

Create a `sp1.js` file and add:

```javascript
document.getElementById("sp1-confirm-score").addEventListener("click", async function () {
    let score = getFinalScore();

    let response = await fetch("http://localhost:3000/prove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score })
    });

    let result = await response.json();
    console.log("SP1 Proof:", result.proof);
    alert("SP1 Proof Generated!");
});

function getFinalScore() {
    return 100; // Replace with actual game score logic
}
```

---

### 3️⃣ **Start the SP1 Server**  
Run the SP1 server in Ubuntu:

```bash
sp1 serve --port 3000
```

Now, when you click **"SP1 Confirm Score"**, the game will verify the score with SP1!

---

## 🌍 Deploy on Netlify  

This game is **hosted on Netlify**, making it accessible to anyone, anytime!  

### 🚀 Steps to Deploy:  
1️⃣ Log in to **[Netlify](https://www.netlify.com/)**  
2️⃣ Create a new project and **connect it to your GitHub repository**  
3️⃣ Choose the `main` branch and click **Deploy**  

After deployment, the game will be available **24/7** at:  
🔗 **[succinctlabs.netlify.app](https://succinctlabs.netlify.app/)**  

---

## 🎯 Conclusion  
This project showcases how **SP1 Zero-Knowledge Proofs** can be used for **secure score verification** in games.  

Play the game here: **[(https://succinctlabs.netlify.app/))** 🚀  
```

---

