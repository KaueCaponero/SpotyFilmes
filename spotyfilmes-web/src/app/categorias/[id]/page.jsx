import NavBar from "@/components/navbar";
import FormEdit from "./form";

import { get } from "@/actions/categorias";

export default async function CategoriaEdit({ params }) {

    console.log("CategoriaEdit - params.id:", params.id);
    const categoria = await get(params.id);
    console.log("CategoriaEdit - categoria:", categoria);

    return (
        <>
            <NavBar />
            <FormEdit categoria={categoria} />
        </>
    );
}