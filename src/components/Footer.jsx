export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] sm:text-xs text-slate-500">
          © {new Date().getFullYear()} Dynastic Heritage Africana Limited. All
          rights reserved.
        </p>
        <p className="text-[11px] sm:text-xs text-slate-500">
          Designed & developed by{" "}
          <span className="font-medium text-slate-700">Obiora Emmanuel</span>.
        </p>
      </div>
    </footer>
  );
}
