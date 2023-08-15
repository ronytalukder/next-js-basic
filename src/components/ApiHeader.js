import Link from "next/link";
import React from "react";

const ApiHeader = () => {
  return (
    <header className="bg-purple-700 py-5">
      <div className="container mx-auto flex gap-5">
        <Link href="/" className="text-yellow-400 text-lg font-bold">
          Back To Home Page
        </Link>
        <Link href="/simpleApi/users" className="text-white text-lg font-bold">
          Users
        </Link>
      </div>
    </header>
  );
};

export default ApiHeader;
