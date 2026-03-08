import RSVPForm from "./RSVPForm";
export default function RSVPPage() {
  return (
    <main className="min-h-screen bg-pink-200 text-pink-900 p-10">
      <section className="max-w-3xl mx-auto space-y-12" id="rsvp">
        <h1 className="text-5xl font-bold text-center">RSVP</h1>

        <div className="space-y-6">
          <RSVPForm />
        </div>
      </section>
    </main>
  );
}
