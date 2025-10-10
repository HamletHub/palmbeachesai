"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

function useCountUp(end: number, duration = 2000, shouldStart = false, delay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const delayTimeout = setTimeout(() => {
      let startTime: number | null = null
      const startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = easeOutQuart * (end - startValue) + startValue

        if (progress === 1) {
          setCount(end)
        } else {
          setCount(Math.round(currentValue))
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [end, duration, shouldStart, delay])

  return count
}

export function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const timeSavings = useCountUp(50, 2000, isVisible, 0)
  const supportMin = useCountUp(30, 2000, isVisible, 700)
  const supportMax = useCountUp(50, 2000, isVisible, 700)
  const inventory = useCountUp(15, 2000, isVisible, 1400)

  return (
    <section className="py-16 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Join Leading Palm Beach Companies Achieving 30%+ ROI from AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by businesses saving millions with AI-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Time Savings Stat */}
          <Card
            className={`group text-center border-accent/20 hover:border-accent/40 transition-all duration-700 hover:shadow-lg hover:scale-[1.05] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                <svg
                  className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{isVisible ? `${timeSavings}%+` : "0%+"}</div>
              <p className="text-primary font-semibold mb-2">Time Savings</p>
              <p className="text-sm text-muted-foreground">from AI automation (SMB research)</p>
            </CardContent>
          </Card>

          {/* Support Cost Reduction Stat */}
          <Card
            className={`group text-center border-accent/20 hover:border-accent/40 transition-all duration-700 hover:shadow-lg hover:scale-[1.05] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                <svg
                  className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">
                {isVisible ? `${supportMin}–${supportMax}%` : "0–0%"}
              </div>
              <p className="text-primary font-semibold mb-2">Support Cost Reduction</p>
              <p className="text-sm text-muted-foreground">with AI chatbots</p>
            </CardContent>
          </Card>

          {/* Inventory Efficiency Stat */}
          <Card
            className={`group text-center border-accent/20 hover:border-accent/40 transition-all duration-700 hover:shadow-lg hover:scale-[1.05] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
                <svg
                  className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3v18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 17V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 17V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 17v-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{isVisible ? `${inventory}%` : "0%"}</div>
              <p className="text-primary font-semibold mb-2">Inventory Efficiency</p>
              <p className="text-sm text-muted-foreground">improvement with AI forecasting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
