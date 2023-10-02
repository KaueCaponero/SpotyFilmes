import { StarIcon, HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function DataRow({ filme }) {
    const estrelasPintadas = filme.classificacao;

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
                <img src={filme.url_imagem} alt={filme.nome} className="w-full h-80 object-cover rounded"/>
            </div>
            
            <div className="w-3/8 flex flex-col justify-center items-center gap-10">
                <h2 className="font-bold">{filme.nome}</h2>
                <p>{filme.descricao}</p>
                <p>{filme.categoria}</p>
                <div className="flex gap-1">
                    {pintarEstrelas()}
                </div>
            </div>
            <div className="w-1/8 flex flex-col justify-center items-center gap-10">
                <HeartIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" />
                <PencilIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" />
                <TrashIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" />
            </div>
        </div>
    );
}
