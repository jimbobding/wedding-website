import Image from "next/image";

export default function DressPage() {
  return (
    <main className="min-h-screen bg-[#FFD3D5] text-[#89986D] px-6 py-16 font-[var(--font-inter)]">
      <section className="max-w-5xl mx-auto space-y-24" id="dress">
        {/* PAGE TITLE */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-[var(--font-playfair)]">
            Dress Code + Gifts
          </h1>
          <div className="mx-auto h-[3px] w-20 sm:w-24 rounded-full bg-[#89986D]/60" />
        </div>

        {/* DRESS CODE */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
                What to Wear
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Dress Code
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#89986D]/50" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              Wear whatever makes you feel comfortable and fabulous. We kindly
              ask that guests avoid wearing <b>green</b>, as this is the colour
              of the bridal party (soz Lowell — we know you started the trend).
            </p>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-3 h-64 sm:h-72">
            {["/images/charles.jpg", "/images/lola.jpg"].map((src, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/20 transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Dress code inspiration ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* GIFTS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg shadow-black/20 bg-[#89986D]/10 flex items-center justify-center">
            <Image
              src="/images/RSVP/holidayus.jpeg"
              alt="Extra wedding information"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
                Gifts
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Gifts
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#89986D]/50" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              We’re so excited to celebrate with you — truly, that’s the
              greatest gift of all. If you’d like to give something extra, a
              contribution towards our honeymoon would be hugely appreciated as
              we begin married life together.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
