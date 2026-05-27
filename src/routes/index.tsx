import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText, ListTodo, Search, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const tools = [
  { to: "/email", title: "Smart Email Generator", desc: "Draft polished emails in seconds.", icon: Mail },
  { to: "/notes", title: "Meeting Notes Summarizer", desc: "Turn transcripts into clear summaries.", icon: FileText },
  { to: "/tasks", title: "AI Task Planner", desc: "Break goals into actionable steps.", icon: ListTodo },
  { to: "/research", title: "AI Research Assistant", desc: "Get structured research briefs.", icon: Search },
  { to: "/chat", title: "AI Chatbot", desc: "Ask anything, brainstorm freely.", icon: MessageSquare },
];

function Index() {
  return (
    <DashboardLayout title="Dashboard" description="Your AI workplace productivity hub">
      <div className="mb-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 p-8 text-primary-foreground">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
          <Sparkles className="h-4 w-4" /> Welcome back
        </div>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Automate your workday with AI
        </h2>
        <p className="mt-2 max-w-xl text-sm opacity-90">
          Five focused tools to help you write, plan, and research faster — all in one clean workspace.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <Link key={t.to} to={t.to} className="group">
              <Card className="h-full transition-all group-hover:border-primary group-hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-base">
                    {t.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{t.desc}</CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 rounded-lg border bg-background p-5 text-sm text-muted-foreground">
        <p className="font-medium text-foreground mb-1">Responsible AI</p>
        This assistant generates content using AI models. Outputs may be inaccurate, biased, or out of date.
        Always review and edit before sharing, and avoid entering confidential information you wouldn't share externally.
      </div>
    </DashboardLayout>
  );
}
