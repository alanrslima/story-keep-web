import { MemoryServiceCreateOutput } from "@/services/contracts/memory-service-contracts";
import { MemoryService } from "@/services/memory-service";
import React, { createContext, useState } from "react";

type MemoryContextProps = {
  name: string;
  setName(name: string): void;
  startDate?: Date;
  setStartDate(date: Date): void;
  location: string;
  setLocation(location: string): void;
  coverPhoto?: string;
  setCoverPhoto(coverPhoto: string): void;
  packageId: string;
  setPackageId(packageId: string): void;
  create(): Promise<MemoryServiceCreateOutput>;
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
  const [packageId, setPackageId] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [clientSecret, setClientSecret] = useState<string>();

  const generateFile = (): File | undefined => {
    if (!coverPhoto) return undefined;
    const contentType = coverPhoto.split(";")[0].split(":")[1];
    const blob = base64ToBlob(coverPhoto, contentType);
    return new File([blob], "image.png", { type: contentType });
  };

  const create = async (): Promise<MemoryServiceCreateOutput> => {
    const memoryService = new MemoryService();
    return await memoryService.create({
      address: location,
      startDate,
      name,
      packageId,
      file: generateFile(),
    });
  };

  return (
    <MemoryContext.Provider
      value={{
        name,
        startDate,
        location,
        clientSecret,
        coverPhoto,
        packageId,
        setName,
        setLocation,
        setStartDate,
        setCoverPhoto,
        setPackageId,
        create,
        setClientSecret,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
