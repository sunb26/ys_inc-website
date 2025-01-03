import { About } from "../../components/model/about";
import { ImageGallery } from "../../components/model/gallery";
import { Highlights } from "../../components/model/highlights";
import { Specifications } from "@/app/components/model/specifications";

// Define the structure for a single image item
interface GalleryImage {
  url: string;
  alt: string;
}

export default async function BoatModelPage({
  params,
}: {
  params: Promise<{ modelId: string }>;
}) {
  const { modelId } = await params;

  let url = `${process.env.NEXT_DEV_BASE_URL}/api/listImages/${modelId}?pageSize=25`;
  // Fetch the images for the model from the API
  const imgRes = await fetch(url);

  const data = await imgRes.json();
  const images: GalleryImage[] = data.body.map(
    (image: { id: string; name: string; mimeType: string }) => ({
      url: `https://drive.google.com/uc?export=view&id=${image.id}`,
      alt: image.name,
    })
  );

  url = `${process.env.NEXT_DEV_BASE_URL}/api/getModel/${modelId}`;
  const infoRes = await fetch(url);
  const modelData = await infoRes.json();



  return (
    <div className="bg-slate-100">
      <About name={modelData.body.name} imagePath={images[0].url} desc={modelData.body.description} />
      <div>
        <h1 className="text-center text-6xl font-bold my-8 underline text-dark-blue">
          Gallery
        </h1>
        <div className="p-8">
          <ImageGallery images={images} />
        </div>
      </div>
      <Highlights highlights={[]} />
      <Specifications specs={[]} />
    </div>
  );
}
