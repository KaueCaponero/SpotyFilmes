import NavBar from "@/components/navbar";
import FormEdit from "./form";

import { get } from "@/actions/filmes";

export default async function FilmeEdit({ params }) {

    const filme = await get(params.id);

    return (
        <>
            <NavBar />
            <FormEdit filme={filme} />
        </>
    );
}