import Image from "next/image";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] px-6 py-10 sm:px-8 lg:px-10">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Further Information
        </h1>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl h-64 sm:h-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/FAQ/FAQ.jpeg"
              alt="Frequently asked questions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        </div>

        {/* FAQ CARD */}
        <div className="rounded-2xl bg-white/10 p-6 sm:p-8 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-center mb-6">FAQs</h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-center">
            <div className="space-y-2">
              <p className="font-semibold text-xl">Can I bring a plus one?</p>
              <p className="text-white/90">
                The email sent along with your invitation will detail who is
                invited.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-xl">Are children invited?</p>
              <p className="text-white/90">
                The wedding is mainly child-free, although we will be inviting
                children who are close family members or who have travelled with
                their family from abroad to attend. The email accompanying your
                invite will outline if your children are invited.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-xl">
                Do the venues have parking?
              </p>
              <p className="text-white/90">
                Neither venue has parking. Public transport or taxis are the
                best options, although there are paid car parks at various
                locations around the city centre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
