import { useEffect, useState, useRef, RefObject } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.2, rootMargin = "0px", freezeOnceVisible = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already visible and we should freeze, don't observe
    if (freezeOnceVisible && isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldBeVisible = entry.isIntersecting

        if (shouldBeVisible !== isVisible) {
          setIsVisible(shouldBeVisible)
        }

        // Disconnect if visible and we should freeze
        if (shouldBeVisible && freezeOnceVisible) {
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, threshold, rootMargin, freezeOnceVisible])

  return [elementRef, isVisible]
}
