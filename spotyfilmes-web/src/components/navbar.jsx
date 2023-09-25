import Link from "next/link";

export default function NavBar() {
    return (
        <nav className=" flex justify-between bg-black p-6">
            <ul className="flex items-end gap-14">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-orange-300 font-bold">SpotyFilmes</h1>
                    </Link>
                </li>

                <li>
                    <Link href="/dashboard" className="hover:text-orange-100">Dashboard</Link>
                </li>

                <li>
                    <Link href="/categorias" className="hover:text-orange-100">Categorias</Link>
                </li>

                <li>
                    <Link href="/filmes" className="hover:text-orange-100">Filmes</Link>
                </li>
            </ul>

            <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/111543330?v=4" alt="img_perfil" />
            </div>
        </nav>
    )
}