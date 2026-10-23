import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.open(
      `mailto:rithickraman855@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("sent");
    setForm(initialState);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          description="For roles, product work, or professional inquiries, reach me by email or through my professional profiles."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Reach out
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Let&apos;s build something polished.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                I work across responsive interfaces, APIs, databases, and
                production delivery for full-stack applications.
              </p>

              <div className="mt-6 grid gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/7"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border-white/10 bg-white/5 p-6 sm:p-8">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-200">
                    Name
                    <Input
                      required
                      value={form.name}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-slate-200">
                    Email
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          email: event.target.value,
                        }))
                      }
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-slate-200">
                  Message
                  <Textarea
                    required
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    placeholder="Tell me a bit about the product, timeline, or role."
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-400">
                    {status === "sent"
                      ? "Your email client opened with the message draft."
                      : "Form opens your email client with a pre-filled message."}
                  </p>
                  <Button variant="glow" size="lg" className="sm:self-end">
                    <span>Send Message</span>
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
