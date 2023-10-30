import NavBar from "@/components/navbar";
import Filter from "@/components/filter"
import Button from "@/components/button";
import DataRow from "@/app/filmes/datarow"

import { PlusIcon } from '@heroicons/react/24/solid';

async function carregarDados() {
    const url = "http://localhost:8080/filmes"
    const resp = await fetch(url)

    if (resp.status !== 200) {
        toast.error("Erro ao buscar dados dos filmes.")
        return
    }

    return await resp.json();
}

export default async function PageFilmes() {

    const filmes = await carregarDados();

    const filmesPorLinha = 3;

    const filmesDivididos = filmes.content.reduce((acumulador, filme, index) => {
        const linhaAtual = Math.floor(index / filmesPorLinha);

        if (!acumulador[linhaAtual]) {
            acumulador[linhaAtual] = [];
        }

        acumulador[linhaAtual].push(filme);
        return acumulador;
    }, []);

    return (
        <>
            <NavBar />
            <Filter />
            <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-7xl">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Filmes</h2>
                    <Button href="/filmes/new" icon={<PlusIcon className="h-6 w-6" />}>
                        Cadastrar Filme
                    </Button>
                </div>
                <div className="space-y-2">
                    {filmesDivididos.map((linha, index) => (
                        <div key={index} className="flex space-x-2">
                            {linha.map((filme) => (
                                <div key={filme.id} className="w-1/3 p-2">
                                    <DataRow filme={filme} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}