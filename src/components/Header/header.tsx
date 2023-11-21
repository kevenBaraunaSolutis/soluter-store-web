import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-50 shadow flex content-between">
      <div className='flex w-full min-h-12 text-white bg-gradient-linear'>
        <div className="container mx-auto px-4 py-6">
          <h1 className=" font-bold">Soluter Store</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex divide-x text-xl">
            <Link href='/' className="px-4 py-2">Home</Link>
            <Link href='/Products' className="px-4 py-2">Produtos</Link>
            <Link href='/Cart' className="px-4 py-2">Carrinho</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};