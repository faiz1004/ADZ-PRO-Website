"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  Home as HomeIcon,
  Activity,
  GraduationCap,
  DollarSign,
  Utensils,
  Monitor,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import { CampaignDashboard } from "@/components/CampaignDashboard";

const ParticleBackground = dynamic(
  () => import("@/components/sections/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  const [visionText, setVisionText] = useState("Visions");

  const visions = [
    "Brands",
    "Ideas",
    "Startups",
    "Products",
    "Visions",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % visions.length;
      setVisionText(visions[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    { value: "₹2.4CR", label: "Ad Spend Managed" },
    { value: "500+", label: "Campaigns Launched" },
    { value: "3.8x", label: "Average ROAS" },
    { value: "98%", label: "Retention Rate" },
    { value: "12+", label: "Industries Served" },
    { value: "+127%", label: "Average ROI Increase" },
    { value: "2.1M", label: "Total Reach Delivered" },
  ];

  return (
    <div className="page-transition">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "var(--hero-gradient)",
        }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20 dot-grid" />
          <ParticleBackground />
          <div className="hero-mesh absolute inset-0 opacity-80" style={{ zIndex: 0 }} />
          
          <div
            style={{
              position: "absolute",
              top: "-100px",
              left: "-100px",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(30,139,181,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(43,168,216,0.10) 0%, transparent 70%)",
              filter: "blur(50px)",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
          style={{ zIndex: 10 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--accent-light)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  padding: "6px 16px",
                  width: "fit-content",
                }}
              >
                <Sparkles className="w-3 h-3 text-accent-primary" />
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--accent-primary)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Redefining Digital Growth
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Transforming{" "}
                <span style={{ color: "var(--accent-primary)" }}>
                  {visionText}
                </span>
                <br />
                Into Reality.
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "540px",
                }}
              >
                We engineer high-performance sales funnels and creative brand
                identities for the next generation of digital-first companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-16 text-lg font-bold group relative overflow-hidden w-full sm:w-auto"
                  style={{
                    background: "var(--accent-primary)",
                    color: "#FFFFFF",
                  }}
                >
                  <Link href="/contact">
                    Start Scaling Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-16 text-lg font-bold border w-full sm:w-auto"
                >
                  <Link href="/portfolio">Our Portfolio</Link>
                </Button>
              </div>

              <div className="flex gap-8 mt-4">
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>500+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Campaigns</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>98%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Retention</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT - Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative px-2 md:px-0"
            >
              <CampaignDashboard />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 lg:hidden opacity-40">
                <ChevronDown className="text-accent-primary animate-bounce" size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE SLIDER */}
      <div
        className="w-full overflow-hidden border-y border-border"
        style={{
          background: "var(--ticker-bg)",
          padding: "20px 0",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div className="marquee-slider">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-12 shrink-0"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: "var(--accent-primary)",
                  opacity: 0.5,
                }}
              />
              <span
                style={{
                  color: "var(--accent-primary)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                {item.value}
              </span>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
