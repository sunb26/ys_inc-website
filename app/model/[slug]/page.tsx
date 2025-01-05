import { About } from "@/components/model/about";
import { ImageGallery } from "@/components/model/gallery";
import { Highlights } from "@/components/model/highlights";
import { Specifications } from "@/components/model/specifications";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const POST_QUERY = `*[_type == "galleryImageSet" && slug.current == $slug][0]{ "imgUrls": images[].asset->url, showroomImageRef->{
  title,
  description,
  "coverImg": coverImage.asset->url,
}}`;

type Params = Promise<{ slug: string }>;

const options = { next: { revalidate: 60 } };

export default async function ModelPage({ params }: { params: Params }) {
  const p = await params;
  const modelData = await client.fetch<SanityDocument>(POST_QUERY, p, options);
  return (
    <div className="bg-slate-100">
      <div className="p-2 w-fit h-fit">
        <About
          name={modelData.showroomImageRef.title}
          imagePath={modelData.showroomImageRef.coverImg}
          desc={modelData.showroomImageRef.description}
        />
      </div>
      <div>
        <h1 className="text-center text-6xl font-bold my-8 underline text-dark-blue">
          Gallery
        </h1>
        <div className="p-8">
          <ImageGallery imageUrls={modelData.imgUrls} />
        </div>
      </div>
      <Highlights highlights={[]} />
      <Specifications specs={[]} />
    </div>
  );
}
