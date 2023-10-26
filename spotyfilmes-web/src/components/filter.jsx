import InputText from "./input-text";
import Button from "@/components/button";

import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/solid';

export default function Filter() {
    return (
        <>
            <main className="flex justify-end bg-black rounded p-1 mt-10 mx-auto max-w-7xl">
                <div className="m-2">
                    <InputText placeholder="Buscar: " />
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