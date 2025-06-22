import Landingpage from "./pages/Landingpage";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Experince from "./pages/Experiance";
import Contact from "./pages/Contact";
import CertificateShowcase from "./pages/CertificateShowcase";

export default function Home() {
  return (
    <main className="bg-blue-500 flex justify-center items-center">
      <div>
        <Landingpage />
        <Aboutme />
        <Portfolio />
        <CertificateShowcase />

        <Services />
        <Experince />
        <Contact />
      </div>
    </main>
  );
}
