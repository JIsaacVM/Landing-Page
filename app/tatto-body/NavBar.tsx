'use client'; // Necesario para usar hooks como useState

import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    // Estado para controlar la visibilidad del menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className=" z-20 fixed flex items-center justify-center w-full">

            <nav className=" m-4 rounded-4xl  w-full items-center justify-center p-4 bg-[#282828]/80 backdrop-blur-3xl">
                <div className="flex items-center justify-center">
                    <Image src="/img/tatto-body/logo-w.webp" alt="Logo" width={75} height={75} />
                    <p className="hidden sm:block ml-3 text-xl md:text-2xl font-bold text-[#DCDCDC] rye">
                        Tatto Centro Ink Studio
                    </p>
                    <Image className="md:block hidden " src="/img/tatto-body/logo-w.webp" alt="Logo" width={75} height={75} />
                </div>

                {/* --- MENÚ PARA ESCRITORIO (md y superior) --- */}
                <div className="hidden md:flex items-center justify-center gap-6 text-slate-600 font-semibold">
                    <a href="#" className="hover:text-slate-400 transition-colors">Nosotros</a>
                    <a href="#" className="hover:text-slate-400 transition-colors">Galería</a>
                    <a href="#" className="hover:text-slate-400 transition-colors">Contacto</a>
                </div>

                {/* --- BOTÓN DE HAMBURGUESA (visible en móvil) --- */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none">
                        {isMenuOpen ? (
                            // Ícono de "X" para cerrar
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Ícono de hamburguesa
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* --- MENÚ DESPLEGABLE PARA MÓVIL --- */}
                {isMenuOpen && (
                    <div className="md:hidden fixed z-20 top-20 w-full max-w-sm px-4">
                        <div className="flex flex-col items-center gap-4 py-4 rounded-xl bg-white/20 backdrop-blur-3xl border border-white/20 shadow-xl">
                            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors py-2">Nosotros</a>
                            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors py-2">Galería</a>
                            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors py-2">Contacto</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}