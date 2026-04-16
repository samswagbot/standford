import { ApodGridSkeleton } from "@/components/ApodGridSkeleton";

export default function Loading() {
  return (
    <main className="p-6 min-h-screen bg-slate-950">
      <ApodGridSkeleton />
    </main>
  );
}
