import { cn } from "@/lib/utils";

export const AiLoader = ({ className }: { className?: string }) => {
  const text = "Loading";

  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      <div className="loader-sphere" />
      <div className="flex gap-0.5">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="font-heading text-lg font-semibold tracking-widest uppercase"
            style={{
              color: "hsl(var(--neon-green))",
              animation: `loader-letter-anim 1.5s ease-in-out ${i * 0.1}s infinite`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
