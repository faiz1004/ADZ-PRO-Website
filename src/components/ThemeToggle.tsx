"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group"
      style={{ 
        background: 'var(--accent-light)',
        color: 'var(--accent-primary)',
        border: '1px solid var(--border)'
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  )
}