import Image from "next/image";

const Tatuadores_data = [
    {
        name: "Carlos Aguirre",
        imageUrl: "/img/tatto-body/tatuadores/women1-snbg.webp",
        imageUrl2: "/img/tatto-body/tatuadores/women1-cnbg.webp",
        imageAlt: "Equipo de tatuadores del estudio",
        description: "Voluptatibus a exercitationem placeat eligendi perspiciatis iusto. Fuga expedita, corporis odio ratione soluta quae voluptatibus explicabo quod odit voluptatem eligendi recusandae natus."
    },
    {
        name: "Carlos Aguirre",
        imageUrl: "/img/tatto-body/tatuadores/men1-snbg.webp",
        imageUrl2: "/img/tatto-body/tatuadores/men1-cnbg.webp",
        imageAlt: "Equipo de tatuadores del estudio",
        description: "Voluptatibus a exercitationem placeat eligendi perspiciatis iusto. Fuga expedita, corporis odio ratione soluta quae voluptatibus explicabo quod odit voluptatem eligendi recusandae natus."
    },
    {
        name: "Carmen Aguirre",
        imageUrl: "/img/tatto-body/tatuadores/women2-snbg.webp",
        imageUrl2: "/img/tatto-body/tatuadores/women2-cnbg.webp",
        imageAlt: "Equipo de tatuadores del estudio",
        description: "Voluptatibus a exercitationem placeat eligendi perspiciatis iusto. Fuga expedita, corporis odio ratione soluta quae voluptatibus explicabo quod odit voluptatem eligendi recusandae natus."
    },
];

export default function Tatuadores() {
    return (
        <section id="tatuadores" className="w-full bg-stone-900/50 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">

                {/* --- Título de la Sección --- */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="rye text-4xl md:text-5xl font-bold uppercase tracking-wider">Nuestros Tatuadores</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Tatuadores_data.map((tatuador: {
                        name: string;
                        imageUrl: string;
                        imageUrl2: string;
                        imageAlt: string;
                        description: string;
                    }, index: number) => (
                        <div key={index} className="bg-stone-800/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/80 text-center flex flex-col items-center justify-center ">

                            {/* --- CONTENEDOR DE IMAGEN MODIFICADO --- */}
                            <div className="group relative w-fit h-64 mb-4 flex items-center justify-center">
                                {/* Imagen de fondo (siempre visible) */}
                                <Image
                                    src={tatuador.imageUrl}
                                    alt={tatuador.imageAlt}
                                    width={100}
                                    height={400}
                                    className="rounded-lg object-cover w-fit h-64"
                                />
                                {/* Imagen que aparece en hover */}
                                <Image
                                    src={tatuador.imageUrl2}
                                    alt={tatuador.imageAlt}
                                    width={100}
                                    height={400}
                                    className="rounded-lg object-cover w-fit h-64 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                                />
                            </div>

                            <h3 className="specialElite uppercase font-bold text-xl md:text-2xl text-white mb-2">
                                {tatuador.name}
                            </h3>
                            <p className="specialElite text-base text-stone-300 text-left">
                                {tatuador.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}