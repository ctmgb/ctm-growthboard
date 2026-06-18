

// FILE: context/AuthContext.tsx

"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import type { AuthUser } from "@/types";

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [isLoading] = useState(false);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,

      isAuthenticated: user !== null,

      isLoading,

      login: (authUser: AuthUser) => {
        setUser(authUser);
      },

      logout: () => {
        setUser(null);
      },
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider."
    );
  }

  return context;
}

export default AuthContext;

