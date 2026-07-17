export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto bg-surface-container-lowest flex-1">
      {/*  Left Side: Lifestyle Image  */}
<div className="hidden lg:block lg:w-1/2 relative bg-surface-container-low">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A cinematic, eye-level photograph of a confident young student driver sitting behind the wheel of a modern, pristine white vehicle, looking attentively ahead. Next to them, a professional driving instructor in a crisp navy blue polo shirt offers supportive guidance, projecting an aura of safety and authority. The interior of the car is bathed in bright, natural daylight, emphasizing clean lines and high-contrast minimalism. The mood is focused, progressive, and reassuring, perfectly aligning with a premium corporate driver education brand." style={{ 'backgroundImage': 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDFnDnFNMhl3hL9xFxoQetWq9yo39wH9J3UT_8ybMdhh6DOVMmXdbiQdUCqNOkWTITAO4A_bQaNzZro95so88FkeIcHa5ZYpJacaWrl7cn3DqHFngUQrPeQaVhGDwoMunOHbBDRUMS2fwhfZICqynq_RFEeebDRARF5Io2gRs8n4cPgPHar4q-oNerSpAiuHm1G2KMe082uU7XNKVmgPL9GKkARx7wRFr9blVmcr201OK97HZFtLwfvrsMPUYVF9jx1HSuLxcq1Gis\')' }}>
</div>
{/*  Subtle gradient overlay to ensure the image integrates smoothly  */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-lowest opacity-20"></div>
</div>
{/*  Right Side: Login Form  */}
<div className="w-full lg:w-1/2 flex items-center justify-center p-md lg:p-xl">
<div className="w-full max-w-[440px]">
{/*  Header  */}
<div className="mb-lg">
<h1 className="font-h2 text-h2 text-primary mb-2">Welcome Back</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Please sign in to continue your progress.</p>
</div>
{/*  Social Login  */}
<div className="flex flex-col sm:flex-row gap-sm mb-6">
<button className="flex-1 flex items-center justify-center gap-2 border border-outline-variant rounded p-3 text-on-background font-button text-button hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" style={{ 'fontSize': '20px' }}>language</span>
                        Google
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 border border-outline-variant rounded p-3 text-on-background font-button text-button hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" style={{ 'fontSize': '20px' }}>thumb_up</span>
                        Facebook
                    </button>
</div>
{/*  Divider  */}
<div className="flex items-center gap-4 mb-6">
<div className="flex-1 h-px bg-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">or sign in with email</span>
<div className="flex-1 h-px bg-outline-variant"></div>
</div>
{/*  Form  */}
<form action="#" method="POST">
{/*  Email Field  */}
<div className="mb-4">
<label className="block font-body-md text-body-md text-primary mb-2" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
<input className="w-full pl-10 pr-3 py-3 border border-outline-variant rounded font-body-md text-body-md text-on-background bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="email" name="email" placeholder="name@example.com" required type="email"/>
</div>
</div>
{/*  Password Field  */}
<div className="mb-2">
<label className="block font-body-md text-body-md text-primary mb-2" htmlFor="password">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
<input className="w-full pl-10 pr-3 py-3 border border-outline-variant rounded font-body-md text-body-md text-on-background bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="password" name="password" placeholder="••••••••" required type="password"/>
</div>
</div>
{/*  Forgot Password Link  */}
<div className="flex justify-end mb-lg">
<a className="font-body-md text-body-md text-primary hover:text-secondary-container transition-colors" href="#">Forgot Password?</a>
</div>
{/*  Submit Button (Brand Orange)  */}
<button className="w-full bg-secondary-container text-on-secondary-container font-button text-button py-4 rounded hover:opacity-90 active:scale-[0.98] transition-all mb-lg shadow-sm" type="submit">
                        Sign In
                    </button>
</form>
{/*  Sign Up Link  */}
<p className="text-center font-body-md text-body-md text-on-surface-variant">
                    Don't have an account? 
                    <a className="text-primary font-bold hover:text-secondary-container transition-colors" href="#">Sign Up</a>
</p>
</div>
</div>
    </div>
  );
}
