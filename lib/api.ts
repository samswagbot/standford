import type { Apod } from "@/types/apod";

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY";

export async function getRecentApods(): Promise<Apod[]> {
  const res = await fetch(`${BASE_URL}?api_key=${API_KEY}&count=9`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch APODs: ${res.status}`);
  }

  return res.json();
}
