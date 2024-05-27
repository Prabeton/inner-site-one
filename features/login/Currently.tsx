"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "./loginSchema";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { InputForm } from "@/reusecomponents/";
import { CheckboxWithLabel } from "@/reusecomponents/";
import { Button } from "@/reusecomponents/";
import { GitHubIcon } from "@/icon/";

const Login = () => {
  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const t = useTranslations("Login");

  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full bg-center bg-cover">
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-dark-gray"></div>
    </div>
  );
};
export default Login;
