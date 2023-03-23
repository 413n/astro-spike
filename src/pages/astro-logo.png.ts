import type { APIRoute } from "astro";

// @ts-ignore
export const get: APIRoute = async ({ params, request }) => {
  // Generate your dynamic image

  const response = await fetch(
    "https://astro.build/assets/press/full-logo-light.png",
  );
  const buffer = Buffer.from(await response.arrayBuffer());

  return {
    body: buffer,
    encoding: "binary",
  };
};
