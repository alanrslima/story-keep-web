// hooks/useAuth.ts
import { AuthService } from "@/services/auth-service";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      //   const decoded = jwtDecode(token); // you can type this as needed
      //   setUser(decoded);
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
    }
  }, []);

  const signInWithEmailAndPassword = useCallback(
    async (credentials: { email: string; password: string }) => {
      const authService = new AuthService();
      const { token } = await authService.signIn(credentials);
      localStorage.setItem("token", token);
      router.push("/");
    },
    [router]
  );

  const signUp = useCallback(
    async (data: { name: string; email: string; password: string }) => {
      const authService = new AuthService();
      await authService.signUp(data);
      await signInWithEmailAndPassword({
        email: data.email,
        password: data.password,
      });
    },
    [signInWithEmailAndPassword]
  );

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    router.push("/sign-in");
  }, [router]);

  return { user, signInWithEmailAndPassword, signUp, logOut };
}
