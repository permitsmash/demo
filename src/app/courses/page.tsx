import Link from "next/link";
import AgeChecker from "@/components/AgeChecker";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full">
      {/*  Hero Section for Courses  */}
<section className="relative w-full bg-surface-container-lowest overflow-hidden py-xl px-md">
  <div className="relative max-w-[1200px] mx-auto text-center flex flex-col items-center gap-md">
    <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
      Pricing &amp; Packages
    </span>
    <h1 className="font-h1 text-h1 text-primary">Our Courses &amp; Services</h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
      From complete driver&apos;s ed to pay‑as‑you‑go lessons, choose the package that
      fits your schedule and budget while meeting all MA Registry requirements.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-sm mt-sm w-full max-w-[720px]">
      <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant rounded-lg px-md py-sm flex flex-col items-center">
        <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            payments
          </span>
          Deposit
        </div>
        <div className="font-h3 text-h3 text-primary leading-tight">$400</div>
        <div className="font-body-md text-body-md text-on-surface-variant text-xs">
          Required before the start of classroom sessions
        </div>
      </div>
      <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant rounded-lg px-md py-sm flex flex-col items-center">
        <div className="font-label-caps text-label-caps text-secondary-container uppercase">
          Road Tests
        </div>
        <div className="font-h3 text-h3 text-primary leading-tight">Sponsorship</div>
        <div className="font-body-md text-body-md text-on-surface-variant text-xs">
          Available at JMC office and RMV locations
        </div>
      </div>
      <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant rounded-lg px-md py-sm flex flex-col items-center">
        <div className="font-label-caps text-label-caps text-secondary-container uppercase">
          Effective Date
        </div>
        <div className="font-h3 text-h3 text-primary leading-tight">
          Jan 12, 2026
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant text-xs">
          Current pricing as listed on our official site
        </div>
      </div>
    </div>
    <div className="mt-md flex flex-col items-center gap-sm w-full">
      <AgeChecker />
      <p className="font-body-xs text-body-xs text-on-surface-variant max-w-[420px]">
        This tool is for guidance only. Final eligibility is determined by the
        Massachusetts RMV based on your official date of birth.
      </p>
    </div>
  </div>
