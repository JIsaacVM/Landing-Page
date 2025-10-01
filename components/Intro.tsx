import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Intro() {
    return (
        <div className="">
            <div className=" flex flex-row justify-between items-center w-auto h-auto mt-32">
                <div className="mx-15">
                    <p className="text-7xl text-white font-bold p-2"> Optica Black</p>
                    <p className="text-4xl text-white/[.9] text-right">Tu optica de confianza</p>
                </div>
                <div>
                    <Image
                        className="rounded-2xl"
                        src="/img/eyewears.webp"
                        alt="logo"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            {/* Contenedor de botones modificado */}
            <div className="flex flex-row justify-center items-center w-auto h-auto my-5 gap-6">
                {/* ---- Botón 1 con ShineBorder ---- */}
                <div className="relative w-full max-w-[180px] sm:max-w-[200px] overflow-hidden rounded-2xl">
                    <ShineBorder
                        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B", "#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    />
                    <button className=" bg-stone-900 text-white w-full px-8 py-4 font-bold">
                        botón 1
                    </button>
                </div>

                {/* ---- Botón 2 con ShineBorder ---- */}
                <div className="relative w-full max-w-[180px] sm:max-w-[200px] overflow-hidden rounded-2xl">
                    <ShineBorder
                        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B", "#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    />
                    <button className="bg-stone-900 text-white w-full px-8 py-4 font-bold">
                        botón 2
                    </button>
                </div>
            </div>
        </div>
    );
}