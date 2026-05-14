"use client";

import type { ReactNode } from "react";
import { LoginForm } from "./login-form";

export function LoginCard({ footer }: { footer: ReactNode }) {
  return <LoginForm footer={footer} />;
}
