export function ApodDetailSkeleton() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse">
      <div className="mb-6 inline-flex h-10 w-36 rounded-md border border-slate-800 bg-slate-900" />

      <div className="mb-6">
        <div className="mb-2 h-4 w-24 rounded bg-slate-800" />
        <div className="h-10 w-2/3 rounded bg-slate-800" />
        <div className="mt-3 h-8 w-28 rounded-full border border-slate-700 bg-slate-900" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="aspect-video w-full bg-slate-800" />

        <div className="border-t border-slate-800 p-6 md:p-8">
          <div className="mb-4 h-6 w-40 rounded bg-slate-800" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-slate-800" />
            <div className="h-4 w-full rounded bg-slate-800" />
            <div className="h-4 w-5/6 rounded bg-slate-800" />
            <div className="h-4 w-3/4 rounded bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