</section>
{/*  Courses Grid  */}
<section className="w-full max-w-[1200px] mx-auto px-md py-xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    {/* Card 1: Full program package */}
    <div className="bg-surface-container-lowest border-2 border-secondary-container rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary-container/10 text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            description
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">Full program package</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Best value: complete the program
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="flex items-baseline justify-between gap-md">
        <div>
          <div className="font-h1 text-[32px] leading-tight text-primary">
            $995
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Save $230 vs. à la carte
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 shadow-sm">
          DISCOUNTED PACKAGE
        </span>
      </div>
      <ul className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <li className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-secondary-container text-sm">
            check_circle
          </span>
          30 hours of classroom
        </li>
        <li className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-secondary-container text-sm">
            check_circle
          </span>
          12 hours of road lessons
        </li>
        <li className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-secondary-container text-sm">
            check_circle
          </span>
          6 hours of observations
        </li>
        <li className="flex items-start gap-xs">
          <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
            check_circle
          </span>
          <span>
            Parent/guardian class (1 required)
            <br />
            Drivers Ed certificate (RMV portal)
          </span>
        </li>
      </ul>
      <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
        $400 deposit due at registration. Balance of $595 due by last day of
        class.
      </div>
      <span className="mt-xs inline-flex items-center rounded-full bg-surface-container-low px-3 py-1 text-[11px] font-medium text-on-surface-variant">
        If program not completed, price reverts to à la carte
      </span>
    </div>

    {/* Card 2: À la carte pricing */}
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-low text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            tune
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">À la carte pricing</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Pay per item: $1,225 total
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <div className="flex items-center justify-between border-b border-outline-variant/60 pb-1">
          <span>30 hrs classroom</span>
          <span className="font-semibold text-primary">$400</span>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant/60 pb-1">
          <span>12 hrs road lessons ($65 × 12)</span>
          <span className="font-semibold text-primary">$780</span>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant/60 pb-1">
          <span>6 hrs observations</span>
          <span className="font-semibold text-on-surface-variant">
            included
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant/60 pb-1">
          <span>Parent class</span>
          <span className="font-semibold text-primary">$25</span>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant/60 pb-1">
          <span>Certificate (RMV portal)</span>
          <span className="font-semibold text-primary">$20</span>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="flex items-baseline justify-between font-body-md text-body-md">
        <span className="font-semibold text-primary">Total</span>
        <span className="font-h3 text-h3 text-primary">$1,225</span>
      </div>
    </div>

    {/* Card 3: Additional fees */}
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-low text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            report
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">Additional fees</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Know before you go
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>License test (JMC Driving School)</span>
          <span className="font-semibold text-primary">$150</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>Extra road lesson</span>
          <span className="font-semibold text-primary">$65</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>No-show</span>
          <span className="font-semibold text-primary">$65</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>Cancellation (&lt;24 hrs)</span>
          <span className="font-semibold text-primary">$50</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>License test cancellation</span>
          <span className="font-semibold text-primary">$35 + $35 RMV</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>Commercial road lesson</span>
          <span className="font-semibold text-primary">$80/lesson</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>Commercial license test</span>
          <span className="font-semibold text-primary">$175</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>Returned check</span>
          <span className="font-semibold text-primary">$40</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Gas surcharge (if gas ≥ $4)</span>
          <span className="font-semibold text-primary">$5/lesson</span>
        </div>
      </div>
    </div>

    {/* Card 4: Payment information & RMV fees */}
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-low text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            credit_card
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">Payment information</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            How and where to pay
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-secondary-container font-semibold flex items-start gap-xs">
        <span
          className="material-symbols-outlined text-sm mt-[2px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          warning
        </span>
        <span>Credit card adds 6% to all prices.</span>
      </div>
      <ul className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <li>
          <span className="font-semibold text-primary">Check (mail):</span>{" "}
          973 Main St, Waltham, MA 02451
        </li>
        <li>
          <span className="font-semibold text-primary">
            Cash or check in person:
          </span>{" "}
          Mon-Fri, 10am-4pm
        </li>
      </ul>
      <div className="border-t border-outline-variant" />
      <p className="font-body-sm text-body-sm text-primary font-semibold">
        RMV fees (separate from JMC Driving School)
      </p>
      <div className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>License fee (mailed 7-10 days)</span>
          <span className="font-semibold text-primary">$50</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-1">
          <span>State exam fee</span>
          <span className="font-semibold text-primary">$35</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-primary">RMV total</span>
          <span className="font-semibold text-primary">$85</span>
        </div>
      </div>
      <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
        Best to pay RMV fees online before your exam date.
      </div>
    </div>

    {/* Card 5: Service area */}
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-low text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            map
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">Service area</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Cities served by JMC Driving School
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <div className="flex flex-wrap gap-2">
        {[
          "Waltham",
          "Watertown",
          "Lowell",
          "Wilmington",
          "Haverhill",
          "Lawrence",
          "Revere",
          "Worcester",
          "Milford",
        ].map((city) => (
          <span
            key={city}
            className="inline-flex items-center rounded-full bg-surface-container-low px-3 py-1 text-[12px] font-medium text-secondary-container"
          >
            {city}
          </span>
        ))}
      </div>
      <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
        JMC Driving School serves {site.serviceArea.toLowerCase()} and surrounding communities. Contact the office to confirm eligibility.
      </div>
      <span className="mt-xs inline-flex items-center rounded-full bg-surface-container-low px-3 py-1 text-[11px] font-medium text-on-surface-variant">
        $5/lesson gas surcharge if gas prices reach $4+
      </span>
    </div>

    {/* Card 6: Timeline & requirements */}
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-container-low text-secondary-container">
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            schedule
          </span>
        </div>
        <div>
          <h2 className="font-h2 text-h2 text-primary">Timeline &amp; requirements</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            What to expect during the program
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant" />
      <ul className="space-y-xs font-body-md text-body-md text-on-surface-variant">
        <li>
          <span className="font-semibold text-primary">
            Complete classroom + parent class first
          </span>{" "}
          before road lessons are scheduled.
        </li>
        <li>
          <span className="font-semibold text-primary">Permit required</span>{" "}
          before any road lessons begin.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Hold permit for 6 months
          </span>{" "}
          minimum (RMV requirement).
        </li>
        <li>
          <span className="font-semibold text-primary">
            ~2 road lessons/month
          </span>{" "}
          over 6 months (12 total).
        </li>
        <li>
          <span className="font-semibold text-primary">
            40+ hours of parent/guardian driving
          </span>{" "}
          required per RMV.
        </li>
        <li>
          <span className="font-semibold text-primary">Parent class:</span> 4th
          Wednesday of every month, 6-8pm (1 parent/guardian, 2 hrs).
        </li>
      </ul>
      <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
        Parent class dates are subject to change due to holidays.
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
