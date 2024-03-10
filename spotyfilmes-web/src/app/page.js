"use client"

import Image from "next/image";
import { useForm } from "react-hook-form"

import imglogin from "../assets/imglogin.png"
import imglogo from "../assets/imglogo.png"
import InputText from "@/components/input-text";
import Button from "@/components/button";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {

  const { push } = useRouter()

  const { register, handleSubmit } = useForm()

  const { login } = useContext(AuthContext)

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha)

    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/dashboard")
  }

  return (
    <>
    <div className="bg-black h-screen flex">
      <main className="flex flex-col items-center justify-center h-full mx-auto rounded p-4 max-w-md">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Image className="mx-auto" src={imglogo} alt="Logo"/>
          </div>
          <InputText placeholder="Email: " register={register} name="email"/>
          <InputText placeholder="Senha: " register={register} name="senha" type="password"/>
          <Button type="submit">Entrar</Button>
        </form>
      </main>
      <aside className="hidden lg:flex">
        <Image className="h-auto w-auto object-cover" src={imglogin} alt="Login"/>
      </aside>
    </div>
    </>
  );
}