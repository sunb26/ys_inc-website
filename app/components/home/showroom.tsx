import Link from 'next/link';
import Image from 'next/image'

export function Showroom() {
  const models = [
    { id: 1, name: 'Model 1', image: '/next.svg' },
    { id: 2, name: 'Model 2', image: '/next.svg' },
    { id: 3, name: 'Model 3', image: '/next.svg' },
  ];

  return (
    <section id="showroom" className="py-16 bg-slate-100 pt-3">
      <h2 className="text-5xl font-bold underline text-black text-center p-16">Showroom</h2>
      <div className="text-center bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-28">
          {models.map((model) => (
            <Link key={model.id} href={`/model/${model.id}`} className="cursor-pointer">
              <div className="bg-white shadow-md rounded-lg p-10 transition-transform transform hover:scale-105">
                <Image src={model.image} alt={model.name} className="rounded-lg mb-4" width={500} height={500}/>
                <h3 className="text-lg font-semibold text-black">{model.name}</h3>
                <p className="text-gray-600 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere, metus id tempus euismod, sem augue viverra ligula, id vestibulum elit sem ut nisl. Etiam odio magna, porttitor vitae hendrerit a, tincidunt in nulla. Quisque euismod accumsan tristique. Integer at efficitur ante. Nulla vitae feugiat ligula, sodales faucibus metus. Vivamus finibus, erat sed sodales aliquet, mi lorem suscipit augue, vitae bibendum mi odio eget ex. Vivamus auctor, justo a mollis sagittis, erat odio sollicitudin metus, eget elementum purus felis id nunc. Fusce non interdum est. Donec ullamcorper dignissim accumsan. Fusce ornare erat diam, nec consectetur libero placerat in. Cras pretium nibh eu purus convallis, at ornare ex varius. Vestibulum viverra scelerisque eros vel condimentum. Morbi accumsan massa diam, et gravida sapien euismod ac. Pellentesque feugiat, arcu id dictum pellentesque, nibh nibh laoreet dui, non ullamcorper lacus dolor quis arcu.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};