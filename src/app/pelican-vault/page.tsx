"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Eye, Lock, Globe, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import AndroidIcon from "../../../public/android-icon";
import IOSIcon from "../../../public/ios-icon";

const features = [
  {
    icon: Globe,
    title: "One identity. Any world.",
    description:
      "Whether you're opening a bank account, verifying your age, signing into an app, or checking in at a hotel — your Pelican identity is ready. No forms. No repeated KYC. No friction. You share only what's needed — nothing more.",
  },
  {
    icon: Smartphone,
    title: "Move devices, keep everything",
    description:
      "Lose your phone? Upgrading to a new one? Your Pelican identity moves with you. Port it securely to a new device in minutes, without losing anything. It's your identity — it should follow you, not trap you.",
  },
  {
    icon: Eye,
    title: "See who you've shared data with",
    description:
      "Transparency isn't optional; it's a right. With Pelican Vault, you can see which businesses you've shared data with, what information each one requested, when they accessed it, and revoke sharing anytime. You stay in control, always.",
  },
  {
    icon: Lock,
    title: "Identity without exposure",
    description:
      "Your data lives encrypted on your device. It's never sold. Never used for ads. Never mined. Never seen by Pelican. The Vault exists solely to protect you — and help you move through the world with less friction and more confidence.",
  },
];

const sharingPoints = [
  "Which businesses you've shared data with",
  "What information each one requested",
  "When they accessed it",
  "And revoke sharing anytime",
];

export default function PelicanVaultPage() {
  return (
    <div>
      <Navbar />

      <div className="h-20" />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Your identity, protected{" "}
              <span className="text-primary">and always with you.</span>
            </h1>

            <p className="text-muted-foreground mx-auto mb-6 max-w-3xl text-lg md:text-xl">
              Pelican Vault is your personal identity app. It stores the details
              you choose to keep, protects them with military-grade security,
              and lets you share them safely with businesses, apps, and
              institutions — only when you decide.
            </p>

            <p className="text-md text-muted-foreground mx-auto mb-10 max-w-2xl">
              Your identity should feel like something you own, not something
              you repeat every time you sign up somewhere new. Pelican Vault
              makes that possible.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                <IOSIcon />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <AndroidIcon />
                Download for Android
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-colors">
                  <CardContent className="p-8">
                    <div className="mb-10 grid h-14 w-14 place-content-center rounded-full border">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-card/30 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Transparency isn't optional; it's a right.
            </h2>
            <p className="text-muted-foreground text-lg">
              With Pelican Vault, you can see:
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {sharingPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border-border/50 flex items-center gap-3 rounded-lg border p-4"
              >
                <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                <span className="text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Trust Section */}
      <section className="bg-secondary/10 px-6 py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Built for a future that needs trust
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg">
              As the world rapidly blends the physical and digital, your
              identity becomes your strongest currency. Pelican Vault gives you
              a single, protected, self-owned identity that works everywhere —
              without giving up your privacy.
            </p>

            <div className="text-muted-foreground mb-12 flex flex-wrap justify-center gap-6">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                Simple for people
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                Powerful for institutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                Safer for everyone
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
