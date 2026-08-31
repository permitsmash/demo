import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const r = messages.resources;

  return (
    <div className="container-page py-xl flex flex-col gap-xl w-full">
      {/*  Hero Section  */}
      <section className="flex flex-col items-center text-center gap-md">
        <h1 className="text-h1 text-primary">{r.title}</h1>
        <p className="text-body-lg text-on-surface-variant max-w-prose-xl">{r.subtitle}</p>
        <div className="w-full max-w-prose relative mt-sm">
          <span className="material-symbols-outlined icon-base absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="input-field pl-xl rounded-full elevation-1"
            placeholder={r.searchPlaceholder}
            type="text"
          />
        </div>
      </section>
      {/*  Content Layout with Sidebar  */}
      <section className="flex flex-col lg:flex-row gap-xl items-start">
        {/*  Sidebar Filters  */}
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-md sticky top-md">
          <h2 className="text-h3 text-primary border-b border-outline-variant pb-xs">{r.topics}</h2>
          <ul className="flex flex-col gap-xs">
            <li>
              <button type="button" className="btn-solid w-full text-left">
                {r.allTopics}
              </button>
            </li>
            <li>
              <button type="button" className="btn-ghost w-full text-left text-on-surface-variant hover:text-primary">
                {r.maneuvers}
              </button>
            </li>
            <li>
              <button type="button" className="btn-ghost w-full text-left text-on-surface-variant hover:text-primary">
                {r.roadSigns}
              </button>
            </li>
            <li>
              <button type="button" className="btn-ghost w-full text-left text-on-surface-variant hover:text-primary">
                {r.legalRules}
              </button>
            </li>
            <li>
              <button type="button" className="btn-ghost w-full text-left text-on-surface-variant hover:text-primary">
                {r.vehicleBasics}
              </button>
            </li>
            <li>
              <button type="button" className="btn-ghost w-full text-left text-on-surface-variant hover:text-primary">
                {r.emergencies}
              </button>
            </li>
          </ul>
        </aside>
        {/*  Main Categories  */}
        <div className="flex-1 flex flex-col gap-xl w-full">
          {/*  Category: Theory Test Prep  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-h2 text-secondary-container icon-filled">
                quiz
              </span>{" "}
              {r.theoryTestPrep}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="card-hover flex flex-col gap-sm">
                <div className="flex items-center justify-between mb-xs">
                  <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                    {r.legalRules}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined icon-sm">schedule</span> 15 {r.minRead}
                  </span>
                </div>
                <h3 className="text-h3 text-primary">{r.officialHighwayCode}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow">{r.officialHighwayCodeDesc}</p>
                <a className="btn-link mt-sm w-max" href="#">
                  {r.readGuide} <span className="material-symbols-outlined icon-base">arrow_forward</span>
                </a>
              </div>
              <div className="card-hover flex flex-col gap-sm">
                <div className="flex items-center justify-between mb-xs">
                  <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                    {r.roadSigns}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined icon-sm">format_list_bulleted</span> 50 {r.questions}
                  </span>
                </div>
                <h3 className="text-h3 text-primary">{r.roadSignsQuiz}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow">{r.roadSignsQuizDesc}</p>
                <a className="btn-link mt-sm w-max" href="#">
                  {r.startQuiz} <span className="material-symbols-outlined icon-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          {/*  Category: Practical Driving Guides  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-h2 text-secondary-container icon-filled">
                menu_book
              </span>{" "}
              {r.practicalGuides}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="card-hover flex flex-col gap-sm">
                <div className="flex items-center justify-between mb-xs">
                  <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                    {r.maneuvers}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined icon-sm">schedule</span> 8 {r.minRead}
                  </span>
                </div>
                <h3 className="text-h3 text-primary">{r.parallelParking}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow">{r.parallelParkingDesc}</p>
                <a className="btn-link mt-sm w-max" href="#">
                  {r.readGuide} <span className="material-symbols-outlined icon-base">arrow_forward</span>
                </a>
              </div>
              <div className="card-hover flex flex-col gap-sm">
                <div className="flex items-center justify-between mb-xs">
                  <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                    {r.vehicleBasics}
                  </span>
                  <span className="flex items-center gap-xs text-on-surface-variant text-label-caps">
                    <span className="material-symbols-outlined icon-sm">download</span> 2.4 MB PDF
                  </span>
                </div>
                <h3 className="text-h3 text-primary">{r.preDriveChecklist}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow">{r.preDriveChecklistDesc}</p>
                <a className="btn-link mt-sm w-max" href="#">
                  {r.downloadPdf} <span className="material-symbols-outlined icon-base">download</span>
                </a>
              </div>
            </div>
          </div>
          {/*  Category: Video Lessons  */}
          <div className="flex flex-col gap-md">
            <h2 className="text-h2 text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-h2 text-secondary-container icon-filled">
                play_circle
              </span>{" "}
              {r.videoLessons}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="card-hover overflow-hidden flex flex-col p-0">
                <div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
                  <span className="material-symbols-outlined icon-3xl text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 icon-filled">
                    play_circle
                  </span>
                  <span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">
                    12:45
                  </span>
                </div>
                <div className="p-md flex flex-col gap-sm flex-grow">
                  <div className="flex items-center gap-sm">
                    <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                      {r.emergencies}
                    </span>
                  </div>
                  <h3 className="text-h3 text-primary">{r.adverseWeather}</h3>
                  <p className="text-body-md text-on-surface-variant flex-grow">{r.adverseWeatherDesc}</p>
                  <a className="btn-link mt-sm w-max" href="#">
                    {r.watchVideo} <span className="material-symbols-outlined icon-base">play_arrow</span>
                  </a>
                </div>
              </div>
              <div className="card-hover overflow-hidden flex flex-col p-0">
                <div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
                  <span className="material-symbols-outlined icon-3xl text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 icon-filled">
                    play_circle
                  </span>
                  <span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">
                    08:20
                  </span>
                </div>
                <div className="p-md flex flex-col gap-sm flex-grow">
                  <div className="flex items-center gap-sm">
                    <span className="badge-outline bg-secondary-container/10 text-secondary-container">
                      {r.maneuvers}
                    </span>
                  </div>
                  <h3 className="text-h3 text-primary">{r.roundabouts}</h3>
                  <p className="text-body-md text-on-surface-variant flex-grow">{r.roundaboutsDesc}</p>
                  <a className="btn-link mt-sm w-max" href="#">
                    {r.watchVideo} <span className="material-symbols-outlined icon-base">play_arrow</span>
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
