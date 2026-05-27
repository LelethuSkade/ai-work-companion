import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { mockGenerate } from "@/lib/mock-ai";
import { Send, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/chat")({ component: Page });

type Msg = { role: "user" | "assistant"; content: string };

function Page() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm your AI workplace assistant. How can I help today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    try {
      const reply = await mockGenerate("chat", { message: text });
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="AI Chatbot" description="Brainstorm, ask, and iterate with your AI assistant.">
      <Card className="flex flex-col h-[calc(100vh-12rem)] overflow-hidden p-0">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-3",
                m.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {m.role === "assistant" && (
                <div className="h-8 w-8 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap",
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted rounded-bl-sm",
                )}
              >
                {m.content}
              </div>
              {m.role === "user" && (
                <div className="h-8 w-8 shrink-0 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:240ms]" />
                </span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
        <div className="border-t p-3 md:p-4 bg-background">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              disabled={loading}
            />
            <Button type="submit" disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-2 text-[11px] text-muted-foreground text-center">
            AI responses can be inaccurate. Verify important information.
          </p>
        </div>
      </Card>
    </DashboardLayout>
  );
}
