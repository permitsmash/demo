import Link from "next/link";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <section className="relative bg-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-md py-xl flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1 text-on-primary z-10">
            <span className="text-label-caps font-label-caps text-secondary-fixed uppercase tracking-widest mb-sm block">
              {site.serviceArea}
            </span>
            <h1 className="font-h1 text-h1 mb-md">About {site.name}</h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-lg">
              Professional driving lessons in Waltham, Massachusetts. Certified instructors helping new drivers gain skills and confidence on the road.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex bg-secondary-container text-on-secondary-container px-lg py-md rounded-lg font-button text-button hover:opacity-90 active:scale-95 transition-all"
            >
              Call Now: {site.phone}
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="JMC Driving School instructor and student"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5oOGsbpU1d5T2hEI3VC4iROq8DATuIEehkWr2KLPbnHSudyQAPbMoTwVzBKxo7K6D_OXjZsWlU9ss_jAQQX6sMySKnKjyuPyY5xXs9swMi_Ah9MYwcrcPeK8N1wg-_JDUXB665ipSsRq9Z0iYbyM1UtjZJfBFM6isL8I56s9qpckGxG7N-gz7rg2PTHTn1V865jtdxcVuMSPI701Gi18GQg_yvpLpSqhDO1XFaAdcCXFMm5yRIMwKS-zJvKrH4SUijEanFFqLmXA"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-md py-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-7">
            <h2 className="font-h2 text-h2 mb-md">Our Mission</h2>
            <div className="space-y-md text-on-surface-variant font-body-md">
              <p>
                {site.name} is a place where students of all ages can learn the skills and rules required to be a safe, responsible, and courteous driver. We offer programs for teens, parents, and adult drivers throughout {site.serviceArea}.
              </p>
              <p>
                Whether you are starting from zero or preparing for your road test, our certified instructors provide the professional instruction and support you need to succeed. We conduct all Driver&apos;s Ed classes in-person with smaller groups to ensure personalized attention.
              </p>
              <p>
                Our team serves a diverse community and offers support in English, Português, and Español. Contact our office at{" "}
                <a href={`tel:${site.phoneTel}`} className="text-primary font-semibold hover:underline">
                  {site.phone}
                </a>{" "}
                or{" "}
                <a href={`mailto:${site.email}`} className="text-primary font-semibold hover:underline">
                  {site.email}
                </a>{" "}
                to learn more about availability.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-surface-container rounded-xl p-lg border border-outline-variant">
            <h3 className="font-h3 text-h3 mb-sm text-primary">Office Information</h3>
            <ul className="space-y-sm font-body-md text-on-surface-variant">
              <li>
                <span className="font-semibold text-primary">Address:</span> {site.address.full}
              </li>
              <li>
                <span className="font-semibold text-primary">Phone:</span>{" "}
                <a href={`tel:${site.phoneTel}`} className="hover:underline">{site.phone}</a>
              </li>
              <li>
                <span className="font-semibold text-primary">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </li>
              <li>
                <span className="font-semibold text-primary">Hours:</span> {site.officeHours}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 mb-sm text-primary">The {site.name} Difference</h2>
            <p className="text-on-surface-variant max-w-[42rem] mx-auto">
              Certified instruction, flexible scheduling, and road test sponsorship. Everything you need to get on the road with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">verified</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">Certified Instructors</h3>
              <p className="text-on-surface-variant font-body-md">
                Our instructors are state-certified professionals dedicated to helping you pass your road test and drive safely for life.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">Flexible Scheduling</h3>
              <p className="text-on-surface-variant font-body-md">
                Register online, by phone, or in person. We offer accelerated courses and in-person classes with limited slots.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">Road Test Sponsorship</h3>
              <p className="text-on-surface-variant font-body-md">
                Road test sponsorship available at our Waltham office and RMV locations including Watertown, Lowell, Wilmington, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-md py-xl mb-xl">
        <div className="bg-primary-container rounded-3xl p-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary-container/10"></div>
          <div className="relative z-10">
            <h2 className="font-h2 text-h2 text-on-primary mb-md">Ready to start your journey?</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-lg max-w-[36rem] mx-auto">
              Contact our office to check availability for in-person Driver&apos;s Ed classes and accelerated courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <Link
                href="/sign-up"
                className="inline-flex justify-center bg-secondary-container text-on-secondary-container px-xl py-md rounded-lg font-button text-button hover:opacity-90 active:scale-95 transition-all"
              >
                Enroll Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex justify-center bg-transparent border border-on-primary text-on-primary px-xl py-md rounded-lg font-button text-button hover:bg-on-primary/10 transition-all"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
