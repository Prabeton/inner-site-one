"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";

import { InputForm } from "@/reusecomponents/";
import { CheckboxWithLabel } from "@/reusecomponents/";
import { Button } from "@/reusecomponents/";
import ConfirmRegistration from "./ConfirmRegistration";
import registerSchema from "./registerSchema";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-30"
      onClick={onClick}
    />
  );
};
const Projects = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    nick: string;
    password: string;
    confirmPassword: string;
    email: string;
    terms: boolean;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    handleClickRegisterConfirm();
  };

  const handleClickRegisterConfirm = async () => {
    const isValidForm = await trigger();
    if (!isValidForm) {
    }
    openModal();
  };

  const t = useTranslations("Register");

  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full bg-center bg-cover">
      <div className="box-border absolute inset-0 flex items-center justify-center bg-dark-gray"></div>
    </div>
  );
};
export default Projects;
