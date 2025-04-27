import { MemoryService } from "@/services/memory-service";
import React, { createContext, useState } from "react";

type MemoryContextProps = {
  name: string;
  setName(name: string): void;
  startDate?: Date;
  setStartDate(date: Date): void;
  location: string;
  setLocation(location: string): void;
  coverFoto?: string;
  setCoverPhoto(coverPhoto: string): void;
  packageId: string;
  setPackageId(packageId: string): void;
  create(): Promise<{ id: string }>;
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
  // const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [packageId, setPackageId] = useState("");
  const [coverFoto, setCoverPhoto] = useState("");

  const generateFile = (): File | undefined => {
    if (!coverFoto) return undefined;
    const contentType = coverFoto.split(";")[0].split(":")[1];
    const blob = base64ToBlob(coverFoto, contentType);
    return new File([blob], "image.png", { type: contentType });
  };

  const create = async (): Promise<{ id: string }> => {
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
        coverFoto,
        packageId,
        setName,
        setLocation,
        setStartDate,
        setCoverPhoto,
        setPackageId,
        create,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
