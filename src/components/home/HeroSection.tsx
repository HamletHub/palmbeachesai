"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { trackEvent, trackBusinessGoal } from "@/components/GoogleTagManager"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 hidden md:block">
        <div
          className="bg-cover bg-center bg-no-repeat absolute inset-0"
          style={{ backgroundImage: "url(/images/clearoffice.png)" }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
      </motion.div>

      {/* White background for small screens */}
      <div className="absolute inset-0 md:hidden bg-white"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-6 bg-accent/10 text-accent border-accent/50 text-sm font-semibold">
              AI Solutions for Palm Beach Mid-Market Companies
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="animated-gradient-text">AI → ROI</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
            Turn Your AI Investments Into Measurable Returns
          </motion.h1>

          <motion.div variants={itemVariants}>
            <div className="bg-muted/50 rounded-xl p-6 mb-6 border-2 border-accent/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg lg:text-xl font-semibold text-primary mb-2">
                &quot;74–85% of AI projects fail to deliver expected value&quot; – Gartner
              </p>
              <p className="text-lg text-muted-foreground">
                While many AI projects miss the mark, Palm Beach&apos;s smartest executives are unlocking real ROI.
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-primary font-medium mb-6 leading-relaxed"
          >
            We help Palm Beach businesses evaluate, implement, and optimize AI solutions to save time, cut costs, and
            grow revenue—with proven ROI from day one.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg lg:text-xl font-semibold text-foreground mb-8">
            We don&apos;t just build AI. We build results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                trackEvent("cta_click", {
                  cta_location: "hero_section",
                  cta_text: "Get Your Free ROI Assessment",
                  estimated_value: 2500,
                })
                trackBusinessGoal("roi_assessment_interest", 2500)
                window.open("/contact", "_blank")
              }}
            >
              Get Your Free ROI Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">Discover hidden opportunities in 30 minutes</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
