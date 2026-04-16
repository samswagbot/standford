export function ApodGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-4"
        >
          <div className="mb-3 aspect-[4/3] rounded-md bg-slate-800" />
          <div className="mb-2 h-5 w-3/4 rounded bg-slate-800" />
          <div className="h-4 w-1/3 rounded bg-slate-800" />
        </div>
      ))}
    </div>
  );
}
