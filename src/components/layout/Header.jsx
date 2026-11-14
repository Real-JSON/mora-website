import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                <button
                    type="button"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative flex size-11 items-center justify-center md:hidden"
                >
                    {/* Top line */}
                    <span
                        className={`absolute h-0.5 w-6 bg-espresso transition-all duration-300 ease-in-out ${
                            isMenuOpen ? "rotate-45" : "-translate-y-2"
                        }`}
                    />

                    {/* Middle line */}
                    <span
                        className={`absolute h-0.5 w-6 bg-espresso transition-all duration-300 ease-in-out ${
                            isMenuOpen
                                ? "scale-x-0 opacity-0"
                                : "scale-x-100 opacity-100"
                        }`}
                    />

                    {/* Bottom line */}
                    <span
                        className={`absolute h-0.5 w-6 bg-espresso transition-all duration-300 ease-in-out ${
                            isMenuOpen ? "-rotate-45" : "translate-y-2"
                        }`}
                    />
                </button>

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
                <a
                    href="#contact"
                    className="border border-espresso px-7 py-3 font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:bg-espresso hover:text-ivory hidden md:inline-flex"
                >
                    ORDER
                </a>
            </nav>
                <div
                    id="mobile-navigation"
                    aria-hidden={!isMenuOpen}
                    inert={!isMenuOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
                        isMenuOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <nav
                            aria-label="Mobile navigation"
                            className="flex flex-col gap-8 border-t border-stone/40 bg-ivory px-6 py-8"
                        >
                            <a
                                href="#discover"
                                onClick={() => setIsMenuOpen(false)}
                                className="font-body text-sm font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                            >
                                DISCOVER
                            </a>

                            <a
                                href="#menu"
                                onClick={() => setIsMenuOpen(false)}
                                className="font-body text-sm font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                            >
                                MENU
                            </a>

                            <a
                                href="#story"
                                onClick={() => setIsMenuOpen(false)}
                                className="font-body text-sm font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-caramel"
                            >
                                OUR STORY
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="inline-flex w-fit border border-espresso px-7 py-3 font-body text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:bg-espresso hover:text-ivory"
                            >
                                ORDER
                            </a>
                        </nav>
                    </div>
                </div>
        </header>
    );
};

export default Header;
