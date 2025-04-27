// components/withAuth.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { AuthService } from "@/services/auth-service";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      const authService = new AuthService();
      authService
        .getMe()
        .then(() => setIsChecking(false))
        .catch(() => router.replace("/sign-in"));
    }, [router]);

    if (isChecking) return null;
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
