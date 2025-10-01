// components/LayoutSection.tsx

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import React from "react";

// Este componente acepta 'children' (el contenido que irá dentro)
// y un 'className' opcional para estilos adicionales.
export default function LayoutSection({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            // Unimos las clases base con cualquier clase extra que se pase
            className={cn(
                "relative h-screen snap-start overflow-hidden bg-black font-sans",
                className
            )}
        >
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0"
                )}
            />
            {/* Contenedor que centra el contenido por defecto */}
            <div className="relative z-10 h-full flex items-center justify-center p-8 sm:p-20">
                {children}
            </div>
        </section>
    );
}