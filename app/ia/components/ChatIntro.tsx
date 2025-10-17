"use client";
import React from "react";
export interface ChatIntroProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    onOpen?: () => void;
    className?: string;
}

/**
 * Componente genérico para mostrar un bloque introductorio de chat.
 * Útil para colocar en una página y ver otro componente en la UI.
 */
export default function ChatIntro({
    title = "Bienvenido al chat",
    description = "Este es un componente genérico solo para mostrar otro componente en la página.",
    buttonLabel = "Abrir chat",
    onOpen,
    className = "",
}: ChatIntroProps) {
    return (
        <section
            aria-label="Chat intro"
            className={
                "max-w-xl mx-auto p-6 rounded-lg border bg-white shadow-sm text-center " +
                className
            }
        >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <button
                type="button"
                onClick={() => (onOpen ? onOpen() : console.log("Abrir chat"))}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring"
            >
                {buttonLabel}
            </button>
        </section>
    );
}