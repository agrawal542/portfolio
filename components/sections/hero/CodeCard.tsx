import Card from "@/components/common/Card";
import Tilt from "@/components/common/Tilt";
import { type CodeTone, hero } from "@/data/hero";
import { cn } from "@/utils/cn";

const tones: Record<CodeTone, string> = {
  plain: "text-code-text",
  muted: "text-code-muted",
  keyword: "text-code-keyword",
  accent: "text-code-accent",
};

const { code, impact } = hero;

/** Decorative code editor window shown beside the hero on larger screens. */
export default function CodeCard() {
  return (
    <div className="mx-auto w-full max-w-sm animate-float" aria-hidden="true">
      <Tilt>
        <div className="relative">
          <div className="rotate-1 overflow-hidden rounded-2xl border border-code-line bg-code-bg shadow-raised transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center gap-2 border-b border-code-line px-5 py-4">
              <span className="size-2 rounded-full bg-code-muted/60" />
              <span className="size-2 rounded-full bg-code-muted/60" />
              <span className="size-2 rounded-full bg-code-accent" />
              <span className="ml-3 font-mono text-xs text-code-muted">{code.filename}</span>
            </div>

            <div className="p-5 pb-12 font-mono text-xs leading-7 whitespace-pre lg:p-6 lg:pb-14 lg:text-sm lg:leading-8">
              {code.lines.map((line, index) => (
                <p key={index} className={cn("min-h-7 lg:min-h-8", line.indent && "pl-5")}>
                  {line.tokens.map((token) => (
                    <span key={token.text} className={tones[token.tone]}>
                      {token.text}
                    </span>
                  ))}
                </p>
              ))}
              <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-code-line px-3 py-1 text-xs text-code-accent">
                <span className="size-1.5 rounded-full bg-code-accent" />
                {code.status}
              </p>
            </div>
          </div>

          <Card className="absolute -bottom-5 -left-3 px-4 py-3 shadow-raised lg:-left-7">
            <p className="font-mono text-xs text-subtle uppercase">{impact.label}</p>
            <p className="mt-1 text-sm font-semibold text-heading">
              <span className="text-primary">{impact.value}</span> {impact.detail}
            </p>
          </Card>
        </div>
      </Tilt>
    </div>
  );
}
