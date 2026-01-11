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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

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
          <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink >
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink >
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink >
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink >
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink >
                  <Link href="#">Blocks</Link>
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
    <div>
      <Link href={'#'}>
        <IconBrandGithub className='border rounded-md p-2 hover:bg-accent' size={36}/>
      </Link>
    </div>
  )
}