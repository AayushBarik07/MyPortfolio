# Aayush Barik — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite, featuring a dark aesthetic with amber/orange accents.

🌐 **Live:** [(https://github.com/AayushBarik07/MyPortfolio)](https://my-portfolio-zeta-cyan-59.vercel.app/)

---

## Sections

| Section            | Description                                       |
| ------------------ | ------------------------------------------------- |
| **Home**           | Animated typewriter introduction                  |
| **Skills**         | Programming, frontend, and CS fundamentals        |
| **Experience**     | Work history and leadership roles                 |
| **Projects**       | Pinned GitHub repositories via GitHub GraphQL API |
| **Certifications** | AWS, McKinsey, and hackathon credentials          |
| **Contact**        | EmailJS-powered contact form with social links    |

---

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Email:** EmailJS (`@emailjs/browser`)
- **GitHub Data:** GitHub GraphQL API via Apollo Client
- **Backend (API route):** Express + Node.js (for GitHub pinned repos)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
GITHUB_ACCESS_TOKEN=your_github_personal_access_token
```

The token is used by the `/api/pinned` route to fetch your pinned GitHub repositories.

### Run locally

```bash
npm run dev
```

App runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navbar with resume download
│   ├── HomeSection.jsx     # Hero with typewriter effect
│   ├── Skills.jsx          # Skills grid
│   ├── Experience.jsx      # Work & leadership timeline
│   ├── ProjectSection.jsx  # GitHub pinned repos
│   ├── Certifications.jsx  # Certificates display
│   ├── ContactSection.jsx  # EmailJS contact form
│   └── Footer.jsx
api/
└── pinned.js               # GitHub GraphQL API handler
```

---

## Contact

- **Email:** superbsup45@gmail.com
- **LinkedIn:** [aayush-barik-49882b247](https://www.linkedin.com/in/aayush-barik-49882b247/)
- **GitHub:** [AayushBarik07](https://github.com/AayushBarik07)
- **X (Twitter):** [@aayush_barik](https://x.com/aayush_barik)
