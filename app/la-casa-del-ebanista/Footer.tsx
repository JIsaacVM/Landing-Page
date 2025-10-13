import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tu_usuario' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/tu_pagina' },
];

const navigationLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestra Colección', href: '/coleccion' },
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-amber-50 border-t border-amber-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Sección de la Marca */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-serif font-bold text-[#B45309]">
                            La Casa del Ebanista
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Creando piezas únicas de madera con pasión y artesanía desde hace más de 20 años.
                        </p>
                    </div>

                    {/* Sección de Navegación */}
                    <div>
                        <h3 className="text-lg font-semibold font-serif text-gray-800">Navegación</h3>
                        <ul className="mt-4 space-y-2">
                            {navigationLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-[#B45309] transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div>
                        <h3 className="text-lg font-semibold font-serif text-gray-800">Contacto</h3>
                        <ul className="mt-4 space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="flex-shrink-0 mt-1 text-[#B45309]" />
                                <span>C. Francisco I. Madero, Centro, León, Gto.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-[#B45309]" />
                                <a href="mailto:contacto@lacasa.com" className="hover:text-[#B45309] transition-colors">
                                    contacto@lacasa.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-[#B45309]" />
                                <a href="tel:+524771234567" className="hover:text-[#B45309] transition-colors">
                                    +52 477 123 4567
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección de Redes Sociales */}
                    <div>
                        <h3 className="text-lg font-semibold font-serif text-gray-800">Síguenos</h3>
                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#B45309] transition-colors"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Barra de Copyright */}
                <div className="mt-12 border-t border-amber-200 pt-8 text-center">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} La Casa del Ebanista. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}