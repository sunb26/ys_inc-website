import { About } from "../../components/model/about";
import { ImageGallery } from "../../components/model/gallery";
import { Highlights } from "../../components/model/highlights";
import { Specifications } from "@/app/components/model/specifications";

// Define the structure for a single image item
interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;  // Optional caption field
}

export default async function BoatModelPage({ params }: { params: { modelId: string } }) {
  const { modelId } = await params;
    
  const url = `${process.env.NEXT_DEV_BASE_URL}/api/getImages/${ modelId }`
  console.log(url)
  // Fetch the images for the model from the API
  const res = await fetch(url);


  const data = await res.json();
  const images: GalleryImage[] = data.body.map((image: { id: string; name: string; mimeType: string; }) => ({
    url: `https://drive.google.com/uc?export=view&id=${image.id}`,
    alt: image.name,
  }));

  return (
    <div className="bg-slate-100">
      <About name={ modelId } />
      <div>
        <h1 className="text-center text-6xl font-bold my-8 underline text-dark-blue">Gallery</h1>
        <div className="p-8">
          <ImageGallery images={images} />
        </div>
      </div>
      <Highlights highlights= {[]}/>
      <Specifications specs= {[]}/>
    </div>
  );
}