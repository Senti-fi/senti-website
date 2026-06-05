import { Sparkles } from "lucide-react";

export function LucyChat({
  userMessage,
  message,
  details,
  primaryLabel,
  secondaryLabel,
}: {
  userMessage?: string;
  message: React.ReactNode;
  details?: string[];
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_30px_70px_-40px_rgba(10,22,40,0.25)]">
      {userMessage && (
        <div className="mb-5 flex justify-end">
          <div className="max-w-[82%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-[14px] leading-snug text-white">
            {userMessage}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-senti-blue to-senti-cyan text-white">
          <Sparkles className="h-4 w-4" strokeWidth={2.25} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold tracking-tight text-ink">
              Lucy
            </span>
            <span className="text-[12px] text-ink-faint">your CFO</span>
          </div>

          <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{message}</p>

          {details && details.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 rounded-lg border border-line-soft bg-surface-soft px-3 py-2.5 text-[12px] text-ink-muted">
              {details.map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-senti-blue" />
                  {d}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex h-8 items-center rounded-lg bg-senti-blue px-3.5 text-[12px] font-medium text-white">
              {primaryLabel}
            </span>
            <span className="inline-flex h-8 items-center rounded-lg border border-line bg-surface px-3.5 text-[12px] font-medium text-ink-muted">
              {secondaryLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
