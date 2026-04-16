import { ApodDetailSkeleton } from "@/components/ApodDetailSkeleton";

export default function Loading() {
  return (
    <main className="p-6 min-h-screen bg-slate-950">
      <ApodDetailSkeleton />
    </main>
  );
}
