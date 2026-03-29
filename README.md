# ⚖️ NYAAY AI — ET AI Hackathon 2026

> Legal clarity for every Indian citizen. Upload any government notice, get instant plain-language explanation in Hindi, Marathi, Bengali, Tamil, Telugu or English.

---

## 🚀 Setup in 3 Steps

### Step 1 — Install dependencies
```bash
cd nyaay-ai
npm install
```

### Step 2 — Get your FREE Groq API key
1. Go to https://console.groq.com/keys
2. Sign up (free, takes 1 minute)
3. Click "Create API Key"
4. Copy the key (starts with `gsk_`)

### Step 3 — Start the server
```bash
node server.js
```

Then open **http://localhost:3000** in your browser.

---

## ✨ Features Built

| Feature | Description |
|---|---|
| 🔴 **Risk Score Meter** | 1–10 urgency score with color-coded verdict |
| ⏰ **Live Countdown Timer** | Real-time countdown to deadline |
| 📅 **Calendar Export** | Download .ics file for any calendar app |
| 🔊 **Voice Readout** | Reads explanation aloud in selected language |
| 💬 **Follow-up Chat** | Ask questions about your specific notice |
| 📸 **OCR from Photo** | Photograph a notice — text extracted automatically |
| 🛡️ **Privacy Redaction** | PAN, Aadhaar, phone numbers auto-redacted |
| 💬 **WhatsApp Share** | Share summary with lawyer or family instantly |
| 🖨️ **Print Summary** | Clean A4 printout |
| ✍️ **Draft Reply Letter** | Auto-generate a formal reply |
| 📂 **Notice History** | Past analyses saved locally |
| 👴 **Senior Mode** | Large text, high contrast |
| 🌐 **Auto Language** | Detects browser language automatically |
| ⚡ **4 Sample Notices** | Income Tax, GST, Traffic, Property — demo ready |
| 👨‍🌾 **Suresh's Story** | Pre-loaded demo for hackathon pitch |
| 🏛️ **Your Rights** | Shows legal rights for each notice type |
| ⚠️ **Authenticity Check** | Flags suspicious or invalid notices |

## 🎤 Hackathon Demo Script

1. Click **"▶ Demo" (Suresh's Story)**
2. Enter your Groq API key
3. Select **हिंदी**
4. Click **Analyse**
5. Show the Risk Score, Countdown, and Voice readout
6. Ask a follow-up in the chat: *"मुझे Section 139(9) समझाओ"*
7. Click WhatsApp share

**Pitch line:** *"Most citizens don't need a lawyer — they need to understand what the notice says. Nyaay AI does that in 30 seconds, free, in their own language."*

<img width="1438" height="820" alt="Screenshot 2026-03-28 at 11 32 10 PM" src="https://github.com/user-attachments/assets/83b407bb-8c85-47ef-ae26-bbe662bbac86" />

<img width="1437" height="820" alt="Screenshot 2026-03-28 at 11 32 46 PM" src="https://github.com/user-attachments/assets/d59e4ec9-ed59-4b65-a908-81eac80002b1" />

<img width="1440" height="818" alt="Screenshot 2026-03-28 at 11 34 45 PM" src="https://github.com/user-attachments/assets/ea788964-0aa3-4f79-b077-90656c6c3ac0" />

<img width="1440" height="820" alt="Screenshot 2026-03-28 at 11 35 04 PM" src="https://github.com/user-attachments/assets/daf0d4e4-0238-45ed-a7ed-0e8ab91b744f" />

<img width="1440" height="819" alt="Screenshot 2026-03-28 at 11 35 33 PM" src="https://github.com/user-attachments/assets/dfa8b42d-ca24-42cb-a03d-16794f93996c" />



## 📁 File Structure
```
nyaay-ai/
├── index.html      ← Full frontend app
├── server.js       ← Express + Groq proxy
├── manifest.json   ← PWA manifest
├── package.json
└── README.md
```

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JS (no framework needed)
- **OCR**: Tesseract.js (free, in-browser)
- **AI**: Groq API — Llama 3.3 70B (free tier)
- **Backend**: Node.js + Express (CORS proxy)
- **Voice**: Web Speech API (browser built-in, free)
- **Storage**: localStorage (no database needed)
