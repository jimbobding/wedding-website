import Image from "next/image";
import Link from "next/link";
import MenuChoices from "./MenuChoices";

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-[#FFD3D5] text-[#89986D] px-6 py-16 font-[var(--font-inter)]">
      <section className="max-w-5xl mx-auto space-y-20" id="food">
        {/* PAGE TITLE */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-[var(--font-playfair)]">
            Food + Drink
          </h1>
          <div className="mx-auto h-[3px] w-20 sm:w-24 rounded-full bg-[#89986D]/60" />
        </div>

        {/* SECTION 1: MENU HIGHLIGHTS + IMAGES */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
                Food
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Food throughout the Day
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#89986D]/50" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              A selection of food to meet all dietary requirements will be
              served throughout the day.
            </p>

            <ul className="list-disc list-inside text-base sm:text-lg space-y-2 marker:text-[#89986D]/70">
              <li>Canapes</li>
              <li>Two-course sit down meal</li>
              <li>Cake buffet</li>
              <li>Light evening food</li>
            </ul>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {[
              "/images/Kingstreet-rooftop-view.jpg",
              "/images/Food/boddingtons.jpg",
              "/images/canape-platter.webp",
              "/images/kingstreet-rooftop-daytime.jpg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-lg shadow-black/20 transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Food image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: DRINKS + IMAGES */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* IMAGES */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {[
              "/images/Blackfriar-restaurant.jpeg",
              "/images/Kingstreet-rooftop.jpg",
              "/images/Food/fizzy.jpg",
              "/images/Food/pie.jpg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-lg shadow-black/20 transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Drinks image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* TEXT */}
          <div className="space-y-10 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
                Drinks
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Drinks Throughout the Day
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#89986D]/50" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#89986D]/80">
                  Post-Ceremony
                </h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  A drinks reception will follow the ceremony with both
                  alcoholic and non-alcoholic options. A bar will be available
                  for anyone wishing to purchase additional drinks.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#89986D]/80">
                  Daytime Reception
                </h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  Wine, beer, and soft drinks will be served throughout the
                  meal, with a bar available for additional or alternative
                  choices.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#89986D]/80">
                  Evening Reception
                </h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  Evening guests will be welcomed with drinks, and the bar will
                  remain open throughout the night.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: MEAL CHOICES (BOTTOM) */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
              RSVP Meal Choice
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
              Choose your starter + main
            </h2>
            <p className="text-sm sm:text-base text-[#89986D]/90">
              <span className="font-semibold">Day guests only:</span> if you’re
              joining us for the sit meal, please choose your starter and main
              below before completing your RSVP.
            </p>
          </div>

          <MenuChoices />
        </div>
      </section>
    </main>
  );
}
