import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const g = messages.giftCards;

  return (
    <div className="max-w-[1200px] mx-auto px-md py-lg md:py-xl flex flex-col gap-xl w-full">
      {/*  Hero Section  */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-6 flex flex-col gap-md pr-lg">
          <h1 className="font-h1 text-h1 text-primary">{g.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{g.subtitle}</p>
          <div className="flex gap-sm mt-sm">
            <span className="flex items-center gap-xs font-label-caps text-label-caps text-primary bg-surface-container px-sm py-xs rounded-full">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              {g.stateCertified}
            </span>
            <span className="flex items-center gap-xs font-label-caps text-label-caps text-primary bg-surface-container px-sm py-xs rounded-full">
              <span className="material-symbols-outlined text-[16px]">star</span>
              {g.topRated}
            </span>
          </div>
        </div>
        <div className="md:col-span-6 relative h-[400px] rounded-lg overflow-hidden ambient-shadow">
          <img
            alt="Happy student in a car"
            className="absolute inset-0 w-full h-full object-cover"
            data-alt="A professional, high-contrast photograph of a smiling young adult sitting in the driver's seat of a clean, modern vehicle, holding a shiny set of car keys towards the camera. The lighting is crisp and natural, highlighting the pristine interior of the car and the genuine joy on the driver's face. The overarching visual style is corporate yet approachable, utilizing a color palette dominated by deep navy blues and subtle bright orange accents in the environment. The mood conveys confidence, safety, and the exciting milestone of learning to drive."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCjlTNEOaHTxb4LyD0q1syrKyH7Ndz8jCVVtmWOdEs_nbmBsKHH8AFB9v--CuHlC5IBVO4_GWyrPt3HKw7JgwNHLGN2t7Y-g1Wf5fXrBDrzDMRv6-IzVxfp6m4acxIT_j41BRcyUqwaxCKk6qQitgstuU85UFCXN_BuiL4ARt_0l8mPrjudWXEN0T93HU9UjuzDGZmIzorPKMCVMdeNGKKfTsf-dJHdYwEvp0-X9dSq5K549gkJYjly01WYjI17SnGE3aQiW9INI"
          />
        </div>
      </section>
      {/*  Bento Grid Purchase Flow  */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/*  Left Column: The Configuration Flow  */}
        <div className="lg:col-span-8 flex flex-col gap-lg">
          {/*  Step 1: Select Amount  */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg ambient-shadow">
            <h2 className="font-h3 text-h3 text-primary mb-md flex items-center gap-sm">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-button text-button">
                1
              </span>
              {g.selectAmount}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-sm">
              <button className="border border-outline-variant rounded-DEFAULT py-md flex flex-col items-center justify-center gap-xs hover:border-primary transition-colors bg-surface hover:bg-surface-container-low">
                <span className="font-h2 text-h2 text-primary">$50</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">{g.evaluationLesson}</span>
              </button>
              <button className="border-2 border-primary rounded-DEFAULT py-md flex flex-col items-center justify-center gap-xs bg-surface-container-low relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-on-primary p-xs rounded-bl-DEFAULT">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <span className="font-h2 text-h2 text-primary">$100</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">{g.standardLesson}</span>
              </button>
              <button className="border border-outline-variant rounded-DEFAULT py-md flex flex-col items-center justify-center gap-xs hover:border-primary transition-colors bg-surface hover:bg-surface-container-low">
                <span className="font-h2 text-h2 text-primary">$250</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">{g.coursePackage}</span>
              </button>
              <button className="border border-outline-variant rounded-DEFAULT py-md flex flex-col items-center justify-center gap-xs hover:border-primary transition-colors bg-surface hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-h2 text-primary">edit</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">{g.customAmount}</span>
              </button>
            </div>
          </div>
          {/*  Step 2: Personalize  */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg ambient-shadow">
            <h2 className="font-h3 text-h3 text-primary mb-md flex items-center gap-sm">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-button text-button">
                2
              </span>
              {g.personalize}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-button text-button text-primary">{g.recipientName}</label>
                <input
                  className="border border-outline-variant rounded-DEFAULT p-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary w-full"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-button text-button text-primary">{g.yourName}</label>
                <input
                  className="border border-outline-variant rounded-DEFAULT p-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary w-full"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-xs">
                <label className="font-button text-button text-primary">{g.personalMessage}</label>
                <textarea
                  className="border border-outline-variant rounded-DEFAULT p-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary w-full resize-none"
                  placeholder={g.messagePlaceholder}
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>
          {/*  Step 3: Delivery  */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg ambient-shadow">
            <h2 className="font-h3 text-h3 text-primary mb-md flex items-center gap-sm">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-button text-button">
                3
              </span>
              {g.deliveryMethod}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <label className="cursor-pointer border-2 border-primary rounded-DEFAULT p-md flex items-start gap-sm bg-surface-container-low relative">
                <div className="mt-1">
                  <input
                    defaultChecked
                    className="w-5 h-5 text-primary focus:ring-primary border-outline-variant"
                    name="delivery"
                    type="radio"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="font-button text-button text-primary flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    {g.emailRecipient}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">{g.emailRecipientDesc}</span>
                </div>
              </label>
              <label className="cursor-pointer border border-outline-variant hover:border-primary rounded-DEFAULT p-md flex items-start gap-sm bg-surface transition-colors">
                <div className="mt-1">
                  <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="delivery" type="radio" />
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="font-button text-button text-primary flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    {g.printAtHome}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">{g.printAtHomeDesc}</span>
                </div>
              </label>
            </div>
            <div className="mt-md pt-md border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-button text-button text-primary">{g.recipientEmail}</label>
                <input
                  className="border border-outline-variant rounded-DEFAULT p-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary w-full"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-button text-button text-primary">{g.deliveryDate}</label>
                <input
                  className="border border-outline-variant rounded-DEFAULT p-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary w-full text-on-surface-variant"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  Right Column: Order Summary & Mockup  */}
        <div className="lg:col-span-4 sticky top-lg">
          <div className="bg-primary-container text-on-primary-container rounded-lg p-lg ambient-shadow flex flex-col gap-md">
            <div className="w-full aspect-[1.586/1] rounded-lg bg-gradient-to-br from-primary to-inverse-surface p-md flex flex-col justify-between ambient-shadow border border-outline-variant/20 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-container opacity-20 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start z-10">
                <span className="font-h3 text-h3 text-on-primary tracking-tight">{site.name}</span>
                <span className="material-symbols-outlined text-on-primary" data-weight="fill">
                  directions_car
                </span>
              </div>
              <div className="z-10 flex flex-col">
                <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest">
                  {g.giftCard}
                </span>
                <span className="font-h1 text-h1 text-on-primary mt-[-4px]">$100</span>
              </div>
            </div>
            <hr className="border-on-primary-fixed-variant my-xs" />
            <div className="flex flex-col gap-sm">
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-primary-fixed-dim">{g.giftCardValue}</span>
                <span className="font-button text-button text-on-primary">$100.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-primary-fixed-dim">{g.deliveryEmail}</span>
                <span className="font-button text-button text-on-primary">{g.free}</span>
              </div>
            </div>
            <hr className="border-on-primary-fixed-variant my-xs" />
            <div className="flex justify-between items-end mb-sm">
              <span className="font-h3 text-h3 text-on-primary">Total</span>
              <span className="font-h2 text-h2 text-on-primary">$100.00</span>
            </div>
            <button className="bg-secondary-container text-on-secondary-container font-button text-button w-full py-md rounded-DEFAULT text-center ambient-shadow-hover transition-all duration-200">
              {g.purchaseGiftCard}
            </button>
            <p className="font-label-caps text-label-caps text-center text-primary-fixed-dim mt-xs">{g.secureCheckout}</p>
          </div>
        </div>
      </section>
      {/*  How It Works Section  */}
      <section className="mt-xl border-t border-outline-variant pt-xl text-center flex flex-col items-center">
        <h2 className="font-h2 text-h2 text-primary mb-xl">{g.redeemingTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg w-full max-w-[1000px]">
          <div className="flex flex-col items-center gap-md">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]" data-weight="fill">
                shopping_cart
              </span>
            </div>
            <h3 className="font-button text-button text-primary">{g.step1Title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[250px]">{g.step1Desc}</p>
          </div>
          <div className="flex flex-col items-center gap-md relative">
            <div className="hidden md:block absolute top-8 -left-1/2 w-full h-[2px] bg-surface-container-high -z-10"></div>
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]" data-weight="fill">
                mail
              </span>
            </div>
            <h3 className="font-button text-button text-primary">{g.step2Title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[250px]">{g.step2Desc}</p>
          </div>
          <div className="flex flex-col items-center gap-md relative">
            <div className="hidden md:block absolute top-8 -left-1/2 w-full h-[2px] bg-surface-container-high -z-10"></div>
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]" data-weight="fill">
                directions_car
              </span>
            </div>
            <h3 className="font-button text-button text-primary">{g.step3Title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[250px]">{g.step3Desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
