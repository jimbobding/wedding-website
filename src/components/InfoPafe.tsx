export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] p-10">
      <section className="max-w-5xl mx-auto space-y-12" id="info">
        <h1 className="text-5xl font-bold text-center">Further Information</h1>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">FAQs</h2>
            <p className="text-lg">Add common questions and answers here.</p>
          </div>

          <div className="w-full h-64 bg-pink-700 rounded-xl flex items-center justify-center">
            <span className="opacity-60">FAQ Image Placeholder</span>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-64 bg-pink-700 rounded-xl flex items-center justify-center">
            <span className="opacity-60">Extra Info Image Placeholder</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Anything Else</h2>
            <p className="text-lg leading-relaxed">
              Add timings, weather advice, childcare info, etc.
            </p>
            <a href="#" className="underline font-medium">
              Contact us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
