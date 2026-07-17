import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const r = messages.resources;

  return (
    <div className="max-w-[1200px] mx-auto px-md py-xl flex flex-col gap-xl w-full">
      {/*  Hero Section  */}
      <section className="flex flex-col items-center text-center gap-md">
        <h1 className="text-h1 font-h1 text-primary">{r.title}</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-[800px]">{r.subtitle}</p>
        <div className="w-full max-w-[42rem] relative mt-sm">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="w-full pl-xl pr-md py-sm rounded-full border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md text-on-surface shadow-sm transition-all"
            placeholder={r.searchPlaceholder}
            type="text"
          />
        </div>
      </section>
      {/*  Content Layout with Sidebar  */}
      <section className="flex flex-col lg:flex-row gap-xl items-start">
        {/*  Sidebar Filters  */}
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-md sticky top-md">
          <h2 className="text-h3 font-h3 text-primary border-b border-outline-variant pb-xs">{r.topics}</h2>
          <ul className="flex flex-col gap-xs">
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT bg-primary text-on-primary font-button text-button transition-colors">
                {r.allTopics}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">
                {r.maneuvers}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">
                {r.roadSigns}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">
                {r.legalRules}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">
                {r.vehicleBasics}
              </button>
            </li>
            <li>
              <button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">
                {r.emergencies}
              </button>
            </li>
          </ul>
        </aside>
        {/*  Main Categories  */}
        <div className="flex-1 flex flex-col gap-xl w-full">
          {/*  Category: Theory Test Prep  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
              <span
                className="material-symbols-outlined text-h2 text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                quiz
              </span>{" "}
              {r.theoryTestPrep}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                    {r.legalRules}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 15 {r.minRead}
                  </span>
                </div>
                <h3 className="text-h3 font-h3 text-primary">{r.officialHighwayCode}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.officialHighwayCodeDesc}</p>
                <a
                  className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                  href="#"
                >
                  {r.readGuide} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                    {r.roadSigns}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined text-[16px]">format_list_bulleted</span> 50 {r.questions}
                  </span>
                </div>
                <h3 className="text-h3 font-h3 text-primary">{r.roadSignsQuiz}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.roadSignsQuizDesc}</p>
                <a
                  className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                  href="#"
                >
                  {r.startQuiz} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          {/*  Category: Practical Driving Guides  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
              <span
                className="material-symbols-outlined text-h2 text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                menu_book
              </span>{" "}
              {r.practicalGuides}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                    {r.maneuvers}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 8 {r.minRead}
                  </span>
                </div>
                <h3 className="text-h3 font-h3 text-primary">{r.parallelParking}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.parallelParkingDesc}</p>
                <a
                  className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                  href="#"
                >
                  {r.readGuide} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                    {r.vehicleBasics}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined text-[16px]">download</span> 2.4 MB PDF
                  </span>
                </div>
                <h3 className="text-h3 font-h3 text-primary">{r.preDriveChecklist}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.preDriveChecklistDesc}</p>
                <a
                  className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                  href="#"
                >
                  {r.downloadPdf} <span className="material-symbols-outlined text-[18px]">download</span>
                </a>
              </div>
            </div>
          </div>
          {/*  Category: Video Lessons  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
              <span
                className="material-symbols-outlined text-h2 text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>{" "}
              {r.videoLessons}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
                  <span
                    className="material-symbols-outlined text-[64px] text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">
                    12:45
                  </span>
                </div>
                <div className="p-md flex flex-col gap-sm flex-grow">
                  <div className="flex items-center gap-sm">
                    <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                      {r.emergencies}
                    </span>
                  </div>
                  <h3 className="text-h3 font-h3 text-primary">{r.adverseWeather}</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.adverseWeatherDesc}</p>
                  <a
                    className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                    href="#"
                  >
                    {r.watchVideo} <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  </a>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
                  <span
                    className="material-symbols-outlined text-[64px] text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">
                    08:20
                  </span>
                </div>
                <div className="p-md flex flex-col gap-sm flex-grow">
                  <div className="flex items-center gap-sm">
                    <span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">
                      {r.maneuvers}
                    </span>
                  </div>
                  <h3 className="text-h3 font-h3 text-primary">{r.roundabouts}</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex-grow">{r.roundaboutsDesc}</p>
                  <a
                    className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors"
                    href="#"
                  >
                    {r.watchVideo} <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
