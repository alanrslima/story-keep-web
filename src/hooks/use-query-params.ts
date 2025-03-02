"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a query param value
  const getQueryParam = (param: string): string | null => {
    return searchParams.get(param);
  };

  const getQueryParams = () => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  // Add or update a query param
  const setQueryParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Remove a query param
  const removeQueryParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { getQueryParam, setQueryParam, removeQueryParam, getQueryParams };
};
