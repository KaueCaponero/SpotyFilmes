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
      <aside className="hidden lg:flex">
        <Image className="h-auto w-auto object-cover" src={login}/>
      </aside>
      <main className="flex flex-col mt-20 mx-auto rounded p-4 max-w-7xl"> 
        <Image className ="mx-auto" src={logo}/>
        <form className="flex flex-col gap-4 p-4 m-auto" onSubmit={handleSubmit(onSubmit)}>
          <InputText placeholder="Email: " register={register} name="email"/>
          <InputText placeholder="Senha: " register={register} name="senha" type="password"/>
          <Button type="button">Entrar</Button>
        </form>
      </main>
    </div>
    </>
  );
}