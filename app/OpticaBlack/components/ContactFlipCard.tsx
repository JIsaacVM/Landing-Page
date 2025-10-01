"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ShineBorder } from "../components/ui/shine-border";
import { Instagram, Facebook, Mail, MapPin, Repeat } from "lucide-react";

const contactInfo = {
    name: "Carlos Aguirre",
    instagram: { handle: "optica_black", url: "https://instagram.com/optica_black" },
    facebook: { name: "Óptica Black", url: "https://facebook.com/opticablack" },
    email: "contacto@opticablack.com",
    address: "C. Francisco I. Madero, Centro, León, Gto.",
    logo: "/img/optica-black.webp"
};

const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.492523783451!2d-101.68535068559636!3d21.13251198594208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bcf0e59516365%3A0x8337a62737601b0!2sCalle%20Francisco%20I.%20Madero%2C%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1664832981092!5m2!1ses-419!2smx";

export default function ContactFlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    return (
        <div className="relative w-full max-w-4xl m-32">
            {/* Contenedor con perspectiva 3D */}
            <div className="h-[350px] [perspective:1000px]">
                <div
                    className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                >
                    {/* Cara Frontal - Contacto */}
                    <div className="absolute inset-0 rounded-lg [backface-visibility:hidden]">
                        <div className="flex items-center justify-center gap-8 p-8 bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800/50 shadow-2xl h-full">
                            <div className="text-gray-200 space-y-6">
                                <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    CONTACTO
                                </h2>
                                <p className="text-3xl font-semibold text-white">{contactInfo.name}</p>

                                <nav className="space-y-4 text-lg" aria-label="Enlaces de Contacto">
                                    <a
                                        href={contactInfo.instagram.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 hover:text-white transition-colors group"
                                    >
                                        <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.instagram.handle}</span>
                                    </a>
                                    <a
                                        href={contactInfo.facebook.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 hover:text-white transition-colors group"
                                    >
                                        <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.facebook.name}</span>
                                    </a>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-3 hover:text-white transition-colors group"
                                    >
                                        <Mail size={24} className="group-hover:scale-110 transition-transform" />
                                        <span>{contactInfo.email}</span>
                                    </a>
                                </nav>
                            </div>

                            <div className="flex-shrink-0">
                                <Image
                                    className=" [backface-visibility:hidden] rounded-full shadow-2xl ring-4 ring-white/10 hover:ring-white/20 transition-all"
                                    src={contactInfo.logo}
                                    alt={`Logo de ${contactInfo.name}`}
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cara Trasera - Ubicación */}
                    <div className="absolute inset-0 rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="relative overflow-hidden rounded-lg h-full">
                            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                            <div className="flex flex-col md:flex-row gap-6 bg-black/[.8] backdrop-blur-sm p-8 h-full items-center">
                                <div className="flex flex-col justify-center gap-3 text-white md:w-1/3">
                                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                        UBÍCANOS
                                    </h2>
                                    <p className="text-xl font-medium flex items-start gap-3">
                                        <MapPin size={24} className="flex-shrink-0 mt-1" />
                                        <span>{contactInfo.address}</span>
                                    </p>
                                </div>

                                <div className="flex-1 w-full h-full min-h-[250px]">
                                    <iframe
                                        className="rounded-2xl w-full h-full shadow-xl"
                                        src={mapEmbedUrl}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Mapa de ubicación: ${contactInfo.address}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón de volteo */}
            <button
                onClick={toggleFlip}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 z-20 group"
                aria-label={isFlipped ? 'Ver información de contacto' : 'Ver ubicación en el mapa'}
            >
                <Repeat size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-medium">{isFlipped ? 'Ver Contacto' : 'Ver Ubicación'}</span>
            </button>
        </div>
    );
}
