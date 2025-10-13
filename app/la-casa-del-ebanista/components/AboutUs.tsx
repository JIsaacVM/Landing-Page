import Image from "next/image";

export default function AboutUs() {
    return (
        // Contenedor principal con padding y margen responsive
        <div className="mt-24 lg:mt-32 flex flex-col items-center justify-center px-4">

            {/* Contenedor del logo y la primera frase, centrado */}
            <div className="flex flex-col items-center text-center gap-4">
                <Image
                    src="/img/LaCasaDelEbanista/logo-bg.webp"
                    alt="Logo La Casa del Ebanista"
                    // Tamaño responsive para la imagen
                    className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
                    width={250}
                    height={250}
                />
                <p className="font-serif text-lg text-gray-700 -mt-2">
                    Donde la madera cuenta una historia
                </p>
                <div className="w-full max-w-sm py-3 px-4 bg-slate-100 shadow-xl rounded-2xl">
                    <p className="specialElite text-center text-gray-800">
                        Artesanía que perdura, diseño que inspira.
                    </p>
                </div>
            </div>

            {/* Contenedor de las dos tarjetas de texto */}
            {/* Se apila en móvil (flex-col) y se pone en fila en pantallas grandes (lg:flex-row) */}
            <div className="specialElite w-full max-w-6xl flex flex-col lg:flex-row justify-center my-16 gap-8 px-0 sm:px-8 lg:px-12">

                {/* Tarjeta 1 */}
                <div className="bg-amber-100/60 p-6 rounded-2xl shadow-lg">
                    <p className="border-b-2 border-black/60 pb-1 font-bold text-lg">Nuestra Misión</p>
                    <p className="mt-3 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit placeat, earum officia error veritatis ullam sint inventore omnis, aspernatur accusantium cupiditate illum corporis soluta atque sapiente vero? Ad, aliquid quis?
                    </p>
                </div>

                {/* Tarjeta 2 */}
                <div className="bg-amber-100/60 p-6 rounded-2xl shadow-lg">
                    <p className="border-b-2 border-black/60 pb-1 font-bold text-lg">Nuestra Visión</p>
                    <p className="mt-3 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit placeat, earum officia error veritatis ullam sint inventore omnis, aspernatur accusantium cupiditate illum corporis soluta atque sapiente vero? Ad, aliquid quis?
                    </p>
                </div>

            </div>
        </div>
    )
};