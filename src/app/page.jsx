import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Clients from "@/components/clients";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Footer />
    </>
  );
}
