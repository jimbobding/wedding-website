export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#90A17D] text-[#EEEEEE] px-6 py-10 sm:px-8 lg:px-10 flex items-center justify-center">
      <section className="w-full max-w-4xl" id="info">
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
