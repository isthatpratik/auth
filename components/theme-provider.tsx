"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const ThemeContext = React.createContext<{
  theme: string | undefined
  setTheme: (theme: string) => void
}>({
  theme: undefined,
  setTheme: () => {},
})

export const useTheme = () => React.useContext(ThemeContext)

