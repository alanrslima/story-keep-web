import React, { createContext, useState } from "react";

type MemoryContextProps = {
  name: string;
  setName(name: string): void;
  date: string;
  setDate(date: string): void;
  location: string;
  setLocation(location: string): void;
};

export const MemoryContext = createContext<MemoryContextProps>(
  {} as MemoryContextProps
);

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <MemoryContext.Provider
      value={{ name, date, location, setName, setLocation, setDate }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
