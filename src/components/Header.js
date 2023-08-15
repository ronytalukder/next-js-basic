import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        
        <header className="bg-orange-500 py-5">
            <div className="container mx-auto flex gap-5 ">
            <Link href="/">Home</Link>
            <Link href="/simpleApi/users">Simple API</Link>
            </div>
        </header>
    );
};

export default Header;