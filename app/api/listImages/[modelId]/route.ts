import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const imageFolderIds = new Map<string, string>([
  ["1", process.env.MODEL_1_IMAGE_FOLDER_ID!],
  ["2", process.env.MODEL_2_IMAGE_FOLDER_ID!],
  ["3", process.env.MODEL_3_IMAGE_FOLDER_ID!],
]);

type ImageFile = {
  id: string;
  name: string;
  mimeType: "image/jpeg" | "image/png";
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ modelId: string }> }
) {
  const { modelId } = await params;
  const pageSize = Number(req.nextUrl.searchParams.get("pageSize")) || 0;
  const folderId = imageFolderIds.get(modelId);

  if (!folderId) {
    return NextResponse.json({
      status: 404,
      body: "Model Folder Id Not Found",
    });
  }

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  const drive = google.drive({ version: "v3", auth });
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed=false and (mimeType='image/jpeg' or mimeType='image/png')`,
    fields: "files(id, name, mimeType)",
    pageSize: pageSize,
  });
  if (!res.data.files) {
    return NextResponse.json({ status: 404, body: "No Images Found" });
  }
  console.log(res.data.files);
  return NextResponse.json({
    status: 200,
    body: res.data.files as ImageFile[],
  });
}
