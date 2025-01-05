// app/components/home/showroom.tsx
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "showroomImage"
  && defined(slug.current)
]|order(publishedAt asc){
  _id, 
  title, 
  enabled, 
  "ref": gallerySetRef->slug.current, 
  description,
  "coverImgSrc": coverImage.asset->url
}`;

const options = { next: { revalidate: 60 } };

export async function Showroom() {
  const models = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section id="showroom" className="py-16 bg-slate-100 pt-3">
      <h2 className="text-5xl font-bold underline text-black text-center p-16">
        Showroom
      </h2>
      <div className="text-center bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-28">
          {models.map((model) => {
            return (
              <Link
                key={model._id}
                href={model.enabled ? `/model/${model.ref}` : `#showroom`}
                className="cursor-pointer"
              >
                <div className="bg-white shadow-md rounded-lg p-10 transition-transform transform hover:scale-105">
                  <Image
                    src={model.coverImgSrc}
                    alt="Boat Model Cover Image"
                    className="rounded-lg mb-4 border-2 border-dark-blue md:max-h-[40vh]"
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <h3 className="text-lg font-semibold text-black">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 text-left">
                    {model.description || ""}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
