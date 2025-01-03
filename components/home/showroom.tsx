// app/components/home/showroom.tsx
import Link from "next/link";
import Image from "next/image";

interface ModelData {
  body: {
    name: string;
    description: string;
    enabled: "TRUE" | "FALSE";
  }
}

interface ImageData {
  body: Array<{
    id: string;
  }>;
}

async function getShowroomData() {
  const ids = [1, 2, 3];

  try {
    const modelPromises = ids.map(async (id) => {
      const infoRes = await fetch(
        `${process.env.NEXT_DEV_BASE_URL}/api/getModel/${id}`
      );
      if (!infoRes.ok) {
        throw new Error(
          `showroom: error fetching model ${id}: ${infoRes.statusText}`
        );
      }
      const data: ModelData = await infoRes.json();

      const imgRes = await fetch(
        `${process.env.NEXT_DEV_BASE_URL}/api/listImages/${id}?pageSize=1`
      );
      if (!imgRes.ok) {
        throw new Error(
          `showroom: error fetching images for model ${id}: ${imgRes.statusText}`
        );
      }
      const images: ImageData = await imgRes.json();
      if (!images.body || images.body.length === 0) {
        throw new Error(`showroom: no images found for model ${id}`);
      }
      const coverImgSrc = `https://drive.google.com/uc?export=view&id=${images.body[0].id}`;
      return { id, data, coverImgSrc };
    });

    return await Promise.all(modelPromises);
  } catch (error) {
    console.error('Error fetching showroom data:', error);
    throw error;
  }
}

export async function Showroom() {
  const models = await getShowroomData();

  return (
    <section id="showroom" className="py-16 bg-slate-100 pt-3">
      <h2 className="text-5xl font-bold underline text-black text-center p-16">
        Showroom
      </h2>
      <div className="text-center bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-28">
          {models.map((model) => {
            const isEnabled = model.data.body.enabled === "TRUE";
            return (
              <Link
                key={model.id}
                href={isEnabled ? `/model/${model.id}` : `#showroom`}
                className="cursor-pointer"
              >
                <div className="bg-white shadow-md rounded-lg p-10 transition-transform transform hover:scale-105">
                  <Image
                    src={model.coverImgSrc}
                    alt="Boat Model Cover Image"
                    className="rounded-lg mb-4 border-2 border-dark-blue max-h-[40vh]"
                    width={500}
                    height={500}
                  />
                  <h3 className="text-lg font-semibold text-black">
                    {model.data.body.name}
                  </h3>
                  <p className="text-gray-600 text-left">
                    {model.data.body.description}
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