import heroCoffee from "../../assets/images/hero-coffee.jpg";

const Hero = () => {
    return (
        <section id="discover" className="bg-ivory">
            <div
                className="hero__inner mx-auto grid max-w-7xl grid-cols-1 items-center gap-12
px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr]
lg:gap-16 lg:px-20 lg:py-20"
            >
                <div className="hero__content">
                    <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
                        The Art of Every Pour.
                    </h1>
                    <p className="mt-6 max-w-md font-body text-base leading-relaxed text-cocoa sm:text-lg">
                        A different perspective on specialty coffee.
                    </p>
                    <a
                        href="#journey"
                        className="mt-8 inline-flex items-center border-b border-caramel pb-2 font-body text-sm font-semibold tracking-[0.15em] text-espresso transition-colors duration-300 hover:text-caramel"
                    >
                        EXPLORE MŌRA
                    </a>
                </div>

                <div className="hero__visual aspect-[4/5] w-full overflow-hidden bg-stone/30 lg:aspect-[4/3]">
                    <img
                        src={heroCoffee}
                        alt="Artistic composition of freshly prepared coffee"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
