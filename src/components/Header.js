"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    let currentPath = usePathname();
    return (
        
        <header className="bg-orange-500 py-5">
            <div className="container mx-auto flex gap-5 ">

            <Link href="/" className={currentPath === "/" ? "font-bold" : "font-normal"}>Home</Link>
            <Link href="/simpleApi/users" className={currentPath === "/simpleApi/users" ? "font-bold" : "font-normal"}>Simple API</Link> 
            </div>
        </header>
    );
};

export default Header;