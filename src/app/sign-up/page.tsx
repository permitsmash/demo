export default function Page() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col lg:flex-row w-full">
{/*  Left Side: Image  */}
<div className="hidden lg:block lg:w-1/2 relative bg-surface-container">
<img alt="Confident driving student" className="absolute inset-0 w-full h-full object-cover" data-alt="A high-quality, professional photograph of a young, confident adult student sitting behind the steering wheel of a modern car. The student is smiling slightly, exuding a sense of safety and progression. The lighting is bright and natural, reflecting a clear day, embodying a corporate yet approachable aesthetic. The overall mood is reassuring, with the crisp interior of the vehicle emphasizing a high-standard learning environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHUT3AxXg5HWe-iwD1gonJEG2VY396W7jt88qiFKi3XLXIMmqyMdiM17oClrFyT59IZMkHzk7ooyCkHAx1fJgjMUGkv2h_b6KaTZ0NzXm0DDoOXC4TGs3Pr4A5F26ihw9Bdxp0N3A2DLgdv7W1SJ-i_-RrzpKZJKHtSEUweZAhmSPM7qyqTjUVV8N6qLPBb-B9aUwJP62FRI14NfL1RJ_pFEftKBkw_wkYh3QJVbWRl6lUEDOqcsV12OUZki4pPfdoLZHYlXx9YX4"/>
{/*  Overlay to ensure text readability if any is added later, and to tie into brand colors slightly  */}
<div className="absolute inset-0 bg-primary/20"></div>
</div>
{/*  Right Side: Form  */}
<div className="w-full lg:w-1/2 flex items-center justify-center p-md lg:p-xl bg-surface-container-lowest">
<div className="w-full max-w-[480px]">
<div className="mb-lg text-center lg:text-left">
<h1 className="font-h1 text-h1 text-primary mb-sm">Create an Account</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Start your journey to safe driving today.</p>
</div>
{/*  Social Signup  */}
<div className="flex flex-col gap-sm mb-lg">
<button className="w-full flex items-center justify-center gap-sm py-[12px] px-md border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-200">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">login</span>
<span className="font-button text-button text-on-surface">Sign up with Google</span>
</button>
<button className="w-full flex items-center justify-center gap-sm py-[12px] px-md border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-200">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">social_leaderboard</span>
<span className="font-button text-button text-on-surface">Sign up with Facebook</span>
</button>
</div>
<div className="relative flex py-5 items-center mb-lg">
<div className="flex-grow border-t border-outline-variant"></div>
<span className="flex-shrink-0 mx-4 font-body-md text-body-md text-on-surface-variant">or</span>
<div className="flex-grow border-t border-outline-variant"></div>
</div>
{/*  Form  */}
<form action="#" className="flex flex-col gap-md" method="POST">
<div className="flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="fullName">Full Name</label>
<input className="w-full px-sm py-[10px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200" id="fullName" name="fullName" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="email">Email Address</label>
<input className="w-full px-sm py-[10px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="phone">Phone Number</label>
<input className="w-full px-sm py-[10px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="password">Password</label>
<input className="w-full px-sm py-[10px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center gap-sm mt-sm">
<input className="w-[16px] h-[16px] border-outline-variant rounded text-secondary-container focus:ring-secondary-container" id="terms" name="terms" type="checkbox"/>
<label className="font-body-md text-body-md text-on-surface-variant" htmlFor="terms">I agree to the <a className="text-primary underline hover:text-secondary transition-colors" href="#">Terms and Conditions</a></label>
</div>
<button className="w-full py-[14px] bg-secondary-container text-on-secondary-container font-button text-button rounded hover:bg-secondary transition-colors duration-200 mt-sm" type="submit">
                            Create Account
                        </button>
</form>
<div className="mt-lg text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                            Already have an account? 
                            <a className="text-primary font-semibold hover:text-secondary transition-colors duration-200" href="#">Sign In</a>
</p>
</div>
</div>
</div>
</div>
    </div>
  );
}
