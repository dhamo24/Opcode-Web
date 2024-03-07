
import React from "react";

const SideMenu = () => {
return (
    <div className="fixed top-16 h-screen w-64 dark:bg-black bg-white border-r">
    <div className="p-20">
        <ul>
        <li className="mb-4">
            <a href="#" className="text-black-600 dark:text-white">Services</a>
        </li>
        <li className="mb-4">
            <a href="#" className="text-black-600 dark:text-white">About</a>
        </li>
        <li className="mb-4">
            <a href="#" className="text-black-600 dark:text-white">Contact</a>
        </li>
        </ul>
    </div>
    </div>
);
};

export default SideMenu;
