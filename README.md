# WorkAI — AI Workplace Productivity Assistant

A modern, responsive web application that helps professionals automate everyday workplace tasks using AI. Built as a clean SaaS-style dashboard with five focused AI tools.

## Features

| Tool | What it does |
|------|--------------|
| **Smart Email Generator** | Draft polished emails with structured inputs (recipient, topic, tone, key points). |
| **Meeting Notes Summarizer** | Paste a transcript and get a clear, structured summary. |
| **AI Task Planner** | Enter a goal, deadline, and context to generate actionable step-by-step plans. |
| **AI Research Assistant** | Ask a question, pick an audience, and receive a structured research brief. |
| **AI Chatbot** | Open-ended conversational AI for brainstorming, Q&A, and idea exploration. |

All outputs are fully editable before copying or sharing.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7 + SSR)
- **Styling:** Tailwind CSS v4 with shadcn/ui components
- **Routing:** File-based routing via TanStack Router
- **Icons:** Lucide React
- **AI Engine:** Client-side mock generation (ready for backend integration)

## Project Structure

```
src/
├── components/
│   ├── dashboard-layout.tsx   # Sidebar + responsive layout shell
│   └── ai-tool.tsx            # Reusable AI tool card (input / output / copy)
│   └── ui/                    # shadcn/ui primitives
├── lib/
│   └── mock-ai.ts             # Mock AI generation engine
├── routes/
│   ├── index.tsx              # Dashboard (tool grid + hero)
│   ├── email.tsx              # Smart Email Generator
│   ├── notes.tsx              # Meeting Notes Summarizer
│   ├── tasks.tsx              # AI Task Planner
│   ├── research.tsx           # AI Research Assistant
│   └── chat.tsx               # AI Chatbot
├── router.tsx                 # TanStack Router setup
├── start.ts                   # Start server config
└── styles.css                 # Tailwind v4 entry + design tokens
```

## Getting Started

```bash
# Install dependencies
bun install

# Start the development server
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview
```

The dev server runs at `http://localhost:3000` by default.

## Responsible AI

AI-generated content may contain inaccuracies, outdated information, or unintended bias. Always review and edit outputs before sharing, and avoid entering confidential or sensitive information.

## License

Private — built with Lovable.
