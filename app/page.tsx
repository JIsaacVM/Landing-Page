
import ContactFlipCard from "@/components/ContactFlipCard";
import Intro from "@/components/Intro";
import MarqueeDemo from "@/components/MarqueeDemo";
import PaperNews from "@/components/PaperNews";


export default function Home() {
  return (
    <main>
      {/* El resto de tus secciones no necesitan cambios para esta solución */}
      <section className="relative h-screen snap-start flex items-center justify-center">
        <div className="">
          <Intro />
        </div>
      </section>

      {/* --- SECCIÓN 2 --- */}
      <section className="h-screen snap-start flex items-center justify-center text-4xl">
        <div className="flex flex-col items-center justify-center overflow-auto">
          <MarqueeDemo />
        </div>
      </section>

      {/* --- SECCIÓN 3 --- */}
      <section className="h-full snap-start flex items-center justify-center ">
        <PaperNews />
      </section>

      <section className="h-min snap-start flex items-center justify-center ">
        <ContactFlipCard />
      </section>
    </main>
  );
}