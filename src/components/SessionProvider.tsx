"use client";

import React from "react";
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

export const SessionProvider = ({
  children,
  session,
}: SessionProviderProps) => {
  return (
    <div>
      <Provider session={session}>{children}</Provider>
    </div>
  );
};
