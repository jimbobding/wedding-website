import Image from "next/image";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] px-6 py-10 sm:px-8 lg:px-10">
      <section className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Further Information
        </h1>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">FAQs</h2>
            <p className="text-lg leading-relaxed">
              Add common questions and answers here.
            </p>
          </div>

          <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/rsvp/WhatsApp Image 2026-03-06 at 11.37.47 (3).jpeg"
              alt="Frequently asked questions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/rsvp/WhatsApp Image 2026-03-06 at 11.37.47 (1).jpeg"
              alt="Extra wedding information"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Anything Else</h2>
            <p className="text-lg leading-relaxed">
              Add timings, weather advice, childcare info, transport notes, or
              anything else guests may need to know before the day.
            </p>
            <a
              href="#"
              className="underline font-medium hover:opacity-80 transition"
            >
              Contact us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
