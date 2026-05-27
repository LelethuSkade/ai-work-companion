import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AiTool, useFormValues } from "@/components/ai-tool";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/notes")({ component: Page });

function Page() {
  const { values, onChange } = useFormValues({ transcript: "" });
  return (
    <DashboardLayout title="Meeting Notes Summarizer" description="Turn raw notes or transcripts into actionable summaries.">
      <AiTool
        kind="notes"
        inputs={{}}
        values={values}
        onChange={onChange}
        formContent={
          <div className="space-y-2">
            <Label>Meeting transcript or raw notes</Label>
            <Textarea
              value={values.transcript}
              onChange={(e) => onChange("transcript", e.target.value)}
              placeholder="Paste your meeting transcript or rough notes here…"
              className="min-h-[360px]"
            />
          </div>
        }
      />
    </DashboardLayout>
  );
}
