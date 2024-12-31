import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const set = "set";
  const {
    city,
    country,
    countryRegion,
    region,
    longitude,
    latitude,
    postalCode,
  } = geolocation(request);
  return new Response(
    JSON.stringify({
      city,
      country,
      countryRegion,
      region,
      longitude,
      latitude,
      postalCode,
    }),
    {
      headers: { "content-type": "text/plain" },
    }
  );
}
