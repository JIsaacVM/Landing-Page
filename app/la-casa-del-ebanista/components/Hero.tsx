import Image from "next/image";

export default function Hero() {
    return (
        // Contenedor principal
        <div className="px-4"> {/* Añadimos padding horizontal para que el contenido no toque los bordes en móvil */}

            {/* Sección del Hero: se apila en móvil (flex-col) y se pone en fila en pantallas grandes (lg:flex-row) */}
            <div className="flex flex-col lg:flex-row mt-16 lg:mt-24 items-center">

                {/* Columna de la Imagen */}
                <div className="w-full lg:w-1/2">
                    {/* Next.js Image es responsive por defecto dentro de un contenedor con tamaño */}
                    <Image
                        src="/img/LaCasaDelEbanista/ebanista.webp"
                        alt="Ebanista trabajando en su taller"
                        width={800}
                        height={800}
                        className="rounded-lg shadow-xl" // Estilos opcionales para la imagen
                    />
                </div>

                {/* Columna del Texto */}
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10 text-center lg:text-left">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#B45309]">
                        La Casa del Ebanista
                    </p>
                    <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#cd7939] font-serif">
                        Donde la madera cuenta una historia
                    </p>
                    <p className="mt-6 text-lg sm:text-xl text-center lg:text-justify text-[#43532E]">
                        Creamos piezas únicas que combinan tradición y diseño moderno, transformando espacios y vidas.
                    </p>
                </div>

            </div>

            {/* Indicador para hacer scroll hacia abajo */}
            <div className="flex flex-col items-center gap-2 mt-16 lg:mt-24 animate-bounce">
                <p className="text-gray-600">Acerca de nosotros</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>

        </div>
    )
};