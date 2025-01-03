import { google } from "googleapis";
import { googleCredentials } from "./utils";

export async function fetchModelData(modelId: string) {
  try {
    const auth = await google.auth.getClient({
      credentials: googleCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // Force conversion to number to ensure proper addition
    const mid = Number(modelId);
    if (isNaN(mid)) {
      throw new Error("fetchModelData: Invalid model ID");
    }

    const range = `Sheet1!A${mid + 1}:E${mid + 1}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID!,
      range,
    });

    if (!response.data.values) {
      throw new Error("fetchModelData: Model data not found");
    }

    const [name, description, highlights, specifications, enabled] =
      response.data.values[0];

    return { name, description, highlights, specifications, enabled };
  } catch (error) {
    // Log the error (optional) for debugging purposes
    console.error("fetchModelData: Error fetching model data:", error);
    throw error;
  }
}
