import { useQueryParams } from "@/hooks/use-query-params";
import { MemoryService } from "@/services/memory-service";
import React, { createContext, useEffect, useState } from "react";

type MemoryContextProps = {
  name: string;
  setName(name: string): void;
  startDate?: Date;
  setStartDate(date: Date): void;
  location: string;
  setLocation(location: string): void;
  coverPhoto?: string;
  planId: string;
  setPlanId(planId: string): void;
  onChangeCoverPhoto(photoString: string): void;
  clientSecret?: string;
  setClientSecret(clientSecret?: string): void;
};

export const MemoryContext = createContext<MemoryContextProps>(
  {} as MemoryContextProps
);

function base64ToBlob(base64: string, contentType = "") {
  const byteCharacters = atob(base64.split(",")[1]);
  const byteArrays = [];
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }
  const byteArray = new Uint8Array(byteArrays);
  return new Blob([byteArray], { type: contentType });
}

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [planId, setPlanId] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [clientSecret, setClientSecret] = useState<string>();

  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  useEffect(() => {
    if (screenParams.id) {
      const memoryService = new MemoryService();
      memoryService
        .detail({ memoryId: screenParams.id })
        .then((res) => {
          setName(res.name || "");
          setLocation(res.address || "");
          setStartDate(res.startDate ? new Date(res.startDate) : undefined);
          setCoverPhoto(res.coverImage?.url || "");
          setPlanId(res.plan?.id || "");
        })
        .catch(console.error);
    }
  }, [screenParams.id]);

  const generateFile = (photoString: string): File | undefined => {
    const contentType = photoString.split(";")[0].split(":")[1];
    const blob = base64ToBlob(photoString, contentType);
    return new File([blob], "image.png", { type: contentType });
  };

  function onChangeCoverPhoto(photoString: string) {
    setCoverPhoto(photoString);
    const memoryService = new MemoryService();
    memoryService.update({
      file: generateFile(photoString),
      id: screenParams.id,
    });
  }

  return (
    <MemoryContext.Provider
      value={{
        name,
        startDate,
        location,
        clientSecret,
        coverPhoto,
        planId,
        setName,
        setLocation,
        setStartDate,
        setPlanId,
        onChangeCoverPhoto,
        setClientSecret,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
