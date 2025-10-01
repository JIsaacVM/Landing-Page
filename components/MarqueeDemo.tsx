import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const anteojos = [
    {
        nombre: "Modelo Aviador Clásico",
        precio: "$2,499.00",
        descripcion: "Un ícono de estilo. Montura metálica dorada con lentes de cristal verde. Protección UV400.",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop",
    },
    {
        nombre: "Wayfarer Urban",
        precio: "$1,899.00",
        descripcion: "El diseño atemporal que nunca pasa de moda. Fabricados con acetato de alta calidad para mayor durabilidad.",
        img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop",
    },
    {
        nombre: "Redondos Vintage",
        precio: "$1,550.00",
        descripcion: "Inspirados en los años 60. Ligeros, cómodos y con un toque intelectual para tu look diario.",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop",
    },
    {
        nombre: "Clubmaster Ejecutivo",
        precio: "$2,899.00",
        descripcion: "Combinación perfecta de acetato y metal. Ideales para un look profesional y sofisticado.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop",
    },
    {
        nombre: "Montura al Aire Minimalista",
        precio: "$3,100.00",
        descripcion: "Máxima ligereza y comodidad. Un diseño discreto y elegante que se adapta a cualquier rostro.",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop",
    },
    {
        nombre: "Deportivos Polarizados",
        precio: "$2,150.00",
        descripcion: "Diseñados para la acción. Lentes polarizadas que reducen el deslumbramiento y mejoran la claridad visual.",
        img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop",
    },
];


const ReviewCard = ({
    nombre,
    precio,
    descripcion,
    img
}: {
    nombre: string
    precio: string
    descripcion: string
    img: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-400 bg-gray-400/[.5] hover:bg-gray-400/[.7]",
                // dark styles
                "dark:border-gray-50 dark:bg-gray-50 dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="grid justify-items-center gap-2">
                <div>
                    <Image className="rounded-2xl " width={150} height={150} alt="idk" src={img} />
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-xl text-stone-300  font-medium dark:text-white">
                        {nombre}
                    </figcaption>
                    <p className="text-lg text-stone-400 font-medium dark:text-white/40">{precio}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-stone-200">{descripcion}</blockquote>
        </figure>
    )
}

export default function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col overflow-hidden">
            <div className="flex flex-row items-left gap-2 mx-6 my-2 text-6xl">
                <p className="font-bold bg-blue-800 p-2 rounded-xl">Nuestros</p>
                <p className="font-bold p-2 text-blue-700 text-shadow-white text-shadow-xl">
                    Productos
                </p>
            </div>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {anteojos.map((review) => (
                    <ReviewCard key={review.nombre} {...review} />
                ))}
            </Marquee>
        </div>
    )
}
