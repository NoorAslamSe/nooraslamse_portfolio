import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {siteConfig.name}
          </a>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {siteConfig.navItems.slice(0, -1).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-8 md:flex">
            <LinkButton
              href="#contact"
              variant="secondary"
              size="sm"
              className="text-foreground"
            >
              Contact
            </LinkButton>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
