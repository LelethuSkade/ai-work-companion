import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { AiTool, useFormValues } from "@/components/ai-tool";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/email")({ component: Page });

function Page() {
  const { values, onChange } = useFormValues({
    recipient: "", topic: "", tone: "professional", points: "",
  });
  return (
    <DashboardLayout title="Smart Email Generator" description="Draft clear, well-structured emails quickly.">
      <AiTool
        kind="email"
        inputs={{}}
        values={values}
        onChange={onChange}
        formContent={
          <>
            <div className="space-y-2">
              <Label>Recipient</Label>
              <Input value={values.recipient} onChange={(e) => onChange("recipient", e.target.value)} placeholder="e.g. Alex" />
            </div>
            <div className="space-y-2">
              <Label>Topic / Subject</Label>
              <Input value={values.topic} onChange={(e) => onChange("topic", e.target.value)} placeholder="e.g. Q3 roadmap review" />
            </div>
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={values.tone} onValueChange={(v) => onChange("tone", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="concise">Concise</SelectItem>
                  <SelectItem value="persuasive">Persuasive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Key points (one per line)</Label>
              <Textarea
                value={values.points}
                onChange={(e) => onChange("points", e.target.value)}
                placeholder={"Status update on milestone 2\nBlockers and asks\nNext steps"}
                className="min-h-[120px]"
              />
            </div>
          </>
        }
      />
    </DashboardLayout>
  );
}
