"use client"

import { Button } from "@/components/ui/button"
import { IconMoonStars, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useState } from "react"


export function ThemeToggle() {
  const { setTheme } = useTheme()

  const [ dark, setDark ] = useState(false)

  const handleTheme = () => {
    if ( dark ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button variant="ghost" size="icon" className={'cursor-pointer !border !border-border'} onClick={() => (setDark(!dark), handleTheme())}>
      <IconSun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <IconMoonStars className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>

    // <DropdownMenu>
    //   <DropdownMenuTrigger>
        
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
