import NavBar from "@/components/navbar";

export default function PageDashboard() {
  return (
    <>
      <NavBar />
      <main className="container bg-gray-800 mt-10 mx-auto rounded p-4 max-w-7xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
      </main>
    </>
  );
}