const categorias = [
    { id: 1, nome: 'Categoria 1' },
    { id: 2, nome: 'Categoria 2' },
    { id: 3, nome: 'Categoria 3' },
];

export default function SelectCategoria({ name, placeholder }) {
    return (
        <div className="flex flex-col gap-1">
            <select name={name} className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500  placeholder-orange-500">
                <option value="">
                    {placeholder}
                </option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}
