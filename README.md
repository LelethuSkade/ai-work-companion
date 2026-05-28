# WorkAI — AI Workplace Assistant

<p align="center">
  <strong>Modern AI-powered workplace productivity tools built with React 19, TanStack Start, and Tailwind CSS.</strong>
</p>

<p align="center">
  Automate repetitive workplace tasks with structured AI workflows for emails, meeting summaries, task planning, research, and brainstorming.
</p>

---

## Overview

WorkAI is a responsive AI workplace assistant designed to help professionals work faster and more efficiently through guided AI workflows.

Instead of relying on generic prompts, WorkAI provides focused productivity tools with structured inputs and editable outputs, making AI-generated content easier to refine and use in real workplace scenarios.

The application combines a clean SaaS-style dashboard with reusable UI architecture and mobile-friendly design patterns.

---

## Features

### Smart Email Generator

Generate polished workplace emails using structured inputs such as:

* Recipient
* Topic
* Tone
* Key talking points

### Meeting Notes Summarizer

Transform raw meeting transcripts into:

* Structured summaries
* Action items
* Decisions
* Follow-up tasks

### AI Task Planner

Generate actionable execution plans using:

* Goals
* Deadlines
* Context constraints

### AI Research Assistant

Create audience-focused research briefs with organized insights and recommendations.

### AI Chatbot

Use conversational AI for:

* Brainstorming
* Productivity guidance
* Q&A
* Idea exploration

---

## Key UX Highlights

* Structured AI workflows
* Editable AI-generated outputs
* Copy-to-clipboard functionality
* Mobile-first responsive design
* Reusable AI tool architecture
* Consistent dashboard experience
* Collapsible sidebar navigation

---

## Tech Stack

| Category        | Technology                    |
| --------------- | ----------------------------- |
| Framework       | TanStack Start                |
| Frontend        | React 19                      |
| Language        | TypeScript                    |
| Styling         | Tailwind CSS v4               |
| UI Components   | shadcn/ui                     |
| Routing         | TanStack Router               |
| Icons           | Lucide React                  |
| Package Manager | Bun                           |
| AI Layer        | Client-side mock AI generator |

---

## Project Structure

```bash id="a3x4rv"
src/
├── components/
│   ├── ai-tool.tsx
│   ├── dashboard-layout.tsx
│   ├── sidebar.tsx
│   └── ui/
│
├── hooks/
│   └── use-form-values.ts
│
├── routes/
│   ├── email.tsx
│   ├── meetings.tsx
│   ├── planner.tsx
│   ├── research.tsx
│   └── chatbot.tsx
│
├── lib/
│   └── mock-generate.ts
│
└── styles/
```

---

## Getting Started

### Clone the Repository

```bash id="zgvq0k"
git clone https://github.com/LelethuSkade/ai-work-companion.git
```

### Navigate into the Project

```bash id="2mds8r"
cd ai-work-companion
```

### Install Dependencies

```bash id="9sh3ba"
bun install
```

### Start the Development Server

```bash id="zdujlwm"
bun run dev
```

Open the app in your browser:

```bash id="hgr6d2"
http://localhost:3000
```

---

## Production Build

### Build

```bash id="8u0mvf"
bun run build
```

### Preview

```bash id="3g13k7"
bun run preview
```

---

## Example Workflows

### Smart Email Generator

**Input**

```txt id="sz8pjm"
Recipient: Project Team
Topic: Q3 Roadmap Review
Tone: Professional
```

**Generated Output**

```txt id="cfxyym"
A polished workplace email with action items, ownership assignments, and follow-up scheduling.
```

---

### Meeting Notes Summarizer

**Input**

```txt id="xlyl6j"
Discussion about onboarding redesign, sprint planning, and budget approval.
```

**Generated Output**

```txt id="awz24w"
A structured summary containing key decisions, owners, timelines, and next steps.
```

---

## Challenges & Solutions

| Challenge                           | Solution                                           |
| ----------------------------------- | -------------------------------------------------- |
| AI outputs need editing flexibility | Outputs render inside editable textarea components |
| Consistent UX across tools          | Reusable `AiTool` component architecture           |
| Mobile responsiveness               | Sidebar Sheet navigation with responsive layouts   |
| No backend integration yet          | Mock AI generator simulates realistic responses    |
| Shared form state management        | Custom `useFormValues` hook                        |

---

## Future Improvements

* OpenAI API integration
* Anthropic Claude support
* Authentication & user accounts
* Saved prompt history
* Streaming AI responses
* Export to PDF/Markdown
* Team collaboration features
* Usage analytics dashboard
* Prompt templates marketplace
* Enhanced dark mode support

---

## Responsible AI

AI-generated outputs may contain inaccuracies, outdated information, or unintended bias.

Always review and edit generated content before sharing or publishing.

Avoid entering confidential or sensitive information into AI prompts.

---

## Author

Built by Lelethu Skade.

GitHub:
https://github.com/LelethuSkade

---

## License

Private — Built with Lovable.
