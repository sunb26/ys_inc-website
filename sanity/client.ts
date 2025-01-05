import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ei3a7myh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});