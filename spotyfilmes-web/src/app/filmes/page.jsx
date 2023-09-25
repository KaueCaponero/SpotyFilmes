import Button from "@/components/button";
import NavBar from "@/components/navbar";

import { PlusIcon } from '@heroicons/react/24/solid';

export default function PageFilmes() {
  return (
    <>
      <NavBar />
      <main className="container bg-gray-800 mt-10 mx-auto rounded p-4 max-w-7xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Filmes</h2>
          <Button href="/filmes/new" icon={<PlusIcon className="h-6 w-6" />}>
            Cadastrar Filme
          </Button>
        </div>
      </main>
    </>
  );
}