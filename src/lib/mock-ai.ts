// Simple client-side mock "AI" generator. Replace with a real backend call later.
export async function mockGenerate(kind: string, input: Record<string, string>): Promise<string> {
  await new Promise((r) => setTimeout(r, 700));

  switch (kind) {
    case "email": {
      const { recipient, topic, tone, points } = input;
      return `Subject: ${topic || "Quick note"}

Hi ${recipient || "team"},

I hope this message finds you well. I wanted to reach out regarding ${topic || "an update"}.

${(points || "")
  .split("\n")
  .filter(Boolean)
  .map((p) => `• ${p.trim()}`)
  .join("\n") || "• Sharing context and next steps\n• Aligning on owners and timelines"}

Please let me know your thoughts at your convenience. Happy to jump on a quick call if helpful.

Best regards,
[Your name]

— Generated in a ${tone || "professional"} tone.`;
    }
    case "notes": {
      const { transcript } = input;
      const lines = (transcript || "").split(/\n+/).filter(Boolean);
      const bullets = lines.slice(0, 5).map((l, i) => `${i + 1}. ${l.slice(0, 120)}`);
      return `Summary
-------
The team discussed key topics and aligned on direction.

Key Points
----------
${bullets.join("\n") || "1. No transcript provided."}

Action Items
------------
- [ ] Owner A — Follow up on open questions (due this week)
- [ ] Owner B — Share updated draft (due Friday)
- [ ] Owner C — Schedule next review

Decisions
---------
- Proceed with proposed approach
- Revisit metrics next sprint`;
    }
    case "tasks": {
      const { goal, deadline } = input;
      return `Plan: ${goal || "Untitled goal"}
Target: ${deadline || "TBD"}

Phase 1 — Discovery (Days 1–2)
• Clarify success criteria
• Identify stakeholders and dependencies

Phase 2 — Execution (Days 3–6)
• Break work into 3 deliverables
• Daily 15-min check-in

Phase 3 — Review & Ship (Day 7)
• QA pass and stakeholder review
• Document outcomes and next steps`;
    }
    case "research": {
      const { question } = input;
      return `Research Brief: ${question || "Your topic"}

Overview
--------
A concise synthesis of what is currently known, common viewpoints, and notable tensions on the topic.

Key Findings
------------
1. Background and definitions
2. Major trends in the last 12–24 months
3. Leading players or sources
4. Common pitfalls or misconceptions

Suggested Next Steps
--------------------
- Validate findings against 2–3 primary sources
- Identify quantitative data to support claims
- Outline implications for your specific context

Note: This is a structured starting point — verify facts with authoritative sources.`;
    }
    case "chat": {
      const { message } = input;
      return `Here's a thoughtful take on "${message?.slice(0, 80) || "your question"}":

Consider breaking the problem into smaller parts, then prioritize by impact and effort. If you share more context (audience, constraints, deadline), I can tailor the answer further.`;
    }
    default:
      return "Generated output will appear here.";
  }
}
