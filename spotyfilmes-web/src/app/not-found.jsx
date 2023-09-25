import Button from "@/components/button";

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
    return (
      <>
        <main className="flex flex-col gap-2 items-start container bg-gray-800 mt-10 mx-auto rounded p-4 max-w-lg">
          <h2>Página não encontrada.</h2>
          <Button href="/" icon={<ArrowLongLeftIcon className="h-6 w-6"/>}>Voltar para Home</Button>
        </main>
      </>
    );
  }