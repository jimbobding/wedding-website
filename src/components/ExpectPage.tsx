import Image from "next/image";

export default function ExpectPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] px-6 py-16 font-[var(--font-inter)]">
      <section className="max-w-5xl mx-auto space-y-24" id="expect">
        {/* PAGE TITLE */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-[var(--font-playfair)]">
            What to Expect
          </h1>
          <div className="mx-auto h-[3px] w-20 sm:w-24 rounded-full bg-[#EEEEEE]/60" />
        </div>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold font-[var(--font-playfair)] text-center">
                <span className="absolute inset-0 -z-10 bg-[#EEEEEE]/10 blur-2xl rounded-full" />
                Kings Street Townhouse
              </h2>

              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#EEEEEE]/50" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#EEEEEE]/90">
              The ceremony will start at <b>12:30pm</b>, please arrive by{" "}
              <b>12pm</b> so all guests are seated for the arrival of the bride.
              The ceremony takes place on the top floor of the building with
              beautiful views of the city. A lift is available for accessibility
              needs.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#EEEEEE]/90">
              After the ceremony, guests are invited to drinks and canapés on
              the roof terrace. More details can be found on the{" "}
              <a
                href="https://www.kingstreettownhouse.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-[#EEEEEE]/50 hover:decoration-[#EEEEEE]"
              >
                Kings Street Townhouse website
              </a>
              . A coach will then take guests to the reception venue.
            </p>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="/images/kings-street.jpg"
              alt="Kings Street Townhouse balcony"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[360px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="/images/Black-Friar-Exterior-Painting.jpg"
              alt="Black Friar exterior"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Black Friar Pub
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#EEEEEE]/50" />
            </div>

            <div className="space-y-3">
              <h3 className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#EEEEEE]/80">
                Day
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#EEEEEE]/90">
                Coaches will arrive at approximately <b>3pm</b>. A breakfast
                meal will be provided along with wine, beer, and soft drinks.
                There will also be a bar for additional purchases. Quiet spaces
                will be available for anyone needing gentler socialising.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#EEEEEE]/80">
                Evening
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#EEEEEE]/90">
                Evening guests are kindly asked to arrive at <b>6:30pm</b>.
                Welcome drinks and food will be provided, with a bar available
                for additional purchases. Expect dancing, a great live band, and
                relaxed quiet spaces.
              </p>
            </div>

            <a
              href="https://theblackfriarsalford.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline underline-offset-4 decoration-[#EEEEEE]/50 hover:decoration-[#EEEEEE] font-medium"
            >
              Visit Black Friars
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
