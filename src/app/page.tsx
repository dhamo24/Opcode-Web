import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="flex-1 p-4 dark:text-white">
        <section id="card1">
        <h1 className="text-2xl h-[100vh] w-full flex justify-center items-center font-semibold">Welcome to Opcode Technology</h1>
        </section>
        <section id="card2">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">Services Opcode</h1>
        </section>
        <section id="card2">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">About Opcode</h1>
        </section>
        <section id="card2">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">Contect Opcode</h1>
        </section>
        </div>

    </main>
  );
}
