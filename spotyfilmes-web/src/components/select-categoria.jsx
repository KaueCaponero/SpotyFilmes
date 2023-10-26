export default function SelectCategoria({ name, placeholder }) {
    return (
        <div className="flex flex-col gap-1">
            <select name={name} className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500  placeholder-orange-500">
                <option value="">
                    {placeholder}
                </option>
                <option value="1">Opção 1</option>
                <option value="2">Opção 2</option>
            </select>
        </div>
    );
}
