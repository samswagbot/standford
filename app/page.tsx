"use client";

import { useEffect, useState } from "react";
import ApodGrid from "@/components/ApodGrid";
import ClearHistoryButton from "@/components/ClearHistoryButton";
import { ApodGridSkeleton } from "@/components/ApodGridSkeleton";
import { getRecentApods } from "@/lib/api";
import {
  clearVisited,
  getVisited,
  getCachedApods,
  setCachedApods,
} from "@/lib/storage";
import type { Apod } from "@/types/apod";

export default function HomePage() {
  const [apods, setApods] = useState<Apod[]>([]);
  const [visited, setVisited] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadApods() {
      try {
        setLoading(true);
        setError(null);

        const cached = getCachedApods();
        const savedVisited = getVisited();

        setVisited(savedVisited);

        if (cached.length > 0) {
          setApods(cached);
          return;
        }

        const data = await getRecentApods();
        setApods(data);
        setCachedApods(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadApods();
  }, []);

  const handleClearHistory = () => {
    clearVisited();
    setVisited([]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Astronomy Picture of the Day
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Explore recent images from NASA
        </p>
      </div>

      <ClearHistoryButton onClear={handleClearHistory} />

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-900 p-4 text-sm text-red-700">
          Failed to load APODs: {error}
        </div>
      ) : loading ? (
        <ApodGridSkeleton />
      ) : (
        <ApodGrid apods={apods} visited={visited} />
      )}
    </main>
  );
}
