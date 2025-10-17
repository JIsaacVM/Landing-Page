// Tu archivo AboutUs.tsx, ahora como un componente único
import Image from "next/image";
// Usaremos iconos para mejorar la UI. Necesitarás instalar lucide-react:
// npm install lucide-react
import { MapPin, Users, TrendingUp } from 'lucide-react';

// 1. Organizar los datos en un array hace que el código sea más limpio,
// incluso si todo está en el mismo archivo.
const milestones = [
    {
        title: "Nuevo estudio en el Centro",
        imageUrl: "/img/tatto-body/logo-w.webp",
        imageAlt: "Logo del estudio de tatuajes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga expedita, corporis odio ratione soluta quae voluptatibus explicabo quod odit voluptatem eligendi recusandae natus."
    },
    {
        title: "Nuevo equipo de Tatuadores",
        imageUrl: "/img/tatto-body/logo-bgb.webp",
        imageAlt: "Equipo de tatuadores del estudio",
        description: "Voluptatibus a exercitationem placeat eligendi perspiciatis iusto. Fuga expedita, corporis odio ratione soluta quae voluptatibus explicabo quod odit voluptatem eligendi."
    },
    {
        title: "Crecimiento como Studio",
        imageUrl: "/img/tatto-body/logo-bgb.webp",
        imageAlt: "Interior del Tatto Studio",
        description: "Eligendi recusandae natus. Voluptatibus a exercitationem placeat eligendi perspiciatis iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita, corporis odio ratione."
    }
];

export default function AboutUs() {
    return (
        <section id="historia" className="w-full bg-stone-900/50 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">

                {/* --- Título de la Sección --- */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="rye text-4xl md:text-5xl font-bold uppercase tracking-wider">Nuestra Historia</h2>
                    <p className="specialElite text-lg md:text-xl text-stone-400 mt-2">Un viaje de tinta y arte a través del tiempo.</p>
                </div>

                {/* --- Contenedor de la Línea de Tiempo --- */}
                <div className="relative flex flex-col items-center">
                    {/* La línea vertical que conecta los hitos (visible solo en desktop) */}
                    <div className="absolute top-8 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-stone-700/50 hidden md:block" aria-hidden="true"></div>

                    {/* 2. Mapeamos el array para generar cada hito en la línea de tiempo */}
                    {milestones.map((item, index) => {
                        const isOdd = index % 2 !== 0; // Para alternar izquierda/derecha

                        return (
                            <div
                                key={index}
                                // Contenedor de cada hito (tarjeta + punto en la línea)
                                className="group relative w-full flex md:w-1/2 mb-12 last:mb-0"
                            >
                                {/* Posicionamiento para alternar */}
                                <div className={`flex w-full items-start gap-4 ${isOdd ? 'md:self-end md:flex-row-reverse' : 'md:self-start'}`}>

                                    {/* El punto y el icono en la línea de tiempo */}


                                    {/* Tarjeta de Contenido */}
                                    <div className="bg-stone-800/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/80 ml-16 md:ml-0 w-full">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.imageAlt}
                                            width={100}
                                            height={100}
                                            className="rounded-lg object-cover w-fit mb-4 shadow-lg shadow-black/30"
                                        />
                                        <h3 className="specialElite uppercase font-bold text-xl md:text-2xl text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="specialElite text-base text-stone-300 text-left">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}