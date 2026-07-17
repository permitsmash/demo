import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const c = messages.careers;

  return (
    <>
      {/*  Hero Section  */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Instructor and student in car"
            className="w-full h-full object-cover opacity-40"
            data-alt="A professional driving instructor sitting in the passenger seat of a modern, clean training vehicle, smiling reassuringly at a young student driver. The scene is brightly lit with natural daylight, conveying a sense of safety, confidence, and professionalism. High-contrast corporate aesthetic with navy blue and bright white tones dominating the environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHxcDLCidBBd2I21JPqGggkllMUGwxVrJDozg8tlNEV3RlZ7ziRNyB61F93Od2hvOfiZSwDiurdBNjf1TSNkxRTSGl0AzZVQYr4yMnaGsAkN8DlL0py_wqbAwcaLDCvUcvNwCfjuHxgA32P1pwLqoP7fZdHoFzxs-k2lhjE8lJPQsZ6haxkXlX02_tefVW2qBP3vmoFZgMnjbdq-PQcuOlkKm4ZmPyZ8OUgY4dyvrAfYQ_MXq1Gh9Jx5Qw9mf6bHrPbD_XPtmBbvI"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-md py-xl flex flex-col items-center text-center">
          <h1 className="font-h1 text-h1 text-on-primary mb-md max-w-[48rem]">{c.heroTitle}</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-lg max-w-[42rem]">{c.heroDesc}</p>
          <a
            className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm"
            href="#open-positions"
          >
            {c.viewPositions}
          </a>
        </div>
      </section>
      {/*  Why Work With Us  */}
      <section className="max-w-[1200px] mx-auto px-md py-xl">
        <div className="text-center mb-lg">
          <h2 className="font-h2 text-h2 text-primary mb-sm">{c.whyWorkTitle}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">{c.whyWorkDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-md text-primary">
              <span className="material-symbols-outlined text-[32px]">schedule</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary mb-sm">{c.flexibleScheduling}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{c.flexibleSchedulingDesc}</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-md text-primary">
              <span className="material-symbols-outlined text-[32px]">directions_car</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary mb-sm">{c.modernFleet}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{c.modernFleetDesc}</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-md text-primary">
              <span className="material-symbols-outlined text-[32px]">school</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary mb-sm">{c.professionalGrowth}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{c.professionalGrowthDesc}</p>
          </div>
        </div>
      </section>
      {/*  Core Values Bento Grid  */}
      <section className="bg-surface py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <h2 className="font-h2 text-h2 text-primary mb-lg text-center">{c.coreValues}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md auto-rows-fr">
            <div className="bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <div className="absolute top-lg right-lg opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">verified</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-h3 text-h3 mb-sm">{c.integrity}</h3>
                <p className="font-body-md text-body-md text-primary-fixed">{c.integrityDesc}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-end min-h-[300px] relative overflow-hidden lg:col-span-2">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Instructor guiding student"
                  className="w-full h-full object-cover opacity-10"
                  data-alt="A calm driving instructor patiently guiding a student through a maneuver. The environment is a clean, modern corporate training facility with crisp white walls and navy blue accents. Natural light highlights the supportive and professional interaction between the two individuals."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkSKd0SedwugtpAZFrmKsXMJEO9F2OyljhEy_eDmha145Fva1NOyMGMUfVZf58aYz5xEvmhUvhbSU1Ve5cHlwCt6SRmlskEE4rLngRzJGQ8nENj70-dJo6im9-Mq74ZZRysKMIWGi311M5M2s8DYPGiY1bCmi7fnNF_0eHyOItKffvgMj_XXHexCXzGiOh9-MBN5YBIOVRZvMS_Y8zVoq5bRGCG-Si-PVPnEUIZigjM91-nQY5PjtyDd84wE3Shz25DrgJNJjnl_M"
                />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">{c.patience}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-[28rem]">{c.patienceDesc}</p>
              </div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container rounded-xl p-lg flex flex-col justify-end min-h-[300px] relative overflow-hidden lg:col-span-3">
              <div className="absolute right-0 bottom-0 z-0 h-full w-1/2 hidden md:block">
                <div className="w-full h-full bg-gradient-to-l from-transparent to-secondary-container absolute inset-0"></div>
                <img
                  alt="Safety check on vehicle"
                  className="w-full h-full object-cover mix-blend-overlay opacity-40"
                  data-alt="A close-up of a professional instructor performing a safety check on a pristine white training vehicle. High-contrast modern lighting emphasizes the clean lines of the car and the instructor's focused expression. The overall mood is authoritative, secure, and highly professional."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDldyOMqoEIIrJDb2YMYryT2FvRgy8iMj-ANkGlqjr-rK1jnFOtb1k7C34YLE6rtLYBdz6cpbM0K8uwaAdsPtDZ29k53PD8r3Ob8qqxm1XD8OHQE_BXAw3EVwwUdjMGp79Mc0bgaGTVTl02GX2suMo24iE7s4oB_7pS_y2GUkkXL9H6X-xwSJeMZl6dPaGsZd_8dakat1ZesfIW_ErpJ3jtOKMqvkfWIJQ8pAFc6RyJaBodlINH2c5ngQwOEupgL2A1JooGgY4_12Q"
                />
              </div>
              <div className="relative z-10 max-w-[36rem]">
                <h3 className="font-h3 text-h3 mb-sm">{c.safetyFirst}</h3>
                <p className="font-body-md text-body-md text-on-primary opacity-90">{c.safetyFirstDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Open Positions  */}
      <section className="max-w-[1200px] mx-auto px-md py-xl" id="hiring">
        <h2 className="font-h2 text-h2 text-primary mb-lg text-center">{c.openPositions}</h2>
        <div className="space-y-sm">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition-shadow duration-200">
            <div className="mb-md md:mb-0">
              <h3 className="font-h3 text-h3 text-primary mb-xs">{c.certifiedInstructor}</h3>
              <div className="flex flex-wrap gap-sm font-body-md text-body-md text-on-surface-variant">
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  {c.multipleLocations}
                </span>
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">work</span>
                  {c.fullPartTime}
                </span>
              </div>
            </div>
            <button className="font-button text-button text-primary border border-primary px-md py-sm rounded hover:bg-surface-container transition-colors shrink-0">
              {c.viewDetails}
            </button>
          </div>
        </div>
      </section>
      {/*  Application CTA  */}
      <section className="bg-primary-container text-on-primary text-center py-xl px-md mt-xl">
        <div className="max-w-[42rem] mx-auto">
          <span className="material-symbols-outlined text-[48px] text-secondary-container mb-md">waving_hand</span>
          <h2 className="font-h2 text-h2 mb-sm">{c.dontSeeFit}</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-lg">{c.generalApplicationDesc}</p>
          <button className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm">
            {c.submitGeneralApplication}
          </button>
        </div>
      </section>
    </>
  );
}
