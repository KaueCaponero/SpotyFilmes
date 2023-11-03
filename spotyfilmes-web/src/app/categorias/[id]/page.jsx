import NavBar from "@/components/navbar";
import FormEdit from "./form";

import { get } from "@/actions/categorias";

export default async function CategoriaEdit({ params }) {

    const categoria = await get(params.id);

    return (
        <>
            <NavBar />
            <FormEdit categoria={categoria} />
        </>
    );
}