import Link from "next/link";

export default function DemoNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
          Demo Not Found
        </p>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          This demo doesn&apos;t exist yet
        </h1>
        <p className="text-slate-500 mb-8">
          This demo page hasn&apos;t been built yet. Visit the Launch Site Demo
          homepage to browse available examples or request a custom demo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Launch Site Demo
        </Link>
      </div>
    </div>
  );
}
