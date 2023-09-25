import Button from "@/components/button";
import NavBar from "@/components/navbar";

import { PlusIcon } from '@heroicons/react/24/solid';

export default function PageCategorias() {
  return (
    <>
      <NavBar />
      <main className="container bg-gray-800 mt-10 mx-auto rounded p-4 max-w-7xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Categorias</h2>
          <Button href="/categorias/new" icon={<PlusIcon className="h-6 w-6" />}>
            Cadastrar Categoria
          </Button>
        </div>
      </main>
    </>
  );
}