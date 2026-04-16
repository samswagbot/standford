"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { addVisited, getSelectedApod } from "@/lib/storage";

export default function ApodDetailPage() {
  const params = useParams<{ date: string }>();
  const date = params.date;

  const selectedApod = date ? getSelectedApod() : null;
  const apod = selectedApod && selectedApod.date === date ? selectedApod : null;

  useEffect(() => {
    if (date) addVisited(date);
  }, [date]);

  const backLink = (
    <Link
      href="/"
      className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
    >
      ← Back to gallery
    </Link>
  );

  if (!apod) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
        <div className="mx-auto max-w-5xl">
          {backLink}

          <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-6">
            <p className="text-amber-300">
              APOD data was not found. Please return to the gallery and try
              again.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        {backLink}

        <div className="mb-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            NASA APOD
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {apod.title}
          </h1>

          <p className="mt-3 inline-block rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            {apod.date}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="relative aspect-video w-full bg-slate-800">
            {apod.media_type === "image" ? (
              <Image
                src={apod.url}
                alt={apod.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            ) : (
              <iframe
                src={apod.url}
                title={apod.title}
                className="h-full w-full"
                allowFullScreen
              />
            )}
          </div>

          <div className="border-t border-slate-800 p-6 md:p-8">
            <h2 className="mb-4 text-lg font-semibold text-indigo-200">
              About this image
            </h2>

            <p className="leading-8 text-slate-300">{apod.explanation}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
