import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AiTool, useFormValues } from "@/components/ai-tool";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/tasks")({ component: Page });

function Page() {
  const { values, onChange } = useFormValues({ goal: "", deadline: "", context: "" });
  return (
    <DashboardLayout title="AI Task Planner" description="Break a goal into structured, actionable steps.">
      <AiTool
        kind="tasks"
        inputs={{}}
        values={values}
        onChange={onChange}
        formContent={
          <>
            <div className="space-y-2">
              <Label>Goal</Label>
              <Input value={values.goal} onChange={(e) => onChange("goal", e.target.value)} placeholder="e.g. Launch v1 of the onboarding flow" />
            </div>
            <div className="space-y-2">
              <Label>Target date</Label>
              <Input value={values.deadline} onChange={(e) => onChange("deadline", e.target.value)} placeholder="e.g. Next Friday" />
            </div>
            <div className="space-y-2">
              <Label>Context (optional)</Label>
              <Textarea
                value={values.context}
                onChange={(e) => onChange("context", e.target.value)}
                placeholder="Team size, constraints, prior work…"
                className="min-h-[120px]"
              />
            </div>
          </>
        }
      />
    </DashboardLayout>
  );
}
