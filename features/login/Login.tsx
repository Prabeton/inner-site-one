"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "./loginSchema";

import { InputForm } from "@/reusecomponents/";
import { CheckboxWithLabel } from "@/reusecomponents/";
import { Button } from "@/reusecomponents/";

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

  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full bg-[#185b78]">
      <div className="relative flex flex-col items-center justify-center gap-8 border-4 border-green-300 rounded-2xl w-[500px] h-[400px] bg-gray">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center h-full gap-6 p-4 space-y-1">
          <div className="w-full m-0 text-2xl h-11.25 font-normal text-green-300">
            Zaloguj się
          </div>
          <InputForm
            label="email"
            id="email"
            type="email"
            placeholder="email"
            register={register}
            errors={errors}
            className="w-96"
          />
          <InputForm
            label="Hasło"
            id="password"
            type="password"
            placeholder="Hasło"
            register={register}
            errors={errors}
            className="w-96"
          />
          <CheckboxWithLabel
            id="remember-me"
            name="rememberMe"
            label="Zapamiętaj mnie"
          />
          <div className="flex flex-col">
            <Button
              type="submit"
              variant="primary"
              className="flex items-center justify-center h-10 text-green-300">
              zaloguj się
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
