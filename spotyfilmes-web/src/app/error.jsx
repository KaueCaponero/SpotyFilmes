'use client'

import Button from "@/components/button";

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

export default function Error({error}) {
    return (
        <>
            <main className="flex flex-col gap-2 items-start container bg-black mt-10 mx-auto rounded p-4 max-w-lg">
                <h2>Um erro aconteceu.</h2>
                <p>{error.message}</p>
                <Button href="/dashboard" icon={<ArrowLongLeftIcon className="h-6 w-6" />}>Voltar para Home</Button>
            </main>
        </>
    );
}