# L&T Equipcare — Digital Service Platform

<div align="center">

![L&T Equipcare](https://img.shields.io/badge/L%26T-Equipcare-003087?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNGwtNC00IDEuNDEtMS40MUwxMCAxMy4xN2w2LjU5LTYuNTlMMTggOGwtOCA4eiIvPjwvc3ZnPg==)
![Live](https://img.shields.io/badge/LIVE-lntcmmb--equipcare.web.app-FFA800?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Claude AI](https://img.shields.io/badge/Claude-Sonnet_4-7C3AED?style=for-the-badge)

**[🌐 View Live Site →](https://lntcmmb-equipcare.web.app)**

*A 24×7 AI-enabled customer support, training & service ecosystem for India's construction & mining equipment industry*

</div>

---

## 📋 Overview

L&T Equipcare is a **digital customer service platform** built for **Larsen & Toubro's Construction & Mining Machinery Business (CMMB)** — the exclusive Komatsu distributor in India.

The platform acts as the **first-level digital support layer** that complements the existing Equipcare on-call ecosystem — reducing dependency on basic support calls while seamlessly escalating complex issues to Equipcare's 1,500+ engineers.

| | |
|---|---|
| 🏢 **Organisation** | Larsen & Toubro — Construction & Mining Machinery Business |
| 🤝 **Partner** | Komatsu (exclusive distributor) |
| 🌐 **Live URL** | https://lntcmmb-equipcare.web.app |
| 📁 **Firebase Project** | lntcmmb-intelligence1 |
| 🏠 **Hosting Site** | lntcmmb-equipcare |

---

## ✨ Key Features

| Module | Description |
|--------|-------------|
| 🤖 **AI Language Assistant** | Claude Sonnet 4 chatbot — troubleshooting, AMC guidance, service booking in 10+ Indian languages |
| 🔧 **Self-Help Hub** | Error code library, troubleshooting guides, downloadable manuals for all Komatsu equipment |
| 🎓 **Training Academy** | Role-based courses (Operator, Supervisor, Fleet Owner, Technician) with Komatsu certifications |
| 📋 **Service Management** | Service booking form with real-time Firestore write, AMC contract guide, response SLAs |
| 📊 **Fleet Dashboard** | Machine health monitor, KPI cards, AMC status tracker, spare parts tracker |
| 🔗 **Equipcare Integration** | One-click escalation to 1800-833-9990 with full context handover |

---

## 🏗️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 18.x |
| **Build Tool** | Vite | 8.x |
| **Styling** | Tailwind CSS (L&T brand tokens) | 3.x |
| **Routing** | React Router DOM | 6.x |
| **AI Backend** | Claude Sonnet (Anthropic) | claude-sonnet-4-20250514 |
| **Database** | Firebase Firestore | Google Cloud |
| **Hosting** | Firebase Hosting (CDN) | lntcmmb-intelligence1 |
| **CI/CD** | GitHub Actions | ubuntu-latest |
| **Icons** | Lucide React | 0.383.0 |

---

## 📁 Project Structure

```
lnt_equipcare/
├── .github/workflows/deploy.yml     # CI/CD: auto-deploy to Firebase on push
├── src/
│   ├── App.jsx                       # Root component & routing
│   ├── main.jsx                      # Entry point (BrowserRouter)
│   ├── index.css                     # Tailwind + L&T brand tokens
│   ├── components/
│   │   ├── layout/Navbar.jsx         # Fixed nav with top info bar
│   │   ├── layout/Footer.jsx         # Dark navy footer
│   │   ├── sections/Hero.jsx         # Hero banner + 6-stat bar
│   │   ├── sections/PlatformOverview.jsx
│   │   ├── sections/UserTypes.jsx    # 6-role tab switcher
│   │   ├── sections/ServiceNetwork.jsx
│   │   ├── sections/ContractTypes.jsx
│   │   ├── sections/TrainingAcademy.jsx
│   │   └── ui/ChatWidget.jsx         # AI chatbot floating widget
│   ├── pages/
│   │   ├── HomePage.jsx              # / — full homepage
│   │   ├── SupportPage.jsx           # /support — troubleshooting hub
│   │   ├── ServicesPage.jsx          # /services — service booking
│   │   ├── TrainingPage.jsx          # /training — course catalogue
│   │   └── DashboardPage.jsx         # /dashboard — fleet monitor
│   ├── lib/
│   │   ├── firebase.js               # Firebase init + Firestore helpers
│   │   └── chatApi.js                # Claude API client
│   └── data/constants.js             # Service centers, stats, contracts
├── firebase.json                     # Hosting: site=lntcmmb-equipcare
├── .firebaserc                       # Project: lntcmmb-intelligence1
├── vite.config.js                    # Base "/", path aliases
└── tailwind.config.js                # Brand tokens: lt-blue, lt-yellow
```

---

## 🎨 Brand Design System

| Token | Hex | Usage |
|-------|-----|-------|
| `lt-blue` | `#003087` | Primary buttons, links, borders |
| `lt-yellow` | `#FFA800` | CTA buttons, AI button, accents |
| `lt-navy` | `#1B2A4A` | Headers, footer, dark sections |
| White | `#FFFFFF` | Page background, cards |
| `lt-gray-bg` | `#F7F8FA` | Alternate section backgrounds |

**Fonts:** Barlow Condensed (headings) · DM Sans (body)

> ⚠️ Zero red colour used — strict L&T CMMB standard palette (matches lntcmb.com)

---

## 🗄️ Firestore Collections

| Collection | Purpose |
|-----------|---------|
| `equipcare_chats` | Full AI chat session transcripts (saved every 5 messages) |
| `service_requests` | Service booking form submissions |
| `chat_queries` | Individual query analytics |
| `parts_enquiries` | Spare parts enquiry forms |

---

## 🤖 AI Chatbot

- **Model:** `claude-sonnet-4-20250514`
- **Max tokens:** 1,024 per response
- **Context window:** Last 10 messages
- **System prompt:** ~800 words of L&T CMMB knowledge (service centers, contracts, equipment, certifications)
- **Languages:** Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Punjabi, English + more
- **Escalation:** Phone button → 1800-833-9990 (24×7 Equipcare hotline)

### Token Cost Estimate
| Scenario | Monthly Cost |
|----------|-------------|
| 1,000 conversations × 10 turns | ~$180/month |
| 10,000 conversations × 10 turns | ~$1,800/month |

---

## 🚀 CI/CD Pipeline

Every `git push` to `main` auto-deploys in **~44 seconds**:

```
git push → GitHub Actions → npm install → Vite build → Firebase CLI → Live
```

### Required GitHub Secrets

| Secret | Purpose |
|--------|---------|
| `FIREBASE_SERVICE_ACCOUNT` | SA JSON for lntcmmb-intelligence1 |
| `VITE_FIREBASE_API_KEY` | Firebase Web API Key |
| `VITE_FIREBASE_APP_ID` | Firebase Web App ID |

---

## 🔒 Security

- API keys stored as GitHub Secrets — never committed to repository
- SA credential written to `/tmp/sa.json` during CI and deleted immediately (always runs)
- `X-Frame-Options: DENY`, `X-XSS-Protection`, `X-Content-Type-Options` headers set
- Assets cached with `max-age=31536000, immutable` (content-hashed filenames)

---

## 🏭 L&T CMMB Service Network

| Center | Zone | Area | CE Fleet | Certification |
|--------|------|------|----------|---------------|
| Nagpur | West | 28,300 sqm | 1,476 | Komatsu Gold |
| Kanchipuram | South | 29,468 sqm | 5,883 | Komatsu Gold |
| Durgapur | East | 8,094 sqm | 5,517 | Komatsu Gold |
| Singrauli | North | 10,080 sqm | 1,306 | Komatsu Gold |
| Bahadurgarh | North | 4,092 sqm | 1,334 | Komatsu Silver |
| Pune | West | 1,474 sqm | 1,501 | Komatsu Silver |

**910+ machines under contract · 1,500+ engineers · 92% machine availability · 100+ active sites**

---

## 📞 Support & Contacts

| Channel | Details |
|---------|---------|
| Equipcare Hotline 1 | 1800-833-9990 (24×7 toll-free) |
| Equipcare Hotline 2 | 1800-266-9990 (24×7 toll-free) |
| Email | CMB@larsentoubro.com |
| Website | https://lntcmb.com |

---

## 📜 License

Proprietary — Larsen & Toubro Limited, Construction & Mining Machinery Business.  
Internal project developed by the L&T CMMB Strategy Department.

---

<div align="center">
<sub>Built with ❤️ for India's Construction & Mining Industry · Powered by L&T CMMB & Komatsu</sub>
</div>
