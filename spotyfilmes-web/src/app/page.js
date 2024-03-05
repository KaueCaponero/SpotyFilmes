"use client"

import Image from "next/image";
import { useForm } from "react-hook-form"

import login from "../assets/login.png"
import logo from "../assets/logo.png"
import InputText from "@/components/input-text";
import Button from "@/components/button";

export default function Home() {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <div className="bg-black h-screen flex">
      <main className="flex flex-col items-center justify-center h-full mx-auto rounded p-4 max-w-md">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Image className="mx-auto" src={logo} alt="Logo"/>
          </div>
          <InputText placeholder="Email: " register={register} name="email"/>
          <InputText placeholder="Senha: " register={register} name="senha" type="password"/>
          <Button type="submit">Entrar</Button>
        </form>
      </main>
      <aside className="hidden lg:flex">
        <Image className="h-auto w-auto object-cover" src={login} alt="Login"/>
      </aside>
    </div>
    </>
  );
}