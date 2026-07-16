const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-[#4f39f6] to-[#b20cff] px-6 py-20 text-center text-white lg:px-28">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-white/80">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="btn rounded-full border-0 bg-white px-7 text-[#6d28d9] shadow-none hover:bg-white/90">
            Explore Products
          </button>
          <button className="btn rounded-full border-white/40 bg-transparent px-7 text-white hover:bg-white/10">
            View Pricing
          </button>
        </div>
        <p className="mt-5 text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
