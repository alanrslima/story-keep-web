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
};

export const MemoryContext = createContext<MemoryContextProps>(
  {} as MemoryContextProps
);

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [coverFoto, setCoverPhoto] = useState("");

  return (
    <MemoryContext.Provider
      value={{
        name,
        date,
        location,
        coverFoto,
        time,
        setName,
        setLocation,
        setDate,
        setCoverPhoto,
        setTime,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
