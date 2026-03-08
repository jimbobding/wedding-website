"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type ChoiceState = {
  starter?: string;
  main?: string;
};

type MenuItem = {
  name: string;
  extras: string;
};

const STORAGE_KEY = "wedding_meal_choices_v1";

function notifyMealChoicesUpdated() {
  window.dispatchEvent(new Event("wedding:mealChoicesUpdated"));
}

export default function MenuChoices() {
  const starters = useMemo<MenuItem[]>(
    () => [
      {
        name: "Chicken Liver Parfait",
        extras: "Red onion marmalade, toasted bread",
      },
      {
        name: "Hot Smoked Sea Trout",
        extras: "Potato hash, brown confit lemon, wasabi crème fraîche",
      },
      {
        name: "Caramelised Onion & Spinach Ravioli (Vegan)",
        extras: "Parmesan, herb butter",
      },
    ],
    [],
  );

  const mains = useMemo<MenuItem[]>(
    () => [
      {
        name: "Roast Chicken Breast",
        extras: "Confit garlic mash, green peppercorn & pancetta velouté",
      },
      {
        name: "Braised Feather Blade of Beef",
        extras: "Truffle parmesan croquette, jus, seasonal greens",
      },
      {
        name: "Ratatouille Pie (Vegan)",
        extras: "Roasted vegetables, rich tomato sauce",
      },
    ],
    [],
  );

  const [choice, setChoice] = useState<ChoiceState>(() => {
    if (typeof window === "undefined") return {};

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return {};

    try {
      return JSON.parse(saved) as ChoiceState;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    function handleReset() {
      setChoice({});

      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }

    window.addEventListener("wedding:mealChoicesReset", handleReset);
    return () => {
      window.removeEventListener("wedding:mealChoicesReset", handleReset);
    };
  }, []);

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
    } catch {}
  }

  return (
    <section className="rounded-3xl border border-[#89986D]/30 bg-white/40 p-6 sm:p-8 shadow-lg shadow-black/10">
      <div className="space-y-2 text-center md:text-left">
        <p className="uppercase tracking-[0.3em] text-xs text-[#89986D]/70">
          RSVP Meal Choice
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold font-[var(--font-playfair)]">
          Choose your starter + main
        </h3>
        <p className="text-sm sm:text-base text-[#89986D]/90">
          Please select one starter and one main. Your choices will carry over
          to the RSVP form automatically.
        </p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Starters */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#89986D]/80">
            Starters
          </h4>

          <div className="grid gap-3">
            {starters.map((item) => {
              const selected = choice.starter === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    setChoice((c) => {
                      const next = { ...c, starter: item.name };
                      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                      notifyMealChoicesUpdated();
                      return next;
                    })
                  }
                  className={[
                    "text-left rounded-2xl border p-4 transition",
                    selected
                      ? "border-[#89986D] bg-white/70 shadow"
                      : "border-[#89986D]/20 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-[#5f6b4d]">{item.extras}</p>
                    </div>
                    <span className="text-sm shrink-0">
                      {selected ? "✅" : ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mains */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#89986D]/80">
            Mains
          </h4>

          <div className="grid gap-3">
            {mains.map((item) => {
              const selected = choice.main === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    setChoice((c) => {
                      const next = { ...c, main: item.name };
                      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                      notifyMealChoicesUpdated();
                      return next;
                    })
                  }
                  className={[
                    "text-left rounded-2xl border p-4 transition",
                    selected
                      ? "border-[#89986D] bg-white/70 shadow"
                      : "border-[#89986D]/20 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-[#5f6b4d]">{item.extras}</p>
                    </div>
                    <span className="text-sm shrink-0">
                      {selected ? "✅" : ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={save}
          className="rounded-2xl px-5 py-3 bg-[#89986D] text-white font-semibold hover:opacity-90 transition"
        >
          Save choices
        </button>

        <Link
          href="#rsvp"
          onClick={save}
          className="rounded-2xl px-5 py-3 border border-[#89986D]/40 bg-white/50 font-semibold text-center hover:bg-white/70 transition"
        >
          Continue to RSVP →
        </Link>
      </div>
    </section>
  );
}
