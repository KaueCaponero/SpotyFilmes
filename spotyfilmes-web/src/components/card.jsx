import { StarIcon, HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Card({ categoria }) {
    const estrelasPintadas = categoria.classificacao;

    const pintarEstrelas = () => {
        const estrelas = [];
        for (let i = 0; i < 5; i++) {
            if (i < estrelasPintadas) {
                estrelas.push(<StarIcon className="h-6 w-6 text-orange-500" key={i} />);
            } else {
                estrelas.push(<StarIcon className="h-6 w-6 text-orange-200" key={i} />);
            }
        }
        return estrelas;
    };

    return (
        <div className="flex justify-between mt-5 gap-2 p-2 rounded max-w-md">
            <div className="w-1/2">
                <img src={categoria.imagem} alt={categoria.nome} className="w-full h-80 object-cover rounded"/>
            </div>
            
            <div className="w-3/8 flex flex-col justify-center items-center gap-10">
                <h2 className="font-bold text-orange-500">{categoria.nome}</h2>
                <p>{categoria.descricao}</p>
                <div className="flex gap-1">
                    {pintarEstrelas()}
                </div>
            </div>
            <div className="w-1/8 flex flex-col justify-center items-center gap-10">
                <HeartIcon className="h-6 w-6 text-orange-500 hover:text-orange-700 transition-colors" />
                <PencilIcon className="h-6 w-6 text-orange-500 hover:text-orange-700 transition-colors" />
                <TrashIcon className="h-6 w-6 text-orange-500 hover:text-orange-700 transition-colors" />
            </div>
        </div>
    );
}
