import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Freedom } from "@/components/landing/Freedom";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const title = "Deploy — Open-source AI app builder for your desktop";
const description =
  "Deploy turns your ideas into working web apps without coding. Use any AI model, own your code, zero lock-in.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Freedom />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
