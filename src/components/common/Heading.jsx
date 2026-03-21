const Heading = ({ text, className, description, pClass }) => {
    return (
        <div
            className={` ${className} ${description && "flex flex-col md:text-left text-center"}`}
        >
            <h2 className="xl:text-5xl lg:text-4xl text-3xl text-center font-semibold">
                {text}
            </h2>
            <p className={`${pClass}`}>{description}</p>
        </div>
    );
};

export default Heading;
