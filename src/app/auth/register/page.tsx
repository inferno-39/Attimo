import type { Metadata } from "next";
import { RegisterForm } from "./ui/register-form";

export const metadata: Metadata = {
  title: "Регистрация",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
