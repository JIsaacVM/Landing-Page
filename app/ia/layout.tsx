import React from 'react';
import './styles.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className="scroll-smooth">
            <body>
                {children}
            </body>
        </html>
    );
}