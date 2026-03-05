import RSVPForm from "./RSVPForm";
export default function RSVPPage() {
  return (
    <main className="min-h-screen bg-pink-200 text-pink-900 p-10">
      <section className="max-w-3xl mx-auto space-y-12" id="rsvp">
        <h1 className="text-5xl font-bold text-center">RSVP</h1>

        <div className="space-y-6">
          <p className="text-lg">
            When you're ready, embed a form here (Google Forms, Typeform,
            custom, etc).
          </p>

          <div className="w-full h-72 bg-pink-300 rounded-xl flex items-center justify-center">
            <span className="opacity-60">Form Placeholder</span>
          </div>
          <RSVPForm />
        </div>
      </section>
    </main>
  );
}
