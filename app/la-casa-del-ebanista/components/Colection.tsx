import Image from "next/image";
import { Colection_data } from "../data/Colection_data";

export default function Colection() {
    return (
        <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección (sin cambios) */}
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#B45309] font-serif sm:text-4xl">
                        Nuestra Colección de Productos
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Esta sección no es un marketplace, es una colección de los productos que vendemos. Un lugar donde mostramos nuestra personalidad y estilo para que nos conozcas y puedas tomar de inspiración lo que ya hemos creado.
                    </p>
                </div>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {Colection_data.map((producto) => (
                        // 1. Añadimos "group" y "relative"
                        <div
                            key={producto.id}
                            className="group relative break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-lg"
                        >
                            <Image
                                src={producto.image}
                                alt={producto.title}
                                width={producto.width}
                                height={producto.height}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                // 2. El hover ahora depende del "group"
                                className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            {/* 3. Nuevo div para el texto que aparece en hover */}
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="p-4 text-white font-semibold text-lg">
                                    {producto.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};