const Home = () => {
return (
    <main>
    <div className="flex-1 p-4 dark:text-white">
        <section id="home">
        <h1 className="text-2xl h-[100vh] w-full flex justify-center items-center font-semibold">Welcome to Opcode Technology</h1>
        </section>
        <section id="service">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">Services Opcode</h1>
        </section>
        <section id="about">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">About Opcode</h1>
        </section>
        <section id="contact">
        <h1 className="text-2xl  h-[100vh] w-full flex justify-center items-center font-semibold">Contact Opcode</h1>
        </section>
    </div>
    </main>
);
};

export default Home;