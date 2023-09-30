import NavBar from "@/components/navbar";
import Filter from "@/components/filter"

export default function Home() {
  return (
    <>
    <NavBar />
    <Filter />
    <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-7xl"> 
      <h2 className="text-xl font-bold">Home</h2>
    </main>
    </>
  );
}