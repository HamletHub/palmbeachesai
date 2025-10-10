"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

// Custom hook for counting animation
function useCountUp(end: number, duration = 2000, shouldStart = false, delay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const timeout = setTimeout(() => {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.round(easeOutQuart * end)

        setCount(current)

        if (progress === 1) {
          clearInterval(timer)
          setCount(end) // Ensure we end at exact value
        }
      }, 16)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [end, duration, shouldStart, delay])

  return count
}

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Animated counter for 85%
  const failureRate = useCountUp(85, 2000, isVisible, 300)

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

  const problems = [
    {
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Solving the Wrong Problem",
      problem:
        "Your team automates processes that don't save money or add value—like digitizing paperwork that shouldn't exist in the first place.",
      solution:
        "We start with a strategic audit to identify high-impact opportunities that deliver real ROI, not just busy work automation.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Poor Customer Experience",
      problem:
        "AI customer service with incomplete data frustrates users instead of helping them, damaging relationships you've spent years building.",
      solution:
        "Our AI solutions are trained on your complete data ecosystem, ensuring accurate, helpful responses that enhance customer satisfaction.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Garbage Data, Garbage Results",
      problem:
        "AI decisions are only as good as the data they're based on—and most companies discover their data quality issues too late.",
      solution:
        "We implement data quality frameworks and validation processes before deployment, ensuring your AI makes decisions you can trust.",
    },
  ]

  return (
    <section id="problem" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Why {failureRate}% of AI Projects Fail (And How to Beat the Odds)
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-muted-foreground mb-8">The Three Critical Problems</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="relative h-full min-h-[400px] cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of card - Problem */}
                  <Card
                    className={`group absolute inset-0 border-destructive/20 hover:border-destructive/40 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/10 backface-hidden ${
                      flippedCard === index ? "pointer-events-none" : ""
                    }`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <CardHeader className="flex-row items-center">
                      <CardTitle className="text-xl text-destructive flex items-center gap-3">
                        <div className="p-2 bg-destructive/10 rounded-lg animate-pulse-subtle flex-shrink-0">
                          {problem.icon}
                        </div>
                        <span className="flex-1">{problem.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">{problem.problem}</p>
                      <p className="text-xs text-destructive/60 font-medium">Click to see our solution →</p>
                    </CardContent>
                  </Card>

                  {/* Back of card - Solution */}
                  <Card
                    className={`group absolute inset-0 border-primary/20 bg-primary/5 hover:border-primary/40 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 rotate-y-180 backface-hidden ${
                      flippedCard !== index ? "pointer-events-none" : ""
                    }`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <CardHeader className="flex-row items-center">
                      <CardTitle className="text-xl text-primary flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="flex-1">Our Solution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed mb-4">{problem.solution}</p>
                      <p className="text-xs text-primary/60 font-medium">Click to see the problem ←</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-muted/50 rounded-xl p-8 border-2 border-muted text-center transition-all duration-700 hover:border-destructive/30 hover:shadow-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <p className="text-lg lg:text-xl text-primary font-medium leading-relaxed">
            In Palm Beach&apos;s ultra-competitive market, failed AI investments don&apos;t just drain budgets—you watch
            competitors surge ahead while you&apos;re left explaining empty promises to your board.
          </p>
        </div>
      </div>
    </section>
  )
}
