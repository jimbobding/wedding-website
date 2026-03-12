"use client";

import { useEffect, useState } from "react";
import { submitRSVP } from "../actions/rsvp";

const MEAL_CHOICES_KEY = "wedding_meal_choices_v1";

type MealChoices = {
  starter: string;
  main: string;
};

function readMealChoices(): MealChoices {
  try {
    const saved = localStorage.getItem(MEAL_CHOICES_KEY);
    if (!saved) return { starter: "", main: "" };

    const parsed = JSON.parse(saved);

    return {
      starter: parsed?.starter ?? "",
      main: parsed?.main ?? "",
    };
  } catch {
    return { starter: "", main: "" };
  }
}

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [mealChoices, setMealChoices] = useState<MealChoices>({
    starter: "",
    main: "",
  });

  useEffect(() => {
    setMealChoices(readMealChoices());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const attending = String(form.get("attending") || "yes").trim();
    const dietary = String(form.get("dietary") || "").trim();
    const accessibility = String(form.get("accessibility") || "").trim();

    try {
      const result = await submitRSVP({
        name,
        email,
        attending,
        starter: mealChoices.starter,
        main: mealChoices.main,
        dietary,
        accessibility,
      });

      if (!result.ok) {
        throw new Error("RSVP submission failed");
      }

      formElement.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#89986D]/30 bg-white p-8 text-center shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold">
          Thank you for RSVPing 💍
        </h2>
        <p className="text-[#89986D]">
          We have received your details and sent you a confirmation email.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSubmitError("");
          }}
          className="mt-6 rounded-full bg-[#89986D] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          OK
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl space-y-6" id="rsvp">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">RSVP</h1>
        <p className="mt-2 text-[#89986D]">
          Please confirm your attendance below
        </p>
      </div>

      <div className="rounded-2xl border border-[#89986D]/20 bg-[#f7f7f5] p-4 text-sm leading-6 text-[#5f694c]">
        Please submit an RSVP for{" "}
        <span className="font-semibold">each guest separately</span> so that
        every person’s food choices are recorded correctly.
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-[#89986D]/30 bg-white p-6 shadow-lg"
      >
        <div className="rounded-xl bg-[#f7f7f5] p-4 text-sm">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#89986D]">
            Your meal choices
          </p>

          <p>
            <strong>Starter:</strong> {mealChoices.starter || "—"}
          </p>

          <p>
            <strong>Main:</strong> {mealChoices.main || "—"}
          </p>
        </div>

        {submitError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {submitError}
          </div>
        )}

        <select
          name="attending"
          required
          defaultValue="yes"
          className="w-full rounded-full border border-[#89986D]/30 p-3"
        >
          <option value="yes">Yes, I can make it</option>
          <option value="no">No, sadly can’t</option>
        </select>

        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-full border border-[#89986D]/30 p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-full border border-[#89986D]/30 p-3"
        />

        <textarea
          name="dietary"
          placeholder="Dietary requirements / allergies"
          rows={3}
          className="w-full rounded-xl border border-[#89986D]/30 p-3"
        />

        <textarea
          name="accessibility"
          placeholder="Accessibility requirements"
          rows={3}
          className="w-full rounded-xl border border-[#89986D]/30 p-3"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#89986D] py-3 font-semibold text-white transition hover:opacity-90"
        >
          {isSubmitting ? "Sending RSVP..." : "Submit RSVP"}
        </button>
      </form>
    </div>
  );
}
