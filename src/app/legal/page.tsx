export default function Page() {
  return (
    <div className="max-w-[1200px] mx-auto px-md py-xl w-full">
      <div className="mb-lg">
<h1 className="font-h1 text-h1 text-primary mb-sm">Legal Information</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-[48rem]">Please review our legal documentation carefully. These documents outline the terms, policies, and conditions governing your use of JMC Driving School services.</p>
</div>
<div className="flex flex-col md:flex-row gap-xl">
{/*  Sidebar Navigation  */}
<aside className="md:w-1/4 flex-shrink-0">
<div className="sticky top-[100px] bg-surface-container-lowest rounded-lg border border-outline-variant p-md shadow-sm">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-md">Contents</h3>
<nav className="flex flex-col gap-sm">
<a className="font-button text-button text-secondary-container hover:text-secondary transition-colors duration-200" href="#legal-notice">Legal Notice</a>
<a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#terms-of-use">Terms of Use</a>
<a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#privacy-policy">Privacy Policy Summary</a>
<a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#cookie-policy">Cookie Policy</a>
<a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#disclaimers">Disclaimers</a>
</nav>
</div>
</aside>
{/*  Document Content  */}
<div className="md:w-3/4 space-y-xl">
{/*  Legal Notice  */}
<section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm scroll-mt-[100px]" id="legal-notice">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-h3" data-icon="gavel">gavel</span>
<h2 className="font-h2 text-h2 text-primary">Legal Notice</h2>
</div>
<div className="space-y-md font-body-md text-on-surface">
<p>This website and its associated services are operated by JMC Driving School. By accessing this site, you agree to be bound by the notices, terms, and conditions set forth herein.</p>
<p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of JMC Driving School or its content suppliers and protected by international copyright laws.</p>
<p><strong>Company Information:</strong><br/>
                        JMC Driving School<br/>
                        973 Main Street<br/>
                        Waltham, MA 02451<br/>
                        Contact: contact@jmcdrivingschool.com</p>
</div>
</section>
{/*  Terms of Use  */}
<section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm scroll-mt-[100px]" id="terms-of-use">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-h3" data-icon="description">description</span>
<h2 className="font-h2 text-h2 text-primary">Terms of Use</h2>
</div>
<div className="space-y-md font-body-md text-on-surface">
<p>Welcome to JMC Driving School. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>
<ul className="list-disc pl-md space-y-sm text-on-surface-variant">
<li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
<li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website.</li>
<li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
<li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
</ul>
</div>
</section>
{/*  Privacy Policy Summary  */}
<section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm scroll-mt-[100px]" id="privacy-policy">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-h3" data-icon="shield_lock">shield_lock</span>
<h2 className="font-h2 text-h2 text-primary">Privacy Policy Summary</h2>
</div>
<div className="space-y-md font-body-md text-on-surface">
<p>JMC Driving School is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
<div className="bg-surface-container p-md rounded-lg border border-outline-variant">
<h4 className="font-button text-button text-primary mb-sm">What we collect</h4>
<ul className="list-disc pl-md space-y-xs text-on-surface-variant">
<li>Name and contact information including email address</li>
<li>Demographic information such as postcode, preferences and interests</li>
<li>Other information relevant to customer surveys and/or offers</li>
</ul>
</div>
</div>
</section>
{/*  Cookie Policy  */}
<section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm scroll-mt-[100px]" id="cookie-policy">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-h3" data-icon="cookie">cookie</span>
<h2 className="font-h2 text-h2 text-primary">Cookie Policy</h2>
</div>
<div className="space-y-md font-body-md text-on-surface">
<p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.</p>
<p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
</div>
</section>
{/*  Disclaimers  */}
<section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm scroll-mt-[100px]" id="disclaimers">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-h3" data-icon="warning">warning</span>
<h2 className="font-h2 text-h2 text-primary">Disclaimers</h2>
</div>
<div className="space-y-md font-body-md text-on-surface">
<p>The information contained in this website is for general information purposes only. The information is provided by JMC Driving School and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind.</p>
<p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
</div>
</section>
</div>
</div>
    </div>
  );
}
