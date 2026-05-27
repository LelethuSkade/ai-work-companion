# WorkAI — AI Workplace Productivity Assistant

## Project Overview

WorkAI is a modern, responsive web application designed to help professionals automate repetitive workplace tasks using structured AI prompts. Built with a clean SaaS-style dashboard, it provides five focused AI tools that generate editable, actionable outputs — from polished emails to step-by-step task plans — all within a single intuitive interface.

---

## Problem Statement

Professionals spend hours every week on repetitive tasks: drafting emails, summarizing meeting notes, planning projects, and researching topics. Existing AI tools often require complex prompt engineering, produce unformatted outputs, or lack a unified workspace. WorkAI solves this by providing pre-structured AI tools with built-in prompt templates, editable outputs, and a seamless dashboard experience.

---

## Solution Overview

WorkAI centralizes five common workplace AI use cases into one cohesive dashboard:

- **Structured Inputs** — Each tool asks for the right context (recipient, tone, deadlines, etc.) so the AI produces relevant results without guesswork.
- **Editable Outputs** — All generated content appears in editable text areas, so users can refine before sharing.
- **Responsive Design** — A collapsible sidebar and mobile-friendly layout ensure the app works on any device.
- **Copy-to-Clipboard** — One-click copy on every output for instant use in emails, documents, or chat apps.
- **Responsible AI Disclaimer** — A visible reminder that AI outputs should be reviewed before use.

---

## Features

| Tool | What it does |
|------|--------------|
| **Smart Email Generator** | Draft polished emails with structured inputs (recipient, topic, tone, key points). |
| **Meeting Notes Summarizer** | Paste a transcript and get a clear, structured summary with action items and decisions. |
| **AI Task Planner** | Enter a goal, deadline, and context to generate actionable step-by-step plans. |
| **AI Research Assistant** | Ask a question, pick an audience, and receive a structured research brief. |
| **AI Chatbot** | Open-ended conversational AI for brainstorming, Q&A, and idea exploration. |

All outputs are fully editable before copying or sharing.

---

## Tools Used

| Category | Technology |
|----------|------------|
| **Framework** | [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7 + SSR) |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui (Card, Button, Textarea, Select, Sheet, etc.) |
| **Routing** | TanStack Router (file-based) |
| **Icons** | Lucide React |
| **AI Engine** | Client-side mock generator (ready for backend / API integration) |
| **Language** | TypeScript |
| **Package Manager** | Bun |

---

## Setup Instructions

```bash
# 1. Clone the repository
git clone <repo-url>
cd workai

# 2. Install dependencies
bun install

# 3. Start the development server
bun run dev

# 4. Open in browser
# http://localhost:3000

# 5. Build for production
bun run build

# 6. Preview production build locally
bun run preview
```

---

## Sample Prompts

Here are example inputs you can try in each tool:

### Smart Email Generator
- **Recipient:** `Project Team`
- **Topic:** `Q3 Roadmap Review`
- **Tone:** `Professional`
- **Key Points:**
  ```
  Finalize feature priorities by Friday
  Assign owners to each initiative
  Schedule follow-up for next Monday
  ```

### Meeting Notes Summarizer
- **Transcript:**
  ```
  We discussed the new onboarding flow. Sarah will own the UX redesign. 
  The engineering team needs two sprints. Budget was approved. 
  Next review is scheduled for June 15th.
  ```

### AI Task Planner
- **Goal:** `Launch new landing page`
- **Deadline:** `End of month`
- **Context:** `Small team, needs design + copy + dev`

### AI Research Assistant
- **Question:** `What are the best practices for remote team collaboration in 2025?`
- **Audience:** `Team leads at a tech startup`

### AI Chatbot
- **Message:** `How do I prioritize features when everything feels urgent?`

---

## Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| **AI outputs need to be editable** | All generated content renders in `<Textarea>` components, allowing users to refine results before copying. |
| **Mobile responsiveness** | A collapsible Sheet sidebar with a backdrop overlay ensures navigation works smoothly on small screens. |
| **Consistent UX across tools** | A reusable `AiTool` component standardizes the input → generate → output → copy flow for all five tools. |
| **No backend yet** | A client-side `mockGenerate` function simulates AI responses with realistic templates, making the app fully functional while keeping it ready for a real API integration. |
| **Form state management** | A custom `useFormValues` hook keeps form state clean and consistent across every tool page. |

---

## Responsible AI

AI-generated content may contain inaccuracies, outdated information, or unintended bias. Always review and edit outputs before sharing, and avoid entering confidential or sensitive information.

---

## License

Private — built with Lovable.
