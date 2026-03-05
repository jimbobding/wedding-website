"use client";

import { useEffect, useState } from "react";
import { submitRSVP } from "../actions/rsvp";

const MEAL_CHOICES_KEY = "wedding_meal_choices_v1";

function resetMealChoices() {
  try {
    localStorage.removeItem(MEAL_CHOICES_KEY);
  } catch {}

  window.dispatchEvent(new Event("wedding:mealChoicesReset"));
}

type MealChoices = { starter: string; main: string };

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
  const [mealChoices, setMealChoices] = useState<MealChoices>({
    starter: "",
    main: "",
  });

  useEffect(() => {
    setMealChoices(readMealChoices());

    const onStorage = (e: StorageEvent) => {
      if (e.key === MEAL_CHOICES_KEY) {
        setMealChoices(readMealChoices());
      }
    };

    const onReset = () => {
      setMealChoices({ starter: "", main: "" });
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("wedding:mealChoicesReset", onReset);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("wedding:mealChoicesReset", onReset);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const attending = String(form.get("attending") || "yes");
    const dietary = String(form.get("dietary") || "");

    const starter = mealChoices.starter;
    const main = mealChoices.main;

    try {
      await submitRSVP({
        name,
        email,
        starter,
        main,
        dietary,
        attending,
      });

      formElement.reset();
      resetMealChoices();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="space-y-4 rounded-3xl border border-[#89986D]/30 bg-white/40 p-6 sm:p-8 shadow-lg shadow-black/10 text-center">
        <p className="text-lg font-semibold">Thank you for RSVPing 💍</p>
        <p className="text-sm text-[#89986D]/90">
          We’ve received your details.
        </p>

        <button
          type="button"
          onClick={() => {
            resetMealChoices();
            setSubmitted(false);
          }}
          className="rounded-full px-5 py-3 bg-[#89986D] text-white font-semibold hover:opacity-90 transition w-full"
        >
          OK
        </button>
      </div>
    );
  }

  const hasAnyChoice = !!mealChoices.starter || !!mealChoices.main;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-3xl border border-[#89986D]/30 bg-white/40 p-4 sm:p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-[#89986D]/70">
          Your meal choices
        </p>

        {!hasAnyChoice ? (
          <p className="mt-2 text-sm text-[#89986D]/90">
            No choices selected yet. Go back to the meal choices page and pick a
            starter + main.
          </p>
        ) : (
          <div className="mt-3 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Starter:</span>{" "}
              {mealChoices.starter || "—"}
            </p>
            <p>
              <span className="font-semibold">Main:</span>{" "}
              {mealChoices.main || "—"}
            </p>
          </div>
        )}
      </div>

      <select
        name="attending"
        required
        className="border border-[#89986D]/30 bg-white/70 p-3 w-full rounded-full"
        defaultValue="yes"
      >
        <option value="yes">Yes, I can make it</option>
        <option value="no">No, sadly can’t</option>
      </select>

      <input
        name="name"
        placeholder="Your name"
        required
        className="border border-[#89986D]/30 bg-white/70 p-3 w-full rounded-full"
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="border border-[#89986D]/30 bg-white/70 p-3 w-full rounded-full"
      />

      <textarea
        name="dietary"
        placeholder="Dietary requirements / allergies"
        className="border border-[#89986D]/30 bg-white/70 p-3 w-full rounded-2xl"
        rows={3}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full px-5 py-3 bg-[#89986D] text-white font-semibold hover:opacity-90 transition w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit RSVP"}
      </button>
    </form>
  );
}
