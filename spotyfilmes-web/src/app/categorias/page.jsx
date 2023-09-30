import NavBar from "@/components/navbar";
import Filter from "@/components/filter"
import Button from "@/components/button";
import Card from "@/components/card"

import { PlusIcon } from '@heroicons/react/24/solid';

export default function PageCategorias() {

  const categoria_teste = {
    nome: "Guardioes da Galaxia",
    imagem: "https://proxy.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png",
    descricao: "testsa dsdasdausid bauisbdiab sdibaiusdbiuasbd dfjiosdjfio sdiofh soidfjhios dfoisdhjofis iodf soidiosdf iosd foisd fios jdfios dofj oisd foisd jfiodiuabsidub auisbduibaisubd iuabsiudbe",
    classificacao: 3
  };

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
        <Card categoria={categoria_teste}/>
      </main>
    </>
  );
}