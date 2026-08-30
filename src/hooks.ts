import { useEffect, useState } from "react"

export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}

export function useAccordion(initial: number | null = 0): [number | null, (index: number | null) => void] {
  const [open, setOpen] = useState<number | null>(initial)
  const toggle = (index: number | null) => setOpen((prev) => (prev === index ? null : index))
  return [open, toggle]
}