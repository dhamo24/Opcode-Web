"use client"
import React, { useState, useEffect } from "react";

const SideMenu = () => {
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
    const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
        window.scrollY >= sectionTop - 50 &&
        window.scrollY < sectionTop + sectionHeight - 50
        ) {
        setActiveSection(section.getAttribute("id"));
        }
    });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

return (
    <div className="fixed top-16 h-screen w-64 dark:bg-black bg-white border-r">
    <div className="p-20">
        <ul>
        <li className="mb-4">
            <a href="#home" className={`text-black-600 dark:text-white ${activeSection === "home" ? "font-bold" : "" }`}>Home</a>
        </li>
        <li className="mb-4">
            <a href="#service" className={`text-black-600 dark:text-white ${activeSection === "service" ? "font-bold" : "" }`}>Service</a>
        </li>
        <li className="mb-4">
            <a href="#about" className={`text-black-600 dark:text-white ${ activeSection === "about" ? "font-bold" : "" }`}>About</a>
        </li>
        <li className="mb-4">
            <a href="#contact" className={`text-black-600 dark:text-white ${ activeSection === "contact" ? "font-bold" : ""}`}>Contact</a>
        </li>
        </ul>
    </div>
    </div>
);
};

export default SideMenu;




