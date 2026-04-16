import ApodCard from "@/components/ApodCard";
import type { Apod } from "@/types/apod";

type ApodGridProps = {
  apods: Apod[];
  visited: string[];
};

export default function ApodGrid({ apods, visited }: ApodGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {apods.map((apod) => (
        <ApodCard
          key={apod.date}
          apod={apod}
          visited={visited.includes(apod.date)}
        />
      ))}
    </div>
  );
}
