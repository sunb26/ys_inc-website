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

const options = { next: { revalidate: 30 } };

export default async function ModelPage({
  params,
}: {
  params: { slug: string };
}) {
  params = await params;
  const modelData = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  return (
    <div className="bg-slate-100">
      <About
        name={modelData.showroomImageRef.title}
        imagePath={modelData.showroomImageRef.coverImg}
        desc={modelData.showroomImageRef.description}
      />
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
