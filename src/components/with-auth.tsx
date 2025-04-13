// components/withAuth.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/sign-in");
      } else {
        setIsChecking(false);
      }
    }, [router]);

    if (isChecking) return null;
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
