export function ApodGridSkeleton() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse space-y-6">
      
      <div>
        <div className="mb-2 h-4 w-24 rounded bg-slate-800" />
        <div className="mb-3 h-10 w-2/3 rounded bg-slate-800" />
        <div className="h-6 w-32 rounded-full bg-slate-800" />
      </div>

      
      <div className="aspect-video w-full rounded-2xl bg-slate-800" />

      
      <div className="space-y-3">
        <div className="h-5 w-40 rounded bg-slate-800" />
        <div className="h-4 w-full rounded bg-slate-800" />
        <div className="h-4 w-full rounded bg-slate-800" />
        <div className="h-4 w-5/6 rounded bg-slate-800" />
        <div className="h-4 w-3/4 rounded bg-slate-800" />
      </div>
    </div>
  );
}
