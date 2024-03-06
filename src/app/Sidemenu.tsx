const SideMenu = () => {
    return (
    <div className="flex h-screen bg-gray-200">
        <div className="w-64 bg-white border-r">
        <div className="p-4">
            <ul>
            <li className="mb-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">Services</a>
            </li>
            <li className="mb-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">About</a>
            </li>
            <li className="mb-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        <div className="flex-1 p-4">
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
    </div>
    );
};

export default SideMenu;
