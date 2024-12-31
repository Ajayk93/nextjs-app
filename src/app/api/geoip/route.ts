import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const { city } = geolocation(request);
  return new Response(JSON.stringify({ city: city }), {
    headers: { "content-type": "text/plain" },
  });
}
