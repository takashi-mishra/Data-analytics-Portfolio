// Home — full portfolio page composition
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tarun Kumar — Data Analyst & Trainer" },
      {
        name: "description",
        content:
          "Portfolio of Tarun Kumar, Data Analyst and Trainer with 2+ years of experience building dashboards, analytics, and ML workflows.",
      },
      { property: "og:title", content: "Tarun Kumar — Data Analyst & Trainer" },
      {
        property: "og:description",
        content: "Dashboards, analytics, and data-driven decisions — premium portfolio.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Certifications Section */}
      <Certifications />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </main>
  );
}
