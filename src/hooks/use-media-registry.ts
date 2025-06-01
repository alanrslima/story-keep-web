import { MediaServiceListOutput } from "@/services/contracts/media-service-contracts";
import { MediaRegistryService } from "@/services/media-registry-service";
import { useEffect, useState } from "react";

export function useMediaRegistry() {
  const [data, setData] = useState<MediaServiceListOutput[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const listAll = async () => {
    const mediaRegistryService = new MediaRegistryService();
    mediaRegistryService
      .list()
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    listAll();
  }, []);

  return { data, isLoading };
}
