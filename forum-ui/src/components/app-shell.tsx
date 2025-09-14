"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Sun, Moon, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const nav = [
    { href: "/", label: "首頁" },
    { href: "/categories", label: "看板" },
    { href: "/threads", label: "最新" }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4">
          <Link href="/" className="font-semibold">Forum</Link>
          <nav className="hidden md:flex items-center gap-2 text-sm">
            {nav.map(item => (
              <Link key={item.href} href={item.href} className={cn("px-3 py-2 rounded-md hover:bg-accent", pathname === item.href && "bg-accent text-accent-foreground")}>{item.label}</Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative w-64 hidden sm:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-8" placeholder="搜尋…" />
            </div>
            <Button variant="ghost" size="icon" aria-label="notifications"><Bell className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" aria-label="toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button asChild><Link href="/threads/new"><Plus className="mr-2 h-4 w-4" />發文</Link></Button>
          </div>
        </div>
      </header>

      <main className="container grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="space-y-1">
            {nav.map(item => (
              <Link key={item.href} href={item.href} className={cn("block px-3 py-2 rounded-md hover:bg-accent", pathname === item.href && "bg-accent text-accent-foreground")}>{item.label}</Link>
            ))}
          </div>
        </aside>
        <section className="col-span-1 lg:col-span-9">
          {children}
        </section>
      </main>
    </div>
  );
}

