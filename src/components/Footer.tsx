export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              LeadFactory
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <a
              href="#approach"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Approach
            </a>
            <a
              href="#technology"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Technology
            </a>
            <a
              href="#results"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} LeadFactory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
