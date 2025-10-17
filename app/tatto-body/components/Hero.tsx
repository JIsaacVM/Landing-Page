// /components/Hero.jsx

import Image from "next/image";

export default function Hero() {
    return (

        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <video
                    src="/img/tatto-body/bg-tatto.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/tatto-body/logo-w.webp"
                    className="w-full h-full object-cover"
                >
                    Tu navegador no soporta el video.
                </video>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                aria-hidden="true"
            ></div>
            <div className=" flex relative z-10 max-w-4xl mx-auto px-4">
                <div>
                    <Image
                        src="/img/tatto-body/logo-w.webp"
                        alt="Logo"
                        width={600}
                        height={600}
                        className="mx-auto mb-6">

                    </Image>
                </div>
                <div>
                    <p className="text-white text-left text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider font-serif">
                        Arte que Permanece
                    </p>
                    <p className="text-left text-gray-200 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                        Transformamos tus ideas en tatuajes únicos. Calidad, higiene y creatividad en cada línea.
                    </p>
                </div>
            </div>

        </section>
    );
}