import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { modelId: number } }
) {
  try {
    const { modelId } = await params;
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    const sheets = google.sheets({ version: "v4", auth });
  
    // Force conversion to number to ensure proper addition
    const mid = Number(modelId);
    if (isNaN(modelId)) {
      return new Response("Invalid model ID", { status: 400 });
    }

    const range = `Sheet1!A${mid + 1}:E${mid + 1}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID!,
      range,
    });

    if (!response.data.values) {
      return NextResponse.json({ status: 404, body: "model data not found" });
    }

    const [name, description, highlights, specifications, enabled] =
      response.data.values[0];
    
    return NextResponse.json({
      status: 200,
      body: { name, description, highlights, specifications, enabled },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, body: error });
  }
}
