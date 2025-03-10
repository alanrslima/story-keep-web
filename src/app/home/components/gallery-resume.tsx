import { Headline } from "@/components/ui";
import Image from "next/image";

export function GalleryResume() {
  const registers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <Headline title="Últimas memórias recebidas" />
      <div className="grid gap-1 grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
        {registers.map((register) => (
          <div key={register} className="aspect-square">
            <Image
              alt="Image"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded max-w-xl"
              src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
