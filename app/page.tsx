import Image from "next/image";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Cards from "@components/Cards";
export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Info />
      <Cards />
    </div>
    </>
  );
}
