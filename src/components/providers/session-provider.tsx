"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import type { PropsWithChildren } from "react";

export function SessionProvider({ children }: PropsWithChildren) {
  return (
    <NextAuthSessionProvider refetchOnWindowFocus refetchInterval={5 * 60}>
      {children}
    </NextAuthSessionProvider>
  );
}
