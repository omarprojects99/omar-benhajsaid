


import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justfy-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5
    ">
      <div className="max-w-7xt w-full">
        <FloatingNav navItems={[{name: 'home', link: '/', icon: <FaHome />}]}/>
        <Hero />
      </div>
    </main>
    );
}
