const Hero = () => {
    return (
        <div className="w-full px-4">
            <div className="max-w-360 mx-auto relative w-full">
                {/* Background Image */}
                <img
                    src="/assets/images/webp/hero.webp"
                    alt="hero"
                    className="w-full h-auto object-contain sm:min-h-100 lg:min-h-128.25"
                />

                {/* Centered Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="font-semibold text-3xl sm:text-5xl lg:text-custom-6xl text-black leading-120 text-center">
                        Our <span className="text-purple">Blogs</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
