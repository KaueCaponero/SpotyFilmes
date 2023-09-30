import Button from "@/components/button";

import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/solid';

export default function Filter() {
    return (
        <>
            <main className="flex justify-end bg-black rounded p-1 mt-10 mx-auto max-w-7xl">
                <div className="m-2">
                    <label htmlFor="filterInput" />
                    <input type="text" id="filterInput" placeholder="Buscar:" className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500 placeholder-orange-500" />
                </div>
                <div className="flex justify-between m-2 gap-4 items-center">
                    <Button icon={<ChevronDownIcon className="h-6 w-6" />}>
                        Ordenar
                    </Button>
                    <Button icon={<FunnelIcon className="h-6 w-6" />}>
                        Filtrar
                    </Button>
                </div>
            </main>
        </>
    );
}