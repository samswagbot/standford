"use client";

import Link from "next/link";
import Image from "next/image";
import type { Apod } from "@/types/apod";
import { setSelectedApod } from "@/lib/storage";

type ApodCardProps = {
  apod: Apod;
  visited: boolean;
};

export default function ApodCard({ apod, visited }: ApodCardProps) {
  const cardStyles = `group h-full rounded-xl border p-4 transition
    shadow-sm hover:shadow-lg hover:-translate-y-1
    focus:outline-none focus:ring-2 focus:ring-indigo-500
    ${
      visited
        ? "bg-indigo-300 border-indigo-300"
        : "bg-white border-slate-200 hover:bg-slate-50"
    }`;

  return (
    <Link
      href={`/apod/${apod.date}`}
      className="block h-full"
      onClick={() => setSelectedApod(apod)}
      aria-label={`View details for ${apod.title} from ${apod.date}`}
    >
      <article className={cardStyles}>
        <div className="relative mb-3 w-full aspect-[4/3] overflow-hidden rounded-md">
          {apod.media_type === "image" ? (
            <Image
              src={apod.url}
              alt={`${apod.title} - NASA Astronomy Picture of the Day`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              role="img"
              aria-label={`Video preview for ${apod.title}`}
              className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-500"
            >
              Video preview
            </div>
          )}
        </div>

        <h2 className="line-clamp-2 text-lg font-semibold text-slate-900">
          {apod.title}
        </h2>

        <p className="mt-2 text-sm text-slate-800">{apod.date}</p>
      </article>
    </Link>
  );
}
