import Link from "next/link";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-xl px-md">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
              Important updates
            </span>
            <h1 className="font-h1 text-h1 text-primary">
              Driver&apos;s Ed: Accelerated Courses
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[48rem]">
              Intensive in-person sessions with set dates. All Driver&apos;s Ed classes are conducted in-person at our Waltham office. Please contact the office for more information and availability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-sm mt-sm">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                Location
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {site.address.full}
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                Office Hours
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {site.officeHours}
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">groups</span>
                Class Format
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                In-person classes with smaller groups. Limited slots available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-md py-xl flex flex-col gap-xl">
        <div className="flex flex-col gap-md">
          <div>
            <h2 className="font-h2 text-h2 text-primary mb-sm">Upcoming Accelerated Sessions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[42rem]">
              Contact the office to confirm availability and register for an accelerated course.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-lowest">
            <table className="min-w-full text-left text-body-sm font-body-sm">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="py-xs px-sm text-on-surface-variant">Session</th>
                  <th className="py-xs px-sm text-on-surface-variant">Dates</th>
                  <th className="py-xs px-sm text-on-surface-variant text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {site.acceleratedCourses.map((course) => (
                  <tr key={course.label} className="border-t border-outline-variant/60">
                    <td className="py-xs px-sm">{course.label}</td>
                    <td className="py-xs px-sm">{course.dates}</td>
                    <td className="py-xs px-sm text-right">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-sm py-xs rounded-full border border-primary text-primary font-button text-button hover:bg-surface-container transition-colors"
                      >
                        Contact Office
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-primary rounded-xl p-lg text-on-primary">
          <h2 className="font-h2 text-h2 mb-md">ATTENTION: Driver&apos;s Ed Classes: In-Person</h2>
          <div className="space-y-md font-body-md text-on-primary-container">
            <p>
              <strong>Dear Students and Parents:</strong> All Driver&apos;s Ed classes will be conducted in-person! As we offer smaller groups, slots are limited. Please hurry to guarantee your spot.
            </p>
            <p>
              You can register through our website, over the phone, or visit our office. Contact us at{" "}
              <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or{" "}
              <a href={`tel:${site.phoneTel}`} className="underline">{site.phone}</a>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md border-t border-outline-variant pt-xl">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
            <div className="flex items-center gap-xs mb-xs">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                policy
              </span>
              <h3 className="font-h3 text-h3 text-primary">Refund Policy</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              You are entitled to a full refund within 7 days of purchase if no services were used. <strong>ROAD TEST FEE IS NON-REFUNDABLE.</strong>
            </p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
            <div className="flex items-center gap-xs mb-xs">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                support_agent
              </span>
              <h3 className="font-h3 text-h3 text-primary">Need help?</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Call our office at <strong>{site.phone}</strong> during office hours ({site.officeHours}) and we&apos;ll help you find the right class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
