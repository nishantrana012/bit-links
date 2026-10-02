import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Bit Links
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
            Short links that feel simple.
          </h1>
        </header>
          
        <div className="mb-8 flex justify-center text-xl text-white">
          <Link href="/shorten" className="bg-white font-semibold rounded">
            <button className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">Try Now</button>
          </Link>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-medium">Keep it clean</h2>
            <p className="text-slate-600">
              Create concise, branded links that are easy to share and easier to remember.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-medium">No Login Required</h2>
            <p className="text-slate-600">
              Access your links and analytics without the need to create an account or log in.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-medium">Built for everyday use</h2>
            <p className="text-slate-600">
              Manage URLs with a minimal interface designed to stay out of your way.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-medium">Grow with confidence</h2>
            <p className="text-slate-600">
              Turn more clicks into action with a platform built for practical marketing.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
