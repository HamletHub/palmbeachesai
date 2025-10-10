import { useState, useEffect } from "react"

export function useCountUp(
  end: number,
  duration = 2000,
  shouldStart = false,
  delay = 0
): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const delayTimeout = setTimeout(() => {
      let rafId: number
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
          rafId = requestAnimationFrame(animate)
        }
      }

      rafId = requestAnimationFrame(animate)

      return () => {
        if (rafId) cancelAnimationFrame(rafId)
      }
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [end, duration, shouldStart, delay])

  return count
}
