import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const { city } = geolocation(request);
  return new Response(`your current city is ${city}`, {
    headers: { "content-type": "text/plain" },
  });
}
