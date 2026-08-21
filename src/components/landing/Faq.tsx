import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Deploy free? What's the catch?",
    a: "The desktop app is free and open source. You connect your own AI provider keys, so there is nothing to unlock. Paid plans simply bundle credits and advanced modes.",
  },
  {
    q: "What can you build with Deploy?",
    a: "Full-stack web apps: dashboards, marketplaces, internal tools, landing pages — anything you could build with a modern React and Postgres stack.",
  },
  {
    q: "Can you build desktop apps with Deploy?",
    a: "Deploy focuses on web apps today. You can still export the code and wrap it yourself if you need a desktop shell.",
  },
  {
    q: "Do I really own the code?",
    a: "Yes. Projects live as ordinary folders on your machine, with no proprietary runtime or hidden files. Push them anywhere at any time.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">FAQ</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
