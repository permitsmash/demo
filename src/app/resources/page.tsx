export default function Page() {
  return (
    <div className="max-w-[1200px] mx-auto px-md py-xl flex flex-col gap-xl w-full">
      {/*  Hero Section  */}
<section className="flex flex-col items-center text-center gap-md">
<h1 className="text-h1 font-h1 text-primary">Study Resources</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-[800px]">
            Access our comprehensive library of study materials designed to help you succeed. From practice tests to essential guides, everything you need to become a confident, safe driver is right here.
        </p>
<div className="w-full max-w-[42rem] relative mt-sm">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-xl pr-md py-sm rounded-full border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md text-on-surface shadow-sm transition-all" placeholder="Search for guides, videos, or specific topics..." type="text"/>
</div>
</section>
{/*  Content Layout with Sidebar  */}
<section className="flex flex-col lg:flex-row gap-xl items-start">
{/*  Sidebar Filters  */}
<aside className="w-full lg:w-64 shrink-0 flex flex-col gap-md sticky top-md">
<h2 className="text-h3 font-h3 text-primary border-b border-outline-variant pb-xs">Topics</h2>
<ul className="flex flex-col gap-xs">
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT bg-primary text-on-primary font-button text-button transition-colors">All Topics</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">Maneuvers</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">Road Signs</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">Legal &amp; Rules</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">Vehicle Basics</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-primary font-button text-button transition-colors">Emergencies</button>
</li>
</ul>
</aside>
{/*  Main Categories  */}
<div className="flex-1 flex flex-col gap-xl w-full">
{/*  Category: Theory Test Prep  */}
<div className="flex flex-col gap-md">
<h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
<span className="material-symbols-outlined text-h2 text-secondary-container" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>quiz</span> Theory Test Prep
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
{/*  Card 1  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center justify-between mb-xs">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Legal &amp; Rules</span>
<span className="flex items-center gap-xs text-on-surface-variant text-label-caps"><span className="material-symbols-outlined text-[16px]">schedule</span> 15 min read</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Official Highway Code Review</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">A comprehensive breakdown of the most critical rules and regulations you need to know for your theory exam.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                            Read Guide <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center justify-between mb-xs">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Road Signs</span>
<span className="flex items-center gap-xs text-on-surface-variant text-label-caps"><span className="material-symbols-outlined text-[16px]">format_list_bulleted</span> 50 Questions</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Road Signs Masterclass Quiz</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">Test your knowledge of warning, regulatory, and informational signs with this extensive practice quiz.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                            Start Quiz <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  Category: Practical Driving Guides  */}
<div className="flex flex-col gap-md">
<h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
<span className="material-symbols-outlined text-h2 text-secondary-container" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>menu_book</span> Practical Driving Guides
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
{/*  Card 1  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center justify-between mb-xs">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Maneuvers</span>
<span className="flex items-center gap-xs text-on-surface-variant text-label-caps"><span className="material-symbols-outlined text-[16px]">schedule</span> 8 min read</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Parallel Parking Step-by-Step</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">Master the art of parallel parking with our detailed guide, complete with diagrams and reference points.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                            Read Guide <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center justify-between mb-xs">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Vehicle Basics</span>
<span className="flex items-center gap-xs text-on-surface-variant text-label-caps"><span className="material-symbols-outlined text-[16px]">download</span> 2.4 MB PDF</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Pre-Drive Checklist &amp; Maintenance</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">A downloadable checklist for daily vehicle checks and basic maintenance every driver should know.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                            Download PDF <span className="material-symbols-outlined text-[18px]">download</span>
</a>
</div>
</div>
</div>
{/*  Category: Video Lessons  */}
<div className="flex flex-col gap-md">
<h2 className="text-h2 font-h2 text-primary flex items-center gap-sm">
<span className="material-symbols-outlined text-h2 text-secondary-container" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>play_circle</span> Video Lessons
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
{/*  Card 1  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
<div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
<span className="material-symbols-outlined text-[64px] text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>play_circle</span>
<span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">12:45</span>
</div>
<div className="p-md flex flex-col gap-sm flex-grow">
<div className="flex items-center gap-sm">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Emergencies</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Handling Adverse Weather</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">Visual demonstration of defensive driving techniques in heavy rain and icy conditions.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                                Watch Video <span className="material-symbols-outlined text-[18px]">play_arrow</span>
</a>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
<div className="bg-surface-container h-40 w-full flex items-center justify-center relative group cursor-pointer">
<span className="material-symbols-outlined text-[64px] text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>play_circle</span>
<span className="absolute bottom-2 right-2 bg-tertiary/80 text-on-tertiary text-label-caps px-2 py-1 rounded-sm">08:20</span>
</div>
<div className="p-md flex flex-col gap-sm flex-grow">
<div className="flex items-center gap-sm">
<span className="text-label-caps font-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-sm">Maneuvers</span>
</div>
<h3 className="text-h3 font-h3 text-primary">Navigating Complex Roundabouts</h3>
<p className="text-body-md font-body-md text-on-surface-variant flex-grow">Learn how to approach, signal, and exit multi-lane roundabouts safely and confidently.</p>
<a className="mt-sm text-secondary-container font-button text-button hover:text-secondary flex items-center gap-xs w-max transition-colors" href="#">
                                Watch Video <span className="material-symbols-outlined text-[18px]">play_arrow</span>
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
