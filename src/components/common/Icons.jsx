const Icons = ({ icon, pathClass, className }) => {
    const iconList = {
        logo: (
            <svg
                className={className}
                width="187"
                height="29"
                viewBox="0 0 187 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect width="187" height="29" fill="url(#pattern0_3001_458)" />
                <defs>
                    <pattern
                        id="pattern0_3001_458"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            xlinkHref="#image0_3001_458"
                            transform="scale(0.00534759 0.0344828)"
                        />
                    </pattern>
                    <image
                        id="image0_3001_458"
                        width="252"
                        height="29"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,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"
                    />
                </defs>
            </svg>
        ),
        hero_icon: (
            <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.17188 24.2011L25.3208 12.4023"
                    stroke="#8C52FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M12.4219 33.2217L31.5336 27.3273"
                    stroke="#8C52FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M1.60742 17.9951L13.1525 1.66382"
                    stroke="#8C52FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        ),
        logIn: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_3021_11)">
                    <path
                        className={pathClass}
                        d="M4 15H6V20H18V4H6V9H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_3021_11">
                        <rect className={pathClass} width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        curly_circle: (
            <svg
                className={className}
                viewBox="0 0 322 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.1"
                    d="M188.699 -180.005C198.565 -184.424 210.179 -181.312 216.515 -172.551L228.311 -156.239C232.121 -150.971 237.997 -147.578 244.465 -146.912L264.49 -144.853C275.245 -143.747 283.747 -135.245 284.853 -124.49L286.912 -104.465C287.578 -97.9975 290.97 -92.1206 296.239 -88.3106L312.551 -76.5146C321.312 -70.1794 324.424 -58.5654 320.005 -48.6986L311.776 -30.3269C309.118 -24.393 309.118 -17.607 311.776 -11.6731L320.005 6.69861C324.424 16.5654 321.312 28.1794 312.551 34.5146L296.239 46.3106C290.971 50.1206 287.578 55.9974 286.912 62.4653L284.853 82.49C283.747 93.2447 275.245 101.747 264.49 102.853L244.465 104.912C237.997 105.578 232.121 108.97 228.311 114.239L216.515 130.551C210.179 139.312 198.565 142.424 188.699 138.005L170.327 129.776C164.393 127.118 157.607 127.118 151.673 129.776L133.301 138.005C123.435 142.424 111.821 139.312 105.485 130.551L93.6894 114.239C89.8794 108.97 84.0025 105.578 77.5347 104.912L57.51 102.853C46.7553 101.747 38.2534 93.2447 37.1472 82.49L35.0877 62.4653C34.4225 55.9975 31.0295 50.1206 25.7608 46.3106L9.44862 34.5146C0.687907 28.1794 -2.42404 16.5654 1.99534 6.69861L10.2241 -11.6731C12.8819 -17.607 12.8819 -24.393 10.2241 -30.3269L1.99535 -48.6986C-2.42404 -58.5654 0.687904 -70.1794 9.44862 -76.5146L25.7608 -88.3106C31.0295 -92.1206 34.4225 -97.9975 35.0877 -104.465L37.1472 -124.49C38.2534 -135.245 46.7553 -143.747 57.51 -144.853L77.5347 -146.912C84.0025 -147.578 89.8794 -150.971 93.6894 -156.239L105.485 -172.551C111.821 -181.312 123.435 -184.424 133.301 -180.005L151.673 -171.776C157.607 -169.118 164.393 -169.118 170.327 -171.776L188.699 -180.005Z"
                    fill="white"
                />
            </svg>
        ),
        arrow: (
            <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L5 5L1 9"
                    stroke="#010101"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        next_tech: (
            <svg
                width="454"
                height="138"
                viewBox="0 0 454 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.08"
                    d="M148.727 -302.678C157.659 -315.03 174.034 -319.418 187.946 -313.187L213.849 -301.585C222.216 -297.838 231.784 -297.838 240.15 -301.585L266.053 -313.187C279.965 -319.418 296.34 -315.03 305.272 -302.678L321.903 -279.679C327.275 -272.25 335.561 -267.467 344.68 -266.529L372.914 -263.625C388.077 -262.066 400.065 -250.078 401.625 -234.914L404.528 -206.681C405.466 -197.562 410.25 -189.275 417.678 -183.904L440.677 -167.273C453.029 -158.34 457.417 -141.966 451.186 -128.054L439.585 -102.151C435.837 -93.7842 435.837 -84.2164 439.585 -75.8499L451.186 -49.9466C457.417 -36.035 453.029 -19.66 440.677 -10.7278L417.678 5.90305C410.25 11.2749 405.466 19.5612 404.528 28.6804L401.625 56.9138C400.065 72.0771 388.077 84.0652 372.914 85.6247L344.68 88.528C335.561 89.466 327.275 94.2499 321.903 101.678L305.272 124.677C296.34 137.029 279.965 141.417 266.053 135.186L240.15 123.585C231.784 119.837 222.216 119.837 213.849 123.585L187.946 135.186C174.034 141.417 157.659 137.029 148.727 124.677L132.096 101.678C126.725 94.2499 118.438 89.466 109.319 88.528L81.0857 85.6247C65.9223 84.0652 53.9343 72.0771 52.3747 56.9138L49.4714 28.6804C48.5334 19.5612 43.7495 11.2749 36.321 5.90305L13.322 -10.7278C0.969992 -19.66 -3.4177 -36.035 2.81319 -49.9466L14.4148 -75.8499C18.1621 -84.2164 18.1621 -93.7842 14.4148 -102.151L2.81319 -128.054C-3.41769 -141.966 0.969993 -158.34 13.322 -167.273L36.321 -183.904C43.7495 -189.275 48.5334 -197.562 49.4714 -206.681L52.3747 -234.914C53.9343 -250.078 65.9223 -262.066 81.0857 -263.625L109.319 -266.529C118.438 -267.467 126.725 -272.251 132.096 -279.679L148.727 -302.678Z"
                    fill="white"
                />
            </svg>
        ),
        next_tech_second: (
            <svg
                width="292"
                height="352"
                viewBox="0 0 292 352"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.08"
                    d="M148.727 -28.678C157.659 -41.03 174.034 -45.4177 187.946 -39.1868L213.849 -27.5852C222.216 -23.8379 231.784 -23.8379 240.15 -27.5852L266.053 -39.1868C279.965 -45.4177 296.34 -41.03 305.272 -28.678L321.903 -5.67899C327.275 1.7495 335.561 6.53343 344.68 7.4714L372.914 10.3747C388.077 11.9343 400.065 23.9223 401.625 39.0857L404.528 67.3191C405.466 76.4382 410.25 84.7246 417.678 90.0964L440.677 106.727C453.029 115.66 457.417 132.034 451.186 145.946L439.585 171.849C435.837 180.216 435.837 189.784 439.585 198.15L451.186 224.053C457.417 237.965 453.029 254.34 440.677 263.272L417.678 279.903C410.25 285.275 405.466 293.561 404.528 302.68L401.625 330.914C400.065 346.077 388.077 358.065 372.914 359.625L344.68 362.528C335.561 363.466 327.275 368.25 321.903 375.678L305.272 398.677C296.34 411.029 279.965 415.417 266.053 409.186L240.15 397.585C231.784 393.837 222.216 393.837 213.849 397.585L187.946 409.186C174.034 415.417 157.659 411.029 148.727 398.677L132.096 375.678C126.725 368.25 118.438 363.466 109.319 362.528L81.0857 359.625C65.9223 358.065 53.9343 346.077 52.3747 330.914L49.4714 302.68C48.5334 293.561 43.7495 285.275 36.321 279.903L13.322 263.272C0.969992 254.34 -3.4177 237.965 2.81319 224.053L14.4148 198.15C18.1621 189.784 18.1621 180.216 14.4148 171.849L2.81319 145.946C-3.41769 132.034 0.969993 115.66 13.322 106.727L36.321 90.0964C43.7495 84.7246 48.5334 76.4382 49.4714 67.3191L52.3747 39.0857C53.9343 23.9223 65.9223 11.9343 81.0857 10.3747L109.319 7.4714C118.438 6.53343 126.725 1.7495 132.096 -5.67899L148.727 -28.678Z"
                    fill="white"
                />
            </svg>
        ),
        next_tech_third: (
            <svg
                width="313"
                height="105"
                viewBox="0 0 313 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.08"
                    d="M7.72725 13.322C16.6595 0.969992 33.0344 -3.4177 46.946 2.81319L72.8493 14.4148C81.2158 18.1621 90.7836 18.1621 99.1501 14.4148L125.053 2.81319C138.965 -3.4177 155.34 0.969989 164.272 13.322L180.903 36.321C186.275 43.7495 194.561 48.5334 203.68 49.4714L231.914 52.3747C247.077 53.9343 259.065 65.9223 260.625 81.0857L263.528 109.319C264.466 118.438 269.25 126.725 276.678 132.096L299.677 148.727C312.029 157.66 316.417 174.034 310.186 187.946L298.585 213.849C294.837 222.216 294.837 231.784 298.585 240.15L310.186 266.053C316.417 279.965 312.029 296.34 299.677 305.272L276.678 321.903C269.25 327.275 264.466 335.561 263.528 344.68L260.625 372.914C259.065 388.077 247.077 400.065 231.914 401.625L203.68 404.528C194.561 405.466 186.275 410.25 180.903 417.678L164.272 440.677C155.34 453.029 138.965 457.417 125.053 451.186L99.1501 439.585C90.7836 435.837 81.2158 435.837 72.8493 439.585L46.946 451.186C33.0344 457.417 16.6595 453.029 7.72725 440.677L-8.90361 417.678C-14.2755 410.25 -22.5618 405.466 -31.6809 404.528L-59.9143 401.625C-75.0777 400.065 -87.0657 388.077 -88.6253 372.914L-91.5286 344.68C-92.4666 335.561 -97.2505 327.275 -104.679 321.903L-127.678 305.272C-140.03 296.34 -144.418 279.965 -138.187 266.053L-126.585 240.15C-122.838 231.784 -122.838 222.216 -126.585 213.849L-138.187 187.946C-144.418 174.034 -140.03 157.66 -127.678 148.727L-104.679 132.096C-97.2505 126.725 -92.4666 118.438 -91.5286 109.319L-88.6253 81.0857C-87.0657 65.9223 -75.0777 53.9343 -59.9143 52.3747L-31.6809 49.4714C-22.5618 48.5334 -14.2755 43.7495 -8.90361 36.321L7.72725 13.322Z"
                    fill="white"
                />
            </svg>
        ),
        btn_arrow: (
            <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className={pathClass}
                    d="M10.021 3.414L1.414 12.021L0 10.607L8.606 2H1.021V0H12.021V11H10.021V3.414Z"
                    fill="#010101"
                />
            </svg>
        ),
        facebook: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill="#010101"
                    fillOpacity="0.06"
                />
                <g clipPath="url(#clip0_995_820)">
                    <path
                        className={pathClass}
                        d="M18.0003 9.6665C13.3978 9.6665 9.66699 13.3973 9.66699 17.9998C9.66699 22.159 12.7145 25.6065 16.6987 26.2323V20.4082H14.582V17.9998H16.6987V16.164C16.6987 14.0757 17.942 12.9223 19.8462 12.9223C20.7578 12.9223 21.7112 13.0848 21.7112 13.0848V15.1348H20.6612C19.6253 15.1348 19.3028 15.7773 19.3028 16.4365V17.9998H21.6137L21.2445 20.4082H19.3028V26.2323C23.2862 25.6073 26.3337 22.1582 26.3337 17.9998C26.3337 13.3973 22.6028 9.6665 18.0003 9.6665Z"
                        fill="#4E4E4E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_820">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(8 8)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        instagram: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill="#010101"
                    fillOpacity="0.06"
                />
                <g clipPath="url(#clip0_995_822)">
                    <path
                        className={pathClass}
                        d="M18.0003 9.6665C20.2645 9.6665 20.547 9.67484 21.4353 9.7165C22.3228 9.75817 22.927 9.89734 23.4587 10.104C24.0087 10.3157 24.472 10.6023 24.9353 11.0648C25.3591 11.4814 25.687 11.9853 25.8962 12.5415C26.102 13.0723 26.242 13.6773 26.2837 14.5648C26.3228 15.4532 26.3337 15.7357 26.3337 17.9998C26.3337 20.264 26.3253 20.5465 26.2837 21.4348C26.242 22.3223 26.102 22.9265 25.8962 23.4582C25.6876 24.0147 25.3596 24.5187 24.9353 24.9348C24.5186 25.3584 24.0148 25.6863 23.4587 25.8957C22.9278 26.1015 22.3228 26.2415 21.4353 26.2832C20.547 26.3223 20.2645 26.3332 18.0003 26.3332C15.7362 26.3332 15.4537 26.3248 14.5653 26.2832C13.6778 26.2415 13.0737 26.1015 12.542 25.8957C11.9856 25.6869 11.4816 25.359 11.0653 24.9348C10.6415 24.5183 10.3136 24.0144 10.1045 23.4582C9.89783 22.9273 9.75866 22.3223 9.71699 21.4348C9.67783 20.5465 9.66699 20.264 9.66699 17.9998C9.66699 15.7357 9.67533 15.4532 9.71699 14.5648C9.75866 13.6765 9.89783 13.0732 10.1045 12.5415C10.313 11.985 10.641 11.4809 11.0653 11.0648C11.4817 10.6409 11.9857 10.3129 12.542 10.104C13.0737 9.89734 13.677 9.75817 14.5653 9.7165C15.4537 9.67734 15.7362 9.6665 18.0003 9.6665ZM18.0003 13.8332C16.8953 13.8332 15.8354 14.2722 15.054 15.0536C14.2726 15.835 13.8337 16.8948 13.8337 17.9998C13.8337 19.1049 14.2726 20.1647 15.054 20.9461C15.8354 21.7275 16.8953 22.1665 18.0003 22.1665C19.1054 22.1665 20.1652 21.7275 20.9466 20.9461C21.728 20.1647 22.167 19.1049 22.167 17.9998C22.167 16.8948 21.728 15.835 20.9466 15.0536C20.1652 14.2722 19.1054 13.8332 18.0003 13.8332ZM23.417 13.6248C23.417 13.3486 23.3072 13.0836 23.1119 12.8883C22.9165 12.6929 22.6516 12.5832 22.3753 12.5832C22.0991 12.5832 21.8341 12.6929 21.6388 12.8883C21.4434 13.0836 21.3337 13.3486 21.3337 13.6248C21.3337 13.9011 21.4434 14.1661 21.6388 14.3614C21.8341 14.5568 22.0991 14.6665 22.3753 14.6665C22.6516 14.6665 22.9165 14.5568 23.1119 14.3614C23.3072 14.1661 23.417 13.9011 23.417 13.6248ZM18.0003 15.4998C18.6634 15.4998 19.2993 15.7632 19.7681 16.2321C20.2369 16.7009 20.5003 17.3368 20.5003 17.9998C20.5003 18.6629 20.2369 19.2988 19.7681 19.7676C19.2993 20.2364 18.6634 20.4998 18.0003 20.4998C17.3373 20.4998 16.7014 20.2364 16.2326 19.7676C15.7637 19.2988 15.5003 18.6629 15.5003 17.9998C15.5003 17.3368 15.7637 16.7009 16.2326 16.2321C16.7014 15.7632 17.3373 15.4998 18.0003 15.4998Z"
                        fill="#4E4E4E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_822">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(8 8)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        tiktok: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill="#010101"
                    fillOpacity="0.06"
                />
                <path
                    className={pathClass}
                    d="M21.3333 14.8715V20.917C21.3333 23.9086 18.9082 26.3337 15.9167 26.3337C12.9251 26.3337 10.5 23.9086 10.5 20.917C10.5 17.9254 12.9251 15.5003 15.9167 15.5003C16.3469 15.5003 16.7654 15.5505 17.1667 15.6453V18.281C16.7878 18.101 16.364 18.0003 15.9167 18.0003C14.3058 18.0003 13 19.3062 13 20.917C13 22.5278 14.3058 23.8337 15.9167 23.8337C17.5275 23.8337 18.8333 22.5278 18.8333 20.917V9.66699H21.3333C21.3333 11.9682 23.1988 13.8337 25.5 13.8337V16.3337C23.9234 16.3337 22.4747 15.7864 21.3333 14.8715Z"
                    fill="#4E4E4E"
                />
            </svg>
        ),
        rating: (
            <svg
                width="117"
                height="16"
                viewBox="0 0 117 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.4505 5.63406L11.3543 4.90408L9.07611 0.352135C9.01388 0.227506 8.91152 0.126615 8.78506 0.0652895C8.46793 -0.0890138 8.08254 0.0395723 7.92397 0.352135L5.64581 4.90408L0.549539 5.63406C0.409035 5.65384 0.280575 5.71912 0.182222 5.81803C0.0633192 5.93848 -0.00220171 6.10053 5.64944e-05 6.26856C0.0023147 6.4366 0.0721672 6.59688 0.194265 6.71418L3.88148 10.2572L3.01036 15.2602C2.98993 15.3766 3.003 15.4963 3.04808 15.6057C3.09316 15.7151 3.16845 15.8099 3.26541 15.8793C3.36237 15.9488 3.47713 15.99 3.59666 15.9984C3.7162 16.0068 3.83573 15.982 3.9417 15.9269L8.50004 13.5648L13.0584 15.9269C13.1828 15.9922 13.3273 16.0139 13.4658 15.9902C13.8151 15.9308 14.0499 15.6044 13.9897 15.2602L13.1186 10.2572L16.8058 6.71418C16.9062 6.61724 16.9724 6.49064 16.9925 6.35216C17.0467 6.00597 16.8018 5.68549 16.4505 5.63406Z"
                    fill="#FFC000"
                />
                <path
                    d="M41.4505 5.63406L36.3543 4.90408L34.0761 0.352135C34.0139 0.227506 33.9115 0.126615 33.7851 0.0652895C33.4679 -0.0890138 33.0825 0.0395723 32.924 0.352135L30.6458 4.90408L25.5495 5.63406C25.409 5.65384 25.2806 5.71912 25.1822 5.81803C25.0633 5.93848 24.9978 6.10053 25.0001 6.26856C25.0023 6.4366 25.0722 6.59688 25.1943 6.71418L28.8815 10.2572L28.0104 15.2602C27.9899 15.3766 28.003 15.4963 28.0481 15.6057C28.0932 15.7151 28.1684 15.8099 28.2654 15.8793C28.3624 15.9488 28.4771 15.99 28.5967 15.9984C28.7162 16.0068 28.8357 15.982 28.9417 15.9269L33.5 13.5648L38.0584 15.9269C38.1828 15.9922 38.3273 16.0139 38.4658 15.9902C38.8151 15.9308 39.0499 15.6044 38.9897 15.2602L38.1186 10.2572L41.8058 6.71418C41.9062 6.61724 41.9724 6.49064 41.9925 6.35216C42.0467 6.00597 41.8018 5.68549 41.4505 5.63406Z"
                    fill="#FFC000"
                />
                <path
                    d="M66.4505 5.63406L61.3543 4.90408L59.0761 0.352135C59.0139 0.227506 58.9115 0.126615 58.7851 0.0652895C58.4679 -0.0890138 58.0825 0.0395723 57.924 0.352135L55.6458 4.90408L50.5495 5.63406C50.409 5.65384 50.2806 5.71912 50.1822 5.81803C50.0633 5.93848 49.9978 6.10053 50.0001 6.26856C50.0023 6.4366 50.0722 6.59688 50.1943 6.71418L53.8815 10.2572L53.0104 15.2602C52.9899 15.3766 53.003 15.4963 53.0481 15.6057C53.0932 15.7151 53.1684 15.8099 53.2654 15.8793C53.3624 15.9488 53.4771 15.99 53.5967 15.9984C53.7162 16.0068 53.8357 15.982 53.9417 15.9269L58.5 13.5648L63.0584 15.9269C63.1828 15.9922 63.3273 16.0139 63.4658 15.9902C63.8151 15.9308 64.0499 15.6044 63.9897 15.2602L63.1186 10.2572L66.8058 6.71418C66.9062 6.61724 66.9724 6.49064 66.9925 6.35216C67.0467 6.00597 66.8018 5.68549 66.4505 5.63406Z"
                    fill="#FFC000"
                />
                <path
                    d="M91.4505 5.63406L86.3543 4.90408L84.0761 0.352135C84.0139 0.227506 83.9115 0.126615 83.7851 0.0652895C83.4679 -0.0890138 83.0825 0.0395723 82.924 0.352135L80.6458 4.90408L75.5495 5.63406C75.409 5.65384 75.2806 5.71912 75.1822 5.81803C75.0633 5.93848 74.9978 6.10053 75.0001 6.26856C75.0023 6.4366 75.0722 6.59688 75.1943 6.71418L78.8815 10.2572L78.0104 15.2602C77.9899 15.3766 78.003 15.4963 78.0481 15.6057C78.0932 15.7151 78.1684 15.8099 78.2654 15.8793C78.3624 15.9488 78.4771 15.99 78.5967 15.9984C78.7162 16.0068 78.8357 15.982 78.9417 15.9269L83.5 13.5648L88.0584 15.9269C88.1828 15.9922 88.3273 16.0139 88.4658 15.9902C88.8151 15.9308 89.0499 15.6044 88.9897 15.2602L88.1186 10.2572L91.8058 6.71418C91.9062 6.61724 91.9724 6.49064 91.9925 6.35216C92.0467 6.00597 91.8018 5.68549 91.4505 5.63406Z"
                    fill="#FFC000"
                />
                <path
                    d="M116.451 5.63406L111.354 4.90408L109.076 0.352135C109.014 0.227506 108.912 0.126615 108.785 0.0652895C108.468 -0.0890138 108.083 0.0395723 107.924 0.352135L105.646 4.90408L100.55 5.63406C100.409 5.65384 100.281 5.71912 100.182 5.81803C100.063 5.93848 99.9978 6.10053 100 6.26856C100.002 6.4366 100.072 6.59688 100.194 6.71418L103.881 10.2572L103.01 15.2602C102.99 15.3766 103.003 15.4963 103.048 15.6057C103.093 15.7151 103.168 15.8099 103.265 15.8793C103.362 15.9488 103.477 15.99 103.597 15.9984C103.716 16.0068 103.836 15.982 103.942 15.9269L108.5 13.5648L113.058 15.9269C113.183 15.9922 113.327 16.0139 113.466 15.9902C113.815 15.9308 114.05 15.6044 113.99 15.2602L113.119 10.2572L116.806 6.71418C116.906 6.61724 116.972 6.49064 116.992 6.35216C117.047 6.00597 116.802 5.68549 116.451 5.63406Z"
                    fill="#FFC000"
                />
            </svg>
        ),
        youtube: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill="#010101"
                    fillOpacity="0.06"
                />
                <g clipPath="url(#clip0_995_827)">
                    <path
                        className={pathClass}
                        d="M25.9528 13.4152C26.3337 14.9002 26.3337 18.0002 26.3337 18.0002C26.3337 18.0002 26.3337 21.1002 25.9528 22.5852C25.7412 23.406 25.122 24.0518 24.3378 24.2702C22.9137 24.6668 18.0003 24.6668 18.0003 24.6668C18.0003 24.6668 13.0895 24.6668 11.6628 24.2702C10.8753 24.0485 10.257 23.4035 10.0478 22.5852C9.66699 21.1002 9.66699 18.0002 9.66699 18.0002C9.66699 18.0002 9.66699 14.9002 10.0478 13.4152C10.2595 12.5943 10.8787 11.9485 11.6628 11.7302C13.0895 11.3335 18.0003 11.3335 18.0003 11.3335C18.0003 11.3335 22.9137 11.3335 24.3378 11.7302C25.1253 11.9518 25.7437 12.5968 25.9528 13.4152ZM16.3337 20.9168L21.3337 18.0002L16.3337 15.0835V20.9168Z"
                        fill="#4E4E4E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_827">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(8 8)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        linkedin: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill="#010101"
                    fillOpacity="0.06"
                />
                <g clipPath="url(#clip0_995_829)">
                    <path
                        className={pathClass}
                        d="M23.2792 23.2825H21.0583V19.8017C21.0583 18.9717 21.0417 17.9033 19.9 17.9033C18.7425 17.9033 18.5658 18.8067 18.5658 19.7408V23.2825H16.3442V16.125H18.4775V17.1H18.5067C18.805 16.5383 19.53 15.9442 20.6133 15.9442C22.8633 15.9442 23.28 17.4258 23.28 19.3533V23.2825H23.2792ZM13.8358 15.1458C13.6663 15.1461 13.4984 15.1128 13.3417 15.048C13.1851 14.9832 13.0427 14.8881 12.9229 14.7682C12.803 14.6483 12.708 14.5059 12.6433 14.3492C12.5786 14.1925 12.5455 14.0245 12.5458 13.855C12.546 13.5999 12.6218 13.3505 12.7637 13.1385C12.9056 12.9264 13.1072 12.7612 13.3429 12.6637C13.5787 12.5662 13.8381 12.5408 14.0883 12.5908C14.3385 12.6407 14.5683 12.7637 14.7486 12.9443C14.9289 13.1248 15.0516 13.3547 15.1012 13.605C15.1508 13.8553 15.1251 14.1146 15.0273 14.3503C14.9295 14.5859 14.7641 14.7873 14.5518 14.9289C14.3396 15.0705 14.0901 15.146 13.835 15.1458H13.8358ZM14.9492 23.2825H12.7217V16.125H14.95V23.2825H14.9492ZM24.3917 10.5H11.6075C10.9942 10.5 10.5 10.9833 10.5 11.5808V24.4192C10.5 25.0167 10.995 25.5 11.6067 25.5H24.3883C25 25.5 25.5 25.0167 25.5 24.4192V11.5808C25.5 10.9833 25 10.5 24.3883 10.5H24.3908H24.3917Z"
                        fill="#4E4E4E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_829">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(8 8)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        mail: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_995_809)">
                    <path
                        className={pathClass}
                        d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
                        fill="#8C52FF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_809">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        phone: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_995_812)">
                    <path
                        d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                        fill="#8C52FF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_812">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        whatsapp: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_995_815)">
                    <path
                        d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                        fill="#8C52FF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_995_815">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        next_arrow: (
            <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L5 5L1 9"
                    stroke="#010101"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    };

    return iconList[icon] || null;
};

export default Icons;
