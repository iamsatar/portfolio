"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Personal Website
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button 
                variant={pathname === item.path ? "default" : "ghost"}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

