"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const contactInfo = {
    name: "Carlos Aguirre",
    instagram: { handle: "optica_black", url: "https://instagram.com/optica_black" },
    facebook: { name: "Óptica Black", url: "https://facebook.com/opticablack" },
    email: "contacto@opticablack.com",
    address: "C. Francisco I. Madero, Centro, León, Gto.",
    logo: "/img/LaCasaDelEbanista/logo-bg.webp"
};

const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.579439249013!2d-101.6811598855989!3d21.12984198594411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe1853500241%3A0x8925f3851a546a3!2sC.%20Francisco%20I.%20Madero%2C%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1668540441996!5m2!1ses-419!2smx"; // <-- ¡IMPORTANTE! Asegúrate de que esta URL sea válida y obtenida de Google Maps.

export default function ContactFlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
            {/* Encabezado de la sección */}
            <div className="text-center mb-12 max-w-2xl">
                <p className="text-[#B45309] font-extrabold text-4xl font-serif mb-4">
                    CONTÁCTANOS O VISÍTANOS
                </p>
                <p className="text-lg text-gray-700">
                    Si te gusta nuestro trabajo, puedes ayudarnos a hacerlo más visible. Si tienes alguna pregunta, no dudes en contactarnos o visitarnos en nuestra ubicación.
                </p>
            </div>

            {/* Contenedor principal de la tarjeta */}
            <div className="w-full max-w-4xl h-[400px] [perspective:1000px] relative"> {/* Ajusté h-[] para más espacio */}
                <div
                    onClick={toggleFlip}
                    className={`relative h-full w-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] 
                                ${isFlipped ? "[transform:rotateY(180deg)]" : ""} 
                                rounded-lg shadow-xl border border-amber-200 hover:shadow-2xl transition-shadow`}
                >
                    {/* Cara Frontal - Contacto */}
                    <div className="absolute inset-0 rounded-lg [backface-visibility:hidden]">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 bg-amber-100/90 backdrop-blur-md rounded-lg shadow-lg h-full text-gray-800">
                            <div className="flex-1 text-center lg:text-left space-y-6">
                                <h2 className="text-5xl font-extrabold tracking-tight font-serif bg-gradient-to-r from-[#B45309] to-[#FFD700] bg-clip-text text-transparent">
                                    CONTACTO
                                </h2>
                                <p className="text-3xl font-semibold text-neutral-700">{contactInfo.name}</p>

                                <nav className="space-y-4 text-lg" aria-label="Enlaces de Contacto">
                                    <a
                                        href={contactInfo.instagram.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-[#B45309] transition-colors group justify-center lg:justify-start"
                                    >
                                        <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.instagram.handle}</span>
                                    </a>
                                    <a
                                        href={contactInfo.facebook.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-[#B45309] transition-colors group justify-center lg:justify-start"
                                    >
                                        <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.facebook.name}</span>
                                    </a>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-3 text-gray-700 hover:text-[#B45309] transition-colors group justify-center lg:justify-start"
                                    >
                                        <Mail size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.email}</span>
                                    </a>
                                </nav>
                            </div>

                            <div className="flex-shrink-0 mt-8 lg:mt-0">
                                <Image
                                    className="rounded-full shadow-lg border-4 border-amber-200/50"
                                    src={contactInfo.logo}
                                    alt={`Logo de ${contactInfo.name}`}
                                    width={200} // Ajusté el tamaño para que sea un poco más discreto
                                    height={200}
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-4 w-full text-center text-sm text-gray-600">
                                <p> da click para ver nuestra ubicación </p>
                            </div>

                        </div>

                    </div>

                    {/* Cara Trasera - Ubicación */}
                    <div className="absolute inset-0 rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="relative overflow-hidden rounded-lg h-full">
                            <div className="flex flex-col lg:flex-row gap-6 bg-amber-100/90 backdrop-blur-md p-8 h-full w-full items-center text-gray-800">

                                <div className="flex-1 flex flex-col justify-center gap-3 text-center lg:text-left">

                                    <h2 className="text-5xl font-extrabold tracking-tight font-serif bg-gradient-to-r from-[#D6A059] to-[#F1B266] bg-clip-text text-transparent">
                                        UBÍCANOS
                                    </h2>
                                    <p className="text-xl font-medium flex items-start gap-3 justify-center lg:justify-start text-neutral-700">
                                        <MapPin size={24} className="flex-shrink-0 mt-1" />
                                        <span>{contactInfo.address}</span>
                                    </p>
                                </div>

                                <div className="flex-1 w-full h-full min-h-[250px] lg:min-h-0 rounded-2xl shadow-xl">
                                    <iframe
                                        className="w-full h-full rounded-2xl"
                                        src={mapEmbedUrl}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Mapa de ubicación: ${contactInfo.address}`}
                                    />
                                </div>

                            </div>
                            <div className="absolute bottom-4 w-full text-center text-sm text-gray-600">
                                <p> da click para ver nuestro contacto </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}