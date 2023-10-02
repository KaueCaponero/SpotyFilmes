import NavBar from "@/components/navbar";
import Filter from "@/components/filter"
import Button from "@/components/button";
import DataRow from "@/app/categorias/datarow"

import { PlusIcon } from '@heroicons/react/24/solid';

async function carregarDados() {
  const url = "http://localhost:8080/categorias"
  const resp = await fetch(url)

  if (resp.status !== 200) {
    toast.error("Erro ao buscar dados das categorias.")
    return
  }
  
  return await resp.json();
}

export default async function PageCategorias() {

  const categorias = await carregarDados();

  return (
    <>
      <NavBar />
      <Filter />
      <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-7xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Categorias</h2>
          <Button href="/categorias/new" icon={<PlusIcon className="h-6 w-6" />}>
            Cadastrar Categoria
          </Button>
        </div>
        <div className="space-y-2">
          {categorias.map(categoria => <DataRow key={categoria.id} categoria={categoria} />)}
        </div>
      </main>
    </>
  );
}