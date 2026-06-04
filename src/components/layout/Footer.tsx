export default function Footer() {
  return (
    <footer className="py-12 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-faint">
        <p className="font-display text-ink">福田 寛和 / Hirokazu Fukuda</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
