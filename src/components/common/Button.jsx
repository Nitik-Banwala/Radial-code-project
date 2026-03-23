const Button = ({ className, text, icon ,type}) => {
    return (
        <button type={type}
            className={`${className} cursor-pointer duration-300 ease-in font-semibold ${icon && "flex gap-2"} flex leading-150 tracking-normal`}
        >
            {text} {icon}
        </button>
    );
};

export default Button;
