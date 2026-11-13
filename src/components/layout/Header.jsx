const Header = () => {
    return (
        <header className="w-full bg-ivory">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-22 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-20"
            >
                {/* Brand */}
                <a
                    href="/"
                    aria-label="MŌRA home"
                    className="font-display text-3xl font-medium tracking-wide"
                >
                    MŌRA
                </a>

                {/* Navigation links */}
                <div className="hidden items-center gap-10 md:flex">
                    <a
                        href="#discover"
                        className="font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                    >
                        DISCOVER
                    </a>
                    <a
                        href="#menu"
                        className="font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                    >
                        MENU
                    </a>
                    <a
                        href="#story"
                        className="font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                    >
                        OUR STORY
                    </a>
                </div>

                {/* Primary action */}
                <a href="#contact" className="border border-espresso px-7 py-3 font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:bg-espresso hover:text-ivory">ORDER</a>
            </nav>
        </header>
    );
};

export default Header;
