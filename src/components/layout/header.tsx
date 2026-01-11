'use client'


import black_landscape from '@/assets/MB_logo_Black_landscape.svg';
import white_landscape from '@/assets/MB_logo_white_landscape.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IconBrandGithub } from '@tabler/icons-react';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])

  return (
    <header className='group sticky z-50 flex justify-center transition-all duration-300 md:mx-0 top-4 mx-0 data-[scrolled=true]:mx-4 data-[scrolled=true]:top-6' 
      data-scrolled={scrolled}>

      <div className='w-[70rem] transition-all duration-300 group-data-[scrolled=true]:w-[800px]'>

        <div className='mx-auto max-w-7xl rounded-md transition-all duration-300 xl:px-0 px-7 shadow-none 
        group-data-[scrolled=true]:border 
        group-data-[scrolled=true]:border-border 
        group-data-[scrolled=true]:bg-background/75 
        group-data-[scrolled=true]:px-1 
        group-data-[scrolled=true]:backdrop-blur-lg'>
          
          {/* Navbar */}

          <div className='flex h-[56px] items-center justify-between p-4'>

            {/* Icon */}

           <Icon/>

            {/* NavItens */}

            <NavigationMenuBar/>

            <SocialIcons/>

          </div>
        </div>

      </div>
      
    </header>
  )
}

function Icon() {
  return (
     <Link href={'#'}>
              <Image src={black_landscape} height={48} width={100} alt={"logo"} className='dark:hidden'/>
              <Image src={white_landscape} height={48} width={100} alt={"logo"} className='hidden dark:flex'/>
            </Link>
  )
}

function NavigationMenuBar() {
  
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/#" />}>
            Studio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Games</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink render={<Link href="#" />}>
                  Game 1
                </NavigationMenuLink>
                <NavigationMenuLink render={<Link href="#" />}>
                  Game 2
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#" />}>
            Forum
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink render={<Link href="#" />}>
                  Current Vacancies
                </NavigationMenuLink>
                <NavigationMenuLink render={<Link href="#" />}>
                  Graduates
                </NavigationMenuLink>
                <NavigationMenuLink render={<Link href="#" />}>
                  Interns
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function SocialIcons() {
  return (
    <div className='flex gap-2'>
      <Link href={'https://github.com/brasga-a/minimal-blink'}>
        <IconBrandGithub className="border rounded-md p-2 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none" size={36}/>
      </Link>
      <ThemeToggle/>
    </div>
  )
}