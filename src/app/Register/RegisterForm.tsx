"use client";
import { Input, Button, Link, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "@/validation/resgisterValidation";
import { onRegisterSubmitService } from "./RegisteService";
import toast from "react-hot-toast";
import ModalLogin from "@/components/Modal";
import { useState } from "react";

export default function RegisterForm() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(false);
  function estado() {
    setState(true);
    onOpen();
  }
  function estado2() {
    setState(false);
    onOpen();
  }

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegister,
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const onRegisterSubmit = async (data: any) => {
    try {
      const result = await onRegisterSubmitService(data);
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        resetRegister();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-blue-500 text-center font-InterBold sm:text-3xl">REGISTER</h1>
      <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
        <h1 className="pt-2 pl-1">Name</h1>
        <Input
          autoFocus
          placeholder="Name"
          variant="underlined"
          {...registerRegister("name", {
            required: true,
          })}
        />
        {registerErrors.name && (
          <p className="text-red-500">{registerErrors.name.message}</p>
        )}
        <h1 className="pt-2 pl-1">Last name</h1>
        <Input
          autoFocus
          placeholder="Last name"
          variant="underlined"
          {...registerRegister("last_name", {
            required: true,
          })}
        />
        {registerErrors.last_name && (
          <p className="text-red-500">{registerErrors.last_name.message}</p>
        )}
        <h1 className="pt-2 pl-1">Email</h1>
        <Input
          autoFocus
          placeholder="Email"
          variant="underlined"
          {...registerRegister("email", {
            required: true,
          })}
        />
        {registerErrors.email && (
          <p className="text-red-500">{registerErrors.email.message}</p>
        )}
        <h1 className="pt-2 pl-1">Password</h1>
        <Input
          autoFocus
          variant="underlined"
          placeholder="........."
          type="password"
          {...registerRegister("password", {
            required: true,
          })}
        />
        {registerErrors.password && (
          <p className="text-red-500">{registerErrors.password.message}</p>
        )}
        <h1 className="pt-2 pl-1">Confirm Password</h1>
        <Input
          type="password"
          autoFocus
          variant="underlined"
          placeholder="........."
          {...registerRegister("confirmPassword", {
            required: true,
          })}
        />
        {registerErrors.confirmPassword && (
          <p className="text-red-500">{registerErrors.confirmPassword.message}</p>
        )}

        <div className="w-full flex justify-center">
          <Button
            className="mt-10 w-full sm:max-w-xl"
            radius="full"
            color="primary"
            variant="shadow"
            type="submit"
          >
            Create Account
          </Button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center mt-3 p-5 sm:flex-row sm:justify-between">
        <h1>© 2024 Skylight Lending, LLC</h1>
        <div className="cursor-pointer">
          <Link onPress={estado}>Privacy Policy</Link> |{" "}
          <Link onPress={estado2}>Terms of Service</Link>
        </div>
      </div>
      <ModalLogin isOpen={isOpen} onClose={onClose} state={state} />
    </>
  );
}
