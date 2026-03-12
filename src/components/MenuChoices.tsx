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
        name: "CHICKEN LIVER PARFAIT",
        extras: "red onion marmalade + toast",
      },
      {
        name: "CARAMELISED ONION + SPINACH RAVIOLI (VG)",
        extras: "toasted pine nuts, burnt leek + lemon gel",
      },
      {
        name: "HOT SMOKED SEA TROUT (GF)*",
        extras: "potato hash brown, confit lemon + wasabi crème fraiche",
      },
    ],
    [],
  );

  const mains = useMemo<MenuItem[]>(
    () => [
      {
        name: "ROAST CHICKEN BREAST",
        extras: "confit garlic mash, green peppercorn + pancetta velouté",
      },
      {
        name: "BRAISED FEATHER BLADE OF BEEF (GF)*(DF)*",
        extras: "truffle + parmesan croquette, jus + greens",
      },
      {
        name: "RATATOULLIE PIE (V)(VG)*",
        extras: "herby new potatoes, burrata + herb crust",
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

  return (
    <section
      className="rounded-3xl border border-[#89986D]/30 bg-white/40 p-6 shadow-lg shadow-black/10 sm:p-8"
      id="menu"
    >
      <div className="space-y-2 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-[#89986D]/70">
          RSVP Meal Choice
        </p>
        <h3 className="font-[var(--font-playfair)] text-xl font-semibold sm:text-2xl">
          Choose your starter + main
        </h3>
        <p className="text-sm text-[#89986D]/90 sm:text-base">
          Please select one starter and one main. Your choices will carry over
          to the RSVP form automatically.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                    "rounded-2xl border p-4 text-left transition",
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
                    <span className="shrink-0 text-sm">
                      {selected ? "✅" : ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

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
                    "rounded-2xl border p-4 text-left transition",
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
                    <span className="shrink-0 text-sm">
                      {selected ? "✅" : ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center sm:justify-end">
        <Link
          href="#rsvp"
          className="rounded-2xl border border-[#89986D]/40 bg-white/50 px-5 py-3 text-center font-semibold transition hover:bg-white/70"
        >
          Continue to RSVP →
        </Link>
      </div>
    </section>
  );
}
