import Link from 'next/link'
import React from 'react'
export default function Header(){
    return (
        <div>
            <nav>
            <Link href="/">Inicio</Link>
            <Link href="pages/Produtos">Produtos</Link>
            </nav>
        </div>
    )
}