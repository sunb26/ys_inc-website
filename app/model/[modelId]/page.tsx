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
  const images: GalleryImage[] = [
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Hi'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
    {
      url: '/about.png',
      alt: 'Landscape photo',
      caption: 'Beautiful sunset'
    },
  ];

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