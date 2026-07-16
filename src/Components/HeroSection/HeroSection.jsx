const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="hero min-h-[620px] px-6 py-16 lg:px-28 lg:py-20">
        <div className="hero-content w-full max-w-[1200px] justify-between gap-12 p-0 text-left flex-col lg:flex-row-reverse">
          <img
            src="/assets/banner.png"
            alt="Digital workflow tools"
            className="w-full max-w-[360px] rounded-lg object-cover sm:max-w-[420px] lg:max-w-[500px]"
          />
          <div className="max-w-[640px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ebe8ff] px-4 py-2 text-sm font-medium text-[#4f39f6]">
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-[#101727] sm:text-5xl lg:text-6xl">
              Supercharge Your Digital Workflow
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-8 text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity software-all in one place. Start creating faster
              today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn border-0 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-7 text-white shadow-none hover:opacity-90">
                Explore Products
              </button>
              <button className="btn border-[#7c3aed] bg-white px-7 text-[#4f39f6] hover:border-[#4f39f6] hover:bg-[#f5f3ff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3l14 9-14 9V3Z"
                  />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
