// components/PaperNews.js
import Image from "next/image";
import { Playfair_Display, PT_Serif } from "next/font/google";

// Configuración de las fuentes de Google con next/font (la mejor práctica)
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700", "900"],
    variable: "--font-playfair", // Nombre de la variable CSS
});

const ptSerif = PT_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-pt-serif",
});

// Datos de las secciones para mantener el JSX limpio
const sections = [
    {
        title: "¿Quiénes somos?",
        content: "Somos una empresa apasionada por la óptica, dedicada a ofrecer soluciones visuales que combinan estilo, calidad y tecnología. Desde nuestra fundación, nos hemos comprometido a mejorar la calidad de vida de nuestros clientes a través de una visión clara y una estética impecable.",
        imageUrl: "/img/eyewears.webp",
        imageAlt: "Colección de anteojos de alta calidad",
    },
    {
        title: "Misión",
        content: "Nuestra misión es proporcionar a cada cliente una experiencia única y personalizada, ofreciendo productos ópticos de la más alta calidad que se ajusten a sus necesidades y estilo de vida, garantizando siempre su satisfacción y bienestar visual.",
        imageUrl: "/img/mission-image.webp", // Sugerencia: usa imágenes diferentes
        imageAlt: "Optometrista ayudando a un cliente",
    },
    {
        title: "Visión",
        content: "Aspiramos a ser líderes en el sector óptico, reconocidos por nuestra innovación, compromiso con la excelencia y por crear tendencias. Buscamos expandir nuestro alcance para que más personas puedan acceder a una salud visual de primer nivel.",
        imageUrl: "/img/vision-image.webp", // Sugerencia: usa imágenes diferentes
        imageAlt: "Persona mirando hacia el futuro con anteojos",
    },
];

export default function PaperNews() {
    return (
        // Usamos las variables de las fuentes en el contenedor principal
        <main className={`${playfair.variable} ${ptSerif.variable} py-16 md:py-24`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Contenedor principal con fondo de papel y sombra sutil */}
                <section className="bg-background/[.6] p-4  rounded-3xl">
                    <div className="p-8 md:p-12">
                        {/* Sección "¿Quiénes somos?" con layout especial */}
                        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-8 border-b-2 border-gray-300 border-double">
                            <div className="md:col-span-2">
                                <h2 className="font-playfair font-black text-4xl md:text-5xl uppercase text-gray-800 tracking-wider mb-4">
                                    {sections[0].title}
                                </h2>
                                <p className="font-serif text-base text-gray-700 leading-relaxed text-justify">
                                    {sections[0].content}
                                </p>
                            </div>
                            <figure className="flex items-center justify-center">
                                <Image
                                    className="rounded-md object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                                    src={sections[0].imageUrl}
                                    alt={sections[0].imageAlt}
                                    width={300}
                                    height={300}
                                />
                            </figure>
                        </article>

                        {/* Secciones "Misión" y "Visión" en columnas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <article>
                                <h3 className="font-playfair font-bold text-3xl text-gray-800 mb-3 border-b border-gray-400 pb-2">
                                    {sections[1].title}
                                </h3>
                                <p className="font-serif text-gray-700 text-justify leading-relaxed text-base">
                                    {sections[1].content}
                                </p>
                            </article>
                            <article>
                                <h3 className="font-playfair font-bold text-3xl text-gray-800 mb-3 border-b border-gray-400 pb-2">
                                    {sections[2].title}
                                </h3>
                                <p className="font-serif text-base text-gray-700 text-justify leading-relaxed">
                                    {sections[2].content}
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}