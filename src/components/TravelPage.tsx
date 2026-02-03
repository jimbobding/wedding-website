import Image from "next/image";

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] px-6 py-16 font-[var(--font-inter)]">
      <section className="max-w-5xl mx-auto space-y-24">
        {/* PAGE TITLE */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-[var(--font-playfair)]">
            Travel + Accommodation
          </h1>
          <div className="mx-auto h-[3px] w-20 sm:w-24 rounded-full bg-[#EEEEEE]/60" />
        </div>

        {/* TRAVEL */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div className="space-y-10 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#EEEEEE]/70">
                Getting There
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Travel Options
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#EEEEEE]/50" />
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="font-semibold font-[var(--font-playfair)]">
                  King Street Townhouse
                </span>
                <br />
                10 Booth Street, Manchester, M2 4AW
                <br />
                Nearest Metrolink stops: St Peter’s Square & Market Street
                <br />
                10 minute walk from Piccadilly & Victoria stations
              </p>

              <p>
                <span className="font-semibold font-[var(--font-playfair)]">
                  The Black Friars
                </span>
                <br />
                41–43 Blackfriars Road, Salford, M3 7DB
                <br />
                10 minute walk from Salford Central
                <br />
                15 minute walk from Victoria station
              </p>
            </div>
          </div>

          {/* MAP IMAGE */}
          <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="/images/victoria1.avif"
              alt="Map showing travel routes to the venues"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ACCOMMODATION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="/images/accom.webp"
              alt="Accommodation near the venues"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="space-y-10 text-center md:text-left">
            <div className="space-y-3">
              <p className="uppercase tracking-[0.3em] text-xs text-[#EEEEEE]/70">
                Stay
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight font-[var(--font-playfair)]">
                Accommodation
              </h2>
              <div className="mx-auto md:mx-0 h-[2px] w-16 rounded-full bg-[#EEEEEE]/50" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#EEEEEE]/90">
              Both venues are right in the heart of Manchester, with plenty of
              lovely hotels and apartments nearby. Below are a few options at
              different price points, all within easy walking distance.
            </p>

            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                Ceremony venue:{" "}
                <a
                  href="https://www.kingstreettownhouse.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-[#EEEEEE]/50 hover:decoration-[#EEEEEE] font-medium"
                >
                  King Street Townhouse
                </a>
              </li>
              <li>
                Between both venues:{" "}
                <a
                  href="https://www.treehousehotels.com/manchester"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-[#EEEEEE]/50 hover:decoration-[#EEEEEE] font-medium"
                >
                  Treehouse Hotel
                </a>
              </li>
              <li>
                Near the reception:{" "}
                <a
                  href="https://www.google.com/travel/search?q=travelodge%20manchester%20central%20hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-[#EEEEEE]/50 hover:decoration-[#EEEEEE] font-medium"
                >
                  Travelodge Manchester Central
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
