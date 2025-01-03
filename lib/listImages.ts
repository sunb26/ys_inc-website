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

export async function listImages(modelId: string, pageSize: number) {
  try {
    const folderId = imageFolderIds.get(modelId);

    if (!folderId) {
      return [];
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
      console.log("listImages: no images found");
      return [];
    }

    return res.data.files as ImageFile[];
  } catch (error) {
    console.error("listImages: error", error);
    return [];
  }
}
