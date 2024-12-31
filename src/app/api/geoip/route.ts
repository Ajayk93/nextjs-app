import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const set = "set";
  const { city, country, countryRegion, region } = geolocation(request);
  return new Response(
    JSON.stringify({ city, country, countryRegion, region }),
    {
      headers: { "content-type": "text/plain" },
    }
  );
}
