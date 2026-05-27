import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AiTool, useFormValues } from "@/components/ai-tool";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/research")({ component: Page });

function Page() {
  const { values, onChange } = useFormValues({ question: "", audience: "" });
  return (
    <DashboardLayout title="AI Research Assistant" description="Generate a structured research brief on any topic.">
      <AiTool
        kind="research"
        inputs={{}}
        values={values}
        onChange={onChange}
        formContent={
          <>
            <div className="space-y-2">
              <Label>Research question or topic</Label>
              <Textarea
                value={values.question}
                onChange={(e) => onChange("question", e.target.value)}
                placeholder="e.g. What are best practices for B2B SaaS onboarding?"
                className="min-h-[160px]"
              />
            </div>
            <div className="space-y-2">
              <Label>Audience (optional)</Label>
              <Input
                value={values.audience}
                onChange={(e) => onChange("audience", e.target.value)}
                placeholder="e.g. Product managers"
              />
            </div>
          </>
        }
      />
    </DashboardLayout>
  );
}
