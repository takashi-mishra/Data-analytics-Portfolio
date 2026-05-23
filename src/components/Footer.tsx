// Footer
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Tarun Kumar</span>. Built with passion.
        </span>
        <span>Designed & crafted for clarity ✦</span>
      </div>
    </footer>
  );
}
