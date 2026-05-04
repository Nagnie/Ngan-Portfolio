import { StatusBar } from "@/components/StatusBar";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Academy } from "@/components/Academy";
import { Stack } from "@/components/Stack";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";

export default function Page() {
  return (
    <>
      <CustomCursor />
      <StatusBar />

      <div className="page">
        <SideNav />

        <main className="content">
          <Hero />
          <Marquee />
          <Work />
          <Academy />
          <Stack />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
