

import Blog from "@/components/blog";
import { navItems } from "@/components/Data";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justfy-center items-center flex-col
    overflow-clip mx-auto sm:px-10 px-5
    ">
      <div className="max-w-7xt w-full">
        
        
        <Blog />
        <Footer/>
      </div>
    </main>
    );
}
