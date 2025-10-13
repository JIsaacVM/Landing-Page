'use client'; // Necesario para usar hooks como useState

import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    // Estado para controlar la visibilidad del menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Contenedor principal para centrar la barra en la página
        <div className="flex justify-center p-4">

            {/* La barra de navegación con el efecto cristal y posición relativa para el menú */}
            <nav className="fixed z-30 top-4 flex items-center justify-between w-full max-w-4xl px-4 sm:px-6 py-3 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 shadow-lg">

                {/* Sección del Título/Logo */}
                <div className="flex items-center">
                    <Image src="/img/LaCasaDelEbanista/logo.webp" alt="Logo" width={50} height={50} />
                    <p className="hidden sm:block ml-3 text-xl md:text-2xl font-bold text-slate-600 font-serif">
                        La Casa del Ebanista
                    </p>
                </div>

                {/* --- MENÚ PARA ESCRITORIO (md y superior) --- */}
                <div className="hidden md:flex items-center gap-6 text-slate-600 font-semibold">
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

            </nav>

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
        </div>
    )
}