import { About } from "@/components/model/about";
import { ImageGallery } from "@/components/model/gallery";
import { Highlights } from "@/components/model/highlights";
import { Specifications } from "@/components/model/specifications";
import { listImages } from "@/lib/listImages";
import { fetchModelData } from "@/lib/getModel";

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

  // Fetch the images for the model from the API
  const imgRes = await listImages(modelId, 25);

  const images: GalleryImage[] = imgRes.map(
    (image: { id: string; name: string; mimeType: string }) => ({
      url: `https://drive.google.com/uc?export=view&id=${image.id}`,
      alt: image.name,
    })
  );

  // url = `${process.env.NEXT_DEV_BASE_URL}/api/getModel/${modelId}`;
  const modelData = await fetchModelData(modelId);

  return (
    <div className="bg-slate-100">
      <About
        name={modelData.name}
        imagePath={images[0].url}
        desc={modelData.description}
      />
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
