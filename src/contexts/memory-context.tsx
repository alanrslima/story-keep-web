import { MemoryService } from "@/services/memory-service";
import React, { createContext, useState } from "react";

type MemoryContextProps = {
  name: string;
  setName(name: string): void;
  date: string;
  setDate(date: string): void;
  location: string;
  setLocation(location: string): void;
  coverFoto?: string;
  setCoverPhoto(coverPhoto: string): void;
  time?: string;
  setTime(time: string): void;
  packageId?: string;
  setPackageId(packageId: string): void;
  create(): Promise<void>;
};

export const MemoryContext = createContext<MemoryContextProps>(
  {} as MemoryContextProps
);

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [packageId, setPackageId] = useState("");
  const [coverFoto, setCoverPhoto] = useState("");

  const create = async () => {
    const memoryService = new MemoryService();
    await memoryService.create({
      address: location,
      date: new Date(),
      name,
      packageId,
    });
  };

  return (
    <MemoryContext.Provider
      value={{
        name,
        date,
        location,
        coverFoto,
        time,
        packageId,
        setName,
        setLocation,
        setDate,
        setCoverPhoto,
        setTime,
        setPackageId,
        create,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
