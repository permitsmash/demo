import Link from "next/link";

export default function Page() {
  return (
    <>
      {/*  Hero Section  */}
<section className="relative bg-primary py-xl px-md overflow-hidden">
{/*  Background Image overlay  */}
<div className="absolute inset-0 opacity-10 bg-cover bg-center" data-alt="A professional, slightly out-of-focus view of a modern steering wheel inside a high-end vehicle. The lighting is bright and clear, reflecting a sunny day outside. The mood is confident, safe, and professional, aligning with a premium driving school aesthetic. Deep navy blues and crisp whites dominate the visual space." style={{ 'backgroundImage': 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCQLRiXY0UmgyTnjZ47s3bJ4guCUbznXjn3F4yeilgOslORiBcPPT_WzwEN0swh_yw9nazNDr4MW0Y6G9-n0ptCL_SCtVm10vmq3QZu0nxRazxNCZcBlq7xOCkSqoq1Wer_6TBtAAqTZo77ZXhUnnGpdXt_2E2qUOSKNEU5KFciHj-7BOOWJheGide-U2B2UJySNqkfEMCzcOA-cKAePAjGG7kGiTp5WRtVaHGtav672vzgcicBGyxxFNdZa-yBOCDnK8tLJZWyq4A\')' }}></div>
<div className="relative max-w-[1200px] mx-auto text-center z-10">
<h1 className="font-h1 text-h1 text-on-primary mb-md">Frequently Asked Questions</h1>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-[42rem] mx-auto mb-lg">
                    Find answers to common questions about our driving courses, scheduling, and policies. We're here to make your learning journey as smooth as possible.
                </p>
{/*  Search Bar  */}
<div className="max-w-[36rem] mx-auto relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
<input className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:ring-2 focus:ring-secondary-container focus:outline-none transition-shadow" placeholder="Search for topics, e.g. 'cancellation policy'" type="text"/>
</div>
</div>
</section>
{/*  FAQ Layout  */}
<section className="max-w-[1200px] mx-auto px-md py-xl">
<div className="grid md:grid-cols-12 gap-xl items-start">
{/*  Sidebar Categories (Desktop)  */}
<aside className="hidden md:block md:col-span-3 sticky top-32">
<nav className="flex flex-col gap-sm border-l border-outline-variant pl-sm">
<a className="font-button text-button text-secondary-container py-2 border-l-2 border-secondary-container -ml-[13px] pl-3" href="#general">General Information</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2 pl-3" href="#lessons">Lessons &amp; Scheduling</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2 pl-3" href="#pricing">Pricing &amp; Payments</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-2 pl-3" href="#test">Test Preparation</a>
</nav>
</aside>
{/*  Accordion Content  */}
<div className="md:col-span-9 flex flex-col gap-xl">
{/*  Category: General Information  */}
<div className="scroll-mt-32" id="general">
<div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-2">
<span className="material-symbols-outlined text-secondary-container" data-weight="fill">info</span>
<h2 className="font-h2 text-h2 text-primary">General Information</h2>
</div>
<div className="flex flex-col gap-sm">
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    What are the age requirements to start driving lessons?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Per Massachusetts RMV rules, students must be at least <strong>15 years and 9 months old</strong> before the first day of class. A valid learner&apos;s permit is required before any road (behind‑the‑wheel) lessons can be scheduled.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    What documents do I need to bring to my first lesson?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    For your first behind‑the‑wheel lesson, you must bring your valid <strong>physical learner&apos;s permit</strong>. Digital copies are not accepted by state law. You should also wear closed‑toe shoes and bring any corrective lenses if required by your permit.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Which areas do you serve?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    JMC Driving School serves <strong>Waltham, MA and surrounding areas</strong>, including road test sponsorship at Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford. Contact the office to confirm program availability for your area.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Do I need my own account or can a parent sign up for me?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    When registering online, the account should always be created in the <strong>student&apos;s name</strong> with the student&apos;s information. A parent/guardian can complete payment, but the profile itself must match the student.
                                </div>
</details>
</div>
</div>
{/*  Category: Lessons & Scheduling  */}
<div className="scroll-mt-32" id="lessons">
<div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-2">
<span className="material-symbols-outlined text-secondary-container" data-weight="fill">calendar_month</span>
<h2 className="font-h2 text-h2 text-primary">Lessons &amp; Scheduling</h2>
</div>
<div className="flex flex-col gap-sm">
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    How long is each driving lesson?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Our standard behind‑the‑wheel lessons are 90 minutes long. We have found this duration optimal for maintaining focus while allowing enough time to practice multiple maneuvers and routes.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    How do I find and register for a class?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    The easiest way is to use the <strong>Classes</strong> page on this site to see accelerated course dates, or contact our office at <strong>(781) 373-1730</strong> or <strong>contact@jmcdrivingschool.com</strong>. You can register through our website, over the phone, or visit our Waltham office.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Is there a mandatory parent/guardian class?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Yes. For new students as of May 1, 2019, the MA Registry requires a <strong>mandatory 2‑hour parent/guardian class</strong>. It must be completed <strong>before any road lessons</strong> begin, but it does <em>not</em> need to be completed before classroom sessions.
                                </div>
</details>
</div>
</div>
{/*  Category: Pricing & Payments  */}
<div className="scroll-mt-32" id="pricing">
<div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-2">
<span className="material-symbols-outlined text-secondary-container" data-weight="fill">payments</span>
<h2 className="font-h2 text-h2 text-primary">Pricing &amp; Payments</h2>
</div>
<div className="flex flex-col gap-sm">
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    What payment methods do you accept?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    We accept major credit and debit cards for online payments. You may also pay in person at our Waltham office during posted office hours (<strong>Mon-Fri 10am-4pm</strong>).
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Is there a required deposit?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Yes. A <strong>$400 deposit</strong> is required before the start of classroom sessions for the full program package. The remaining balance is due by the last day of class.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    What is the gas surcharge policy?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    If gas prices reach <strong>$4.00 or higher</strong>, a <strong>$5.00 surcharge per road lesson</strong> is added to help cover fuel costs.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    How do RMV fees differ from JMC Driving School fees?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    JMC Driving School fees cover your classroom, road lessons, observations, and certificate. Separate from that, the Massachusetts RMV charges <strong>$50 for the license</strong> and <strong>$35 for the state exam</strong> (total <strong>$85</strong>). RMV fees are paid directly to the state, ideally online before your exam date.
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Do you offer gift certificates?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Yes. Gift certificates are available and can be used toward lessons or full programs. Visit our <strong>Gift Cards</strong> page or contact the office to purchase.
                                </div>
</details>
</div>
</div>
{/*  Category: Test Preparation & Road Test  */}
<div className="scroll-mt-32" id="test">
<div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-2">
<span className="material-symbols-outlined text-secondary-container" data-weight="fill">assignment_turned_in</span>
<h2 className="font-h2 text-h2 text-primary">Test Preparation &amp; Road Test</h2>
</div>
<div className="flex flex-col gap-sm">
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Can JMC Driving School schedule and sponsor my license road test?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    Yes. JMC Driving School offers road test sponsorship at our Waltham office and RMV locations in Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford. Contact the office for current fees and availability. <strong>Road test fees are non-refundable.</strong>
                                </div>
</details>
<details className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
                                    Where can I practice for the permit test?
                                    <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
                                    You can use our <strong>Resources</strong> page for study guides and practice materials, and the main JMC Driving School site also links to official <strong>permit practice tests</strong>. These tools are a great way to prepare before scheduling your permit exam.
                                </div>
</details>
</div>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="bg-surface-container-low py-xl px-md border-t border-outline-variant">
      <div className="max-w-[48rem] mx-auto text-center flex flex-col items-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" style={{ 'fontSize': '48px' }}>support_agent</span>
<h2 className="font-h2 text-h2 text-primary mb-sm">Still have questions?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                    If you couldn't find what you were looking for, our support team is ready to help you navigate your journey.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
  <Link
    href="/contact"
    className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-3 rounded-lg hover:bg-secondary transition-colors duration-200 shadow-sm w-full sm:w-auto inline-flex items-center justify-center"
  >
    Contact Support
  </Link>
</div>
</div>
</section>
    </>
  );
}
