// components/navbar.tsx
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <header className="
        sticky top-0 z-50 w-full text-white bg-background/[.01] backdrop-blur mt-3">
            <div className="container flex h-14 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src="/img/optica-white-bg-black.webp"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full m-4"
                    />
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/#features">Features</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}