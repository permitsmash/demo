import Link from "next/link";
import Image from "next/image";
import heroDriving from "@/app/hero-driving.jpg";
import { ReviewScroller } from "@/components/ReviewScroller";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <section className="relative bg-surface-container-lowest overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-md py-xl md:py-[120px] grid md:grid-cols-2 gap-lg items-center min-h-[600px]">
          <div className="order-2 md:order-1 z-10 flex flex-col gap-md">
            <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
              {site.serviceArea}
            </span>
            <h1 className="font-h1 text-h1 text-primary">{site.tagline}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
              {site.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-sm mt-sm">
              <a
                href={`tel:${site.phoneTel}`}
                className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-md rounded hover:bg-secondary transition-colors active:scale-95 shadow-sm inline-flex items-center justify-center gap-xs"
              >
                Call Now: {site.phone}
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  call
                </span>
              </a>
              <Link
                href="/courses"
                className="border-2 border-primary text-primary bg-transparent font-button text-button px-lg py-md rounded hover:bg-primary hover:text-on-primary transition-colors active:scale-95 inline-flex items-center justify-center"
              >
                View Programs
              </Link>
            </div>
            <div className="mt-md flex flex-wrap gap-sm">
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                Certified Instructors
              </span>
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">calendar_month</span>
                Flexible Scheduling
              </span>
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">assignment_turned_in</span>
                Road Test Sponsorship
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] md:h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest/60 border border-outline-variant">
            <Image
              src={heroDriving}
              alt={`${site.name} driving lessons in Waltham, Massachusetts`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-lg">
            <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
              Important updates
            </span>
            <h2 className="font-h2 text-h2 text-primary mb-sm mt-sm">
              Driver&apos;s Ed: Accelerated Courses
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              Intensive sessions with set dates. Please contact the office for more information and availability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-md mb-lg">
            {site.acceleratedCourses.map((course) => (
              <div
                key={course.label}
                className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant text-center"
              >
                <h3 className="font-h3 text-h3 text-primary mb-xs">{course.label}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{course.dates}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-sm">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-lg py-md rounded hover:bg-inverse-surface transition-colors"
            >
              Call Now: {site.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary text-primary font-button text-button px-lg py-md rounded hover:bg-surface-dim transition-colors"
            >
              Contact the office
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-xl border-y border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">Road Test Sponsorships</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              Available at the JMC office or RMV locations in:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-sm">
            {site.roadTestLocations.map((location) => (
              <span
                key={location}
                className="inline-flex items-center rounded-full bg-surface-container-low px-md py-sm text-body-sm font-body-sm text-secondary-container border border-outline-variant"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-xl">
        <div className="max-w-[1200px] mx-auto px-md text-center">
          <h2 className="font-h2 text-h2 text-on-primary mb-md">
            ATTENTION: Driver&apos;s Ed Classes: In-Person
          </h2>
          <div className="max-w-[48rem] mx-auto space-y-md font-body-md text-body-md text-on-primary-container text-left md:text-center">
            <p>
              <strong>Dear Students and Parents:</strong> All Driver&apos;s Ed classes will be conducted in-person!
            </p>
            <p>
              As we offer smaller groups, slots are limited. Please hurry to guarantee your spot. You can register through our website, over the phone, or visit our office.
            </p>
            <p>
              Please contact us for availability and any questions by email:{" "}
              <a href={`mailto:${site.email}`} className="underline hover:text-secondary-fixed">
                {site.email}
              </a>{" "}
              or by calling/texting:{" "}
              <a href={`tel:${site.phoneTel}`} className="underline hover:text-secondary-fixed">
                {site.phone}
              </a>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-md mt-lg max-w-[48rem] mx-auto text-left">
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">Office Hours</h3>
              <p className="font-body-md text-body-md text-on-primary-container">{site.officeHours}</p>
            </div>
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">Cancellations</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                Accepted only {site.cancellationHours}.
              </p>
            </div>
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">Refund Policy</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                Full refund within 7 days of purchase if no services were used. Road test fee is non-refundable.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-sm mt-lg">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-button text-button px-lg py-md rounded hover:bg-secondary transition-colors"
            >
              View Programs
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center border-2 border-on-primary text-on-primary font-button text-button px-lg py-md rounded hover:bg-on-primary/10 transition-colors"
            >
              Call Now: {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-xl overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-md mb-lg">
          <div className="text-center">
            <h2 className="font-h2 text-h2 text-primary mb-sm">What Our Students Say</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              Real Google reviews from students who passed their driving test with {site.name}.
            </p>
          </div>
        </div>
        <ReviewScroller />
      </section>

      <section className="bg-surface-container py-xl">
        <div className="max-w-[1200px] mx-auto px-md text-center">
          <h2 className="font-h2 text-h2 text-primary mb-sm">Why Choose {site.name}?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto mb-lg">
            We combine certified instructors with flexible scheduling and road test sponsorship to help you succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-md">
            <div className="p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">Certified Instructors</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                State-certified professionals helping new drivers gain skills and confidence on the road.
              </p>
            </div>
            <div className="p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">Flexible Scheduling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Register online, by phone, or in person at our Waltham office during posted hours.
              </p>
            </div>
            <div className="p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">Road Test Sponsorship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sponsorship available at our office and RMV locations across Massachusetts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
