import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Copy, RefreshCw, Check } from "lucide-react";
import { mockGenerate } from "@/lib/mock-ai";

export function AiTool({
  kind,
  inputs,
  values,
  onChange,
  formContent,
}: {
  kind: string;
  inputs: Record<string, string>;
  values: Record<string, string>;
  onChange: (k: string, v: string) => void;
  formContent: ReactNode;
}) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const run = async () => {
    setLoading(true);
    try {
      const out = await mockGenerate(kind, values);
      setOutput(out);
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formContent}
          <Button onClick={run} disabled={loading} className="w-full">
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" /> Generating…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" /> Generate
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Output (editable)</CardTitle>
          {output && (
            <Button size="sm" variant="ghost" onClick={copy}>
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy
                </>
              )}
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <Textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            placeholder="Your AI-generated output will appear here. You can edit it freely before using."
            className="min-h-[420px] font-mono text-sm"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            ⚠ AI-generated content may contain errors. Review before sending or sharing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Convenience hook
export function useFormValues(initial: Record<string, string>) {
  const [values, setValues] = useState(initial);
  const onChange = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));
  return { values, onChange };
}
