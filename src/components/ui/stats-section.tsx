import { MoveUpRight } from "lucide-react";

interface StatItem {
  value: string;
  change: string;
  changePositive: boolean;
  label: string;
}

interface StatsProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: "5+", change: "+5 yrs", changePositive: true, label: "Years of experience" },
  { value: "60+", change: "+60", changePositive: true, label: "Projects executed" },
  { value: "RM3.6M+", change: "+3.6M", changePositive: true, label: "Ads optimized" },
];

function Stats({ stats = defaultStats, className }: StatsProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <MoveUpRight className="w-4 h-4 text-neon" />
            <div className="flex items-end gap-2">
              <span className="font-heading text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-neon mb-1">
                {stat.change}
              </span>
            </div>
            <span className="text-xs text-white/50">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Stats };
