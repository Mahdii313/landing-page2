import Button from "@/components/FormButton";
import Contact from "@/components/Contact";
import KnowAboutMe from "@/components/KnowAboutMe";
import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه خانه",
  description: "این صفحه خانه است",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-950">
      <KnowAboutMe />
      <div
        id="services"
        className="mt-10 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-36 2xl:mt-52 mb-10"
      >
        <Services />
      </div>
      <div className="mt-40">
        <Contact />
      </div>
    </main>
  );
}
