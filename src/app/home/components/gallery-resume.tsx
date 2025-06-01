import { Button, Headline } from "@/components/ui";
import { MediaServiceListOutput } from "@/services/contracts/media-service-contracts";
import Image from "next/image";

export type GalleryResumeProps = {
  media: MediaServiceListOutput[];
};

export function GalleryResume(props: GalleryResumeProps) {
  return (
    <div>
      <Headline
        title="Últimas memórias recebidas"
        rightComponent={<Button title="Ver todas" variant="minimal" />}
      />
      <div className="grid gap-1 grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
        {props.media.map((media) => (
          <div key={media.id} className="aspect-square">
            <Image
              alt="Image"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded max-w-xl"
              src={media.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
