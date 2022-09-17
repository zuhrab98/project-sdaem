import { IconProps } from './interface'

export const Icons = ({ id, size, ClassName = '', fill }: IconProps) => {
    switch (id) {
        case 'location':
            return (
                <svg
                    fill={fill ? fill : '#8291A3'}
                    height={size ? size.h : '15'}
                    viewBox="0 0 9 10"
                    width={size ? size.w : '12'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.43757 1.74419C6.70501 0.627907 5.49571 0 4.13525 0C2.78641 0 1.57711 0.627907 0.821293 1.74419C0.0654788 2.83721 -0.10894 4.23256 0.356176 5.45349C0.484083 5.77907 0.681758 6.11628 0.937572 6.4186L3.87943 9.88372C3.9492 9.95349 4.01897 10 4.12362 10C4.22827 10 4.29804 9.95349 4.3678 9.88372L7.32129 6.4186C7.57711 6.11628 7.78641 5.7907 7.90269 5.45349C8.3678 4.23256 8.19339 2.83721 7.43757 1.74419ZM4.13525 5.86047C3.13525 5.86047 2.30966 5.03488 2.30966 4.03488C2.30966 3.03488 3.13525 2.2093 4.13525 2.2093C5.13525 2.2093 5.96083 3.03488 5.96083 4.03488C5.96083 5.03488 5.14687 5.86047 4.13525 5.86047Z" />
                </svg>
            )
        case 'home':
            return (
                <svg
                    fill={fill ? fill : '#1E2224'}
                    height={size ? size.h : '12'}
                    viewBox="0 0 12 12"
                    width={size ? size.w : '12'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z" />
                </svg>
            )
        case 'edit':
            return (
                <svg
                    fill="white"
                    height={size ? size.h : '12'}
                    viewBox="0 0 12 12"
                    width={size ? size.w : '12'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.8">
                        <path d="M0 9.4988V11.9991H2.50035L9.87802 4.62144L7.37767 2.12109L0 9.4988Z" />
                        <path d="M11.805 1.7519L10.2481 0.195027C9.98808 -0.065009 9.56468 -0.065009 9.30464 0.195027L8.08447 1.4152L10.5848 3.91554L11.805 2.69537C12.0651 2.43534 12.0651 2.01193 11.805 1.7519Z" />
                    </g>
                </svg>
            )
        case 'error':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '20'}
                    viewBox="0 0 20 20"
                    width={size ? size.w : '20'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" />
                </svg>
            )
        case 'circlesYellow':
            return (
                <svg
                    fill="none"
                    height="70"
                    viewBox="0 0 70 70"
                    width="70"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_2831_1177)">
                        <circle cx="6.5" cy="2.5" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter1_d_2831_1177)">
                        <circle cx="6.5" cy="39.9629" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter2_d_2831_1177)">
                        <circle cx="6.5" cy="21.2305" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter3_d_2831_1177)">
                        <circle cx="6.5" cy="58.6934" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter4_d_2831_1177)">
                        <circle cx="25.2312" cy="2.5" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter5_d_2831_1177)">
                        <circle cx="25.2312" cy="39.9629" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter6_d_2831_1177)">
                        <circle cx="25.2312" cy="21.2305" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter7_d_2831_1177)">
                        <circle cx="25.2312" cy="58.6934" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter8_d_2831_1177)">
                        <circle cx="43.9624" cy="2.5" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter9_d_2831_1177)">
                        <circle cx="43.9624" cy="39.9629" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter10_d_2831_1177)">
                        <circle cx="43.9624" cy="21.2305" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter11_d_2831_1177)">
                        <circle cx="43.9624" cy="58.6934" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter12_d_2831_1177)">
                        <circle cx="62.6936" cy="2.5" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter13_d_2831_1177)">
                        <circle cx="62.6936" cy="39.9629" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter14_d_2831_1177)">
                        <circle cx="62.6936" cy="21.2305" fill="#FFD54F" r="2.5" />
                    </g>
                    <g filter="url(#filter15_d_2831_1177)">
                        <circle cx="62.6936" cy="58.6934" fill="#FFD54F" r="2.5" />
                    </g>
                    <defs>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter0_d_2831_1177"
                            width="13"
                            x="0"
                            y="0"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter1_d_2831_1177"
                            width="13"
                            x="0"
                            y="37.4629"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter2_d_2831_1177"
                            width="13"
                            x="0"
                            y="18.7305"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter3_d_2831_1177"
                            width="13"
                            x="0"
                            y="56.1934"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter4_d_2831_1177"
                            width="13"
                            x="18.7312"
                            y="0"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter5_d_2831_1177"
                            width="13"
                            x="18.7312"
                            y="37.4629"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter6_d_2831_1177"
                            width="13"
                            x="18.7312"
                            y="18.7305"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter7_d_2831_1177"
                            width="13"
                            x="18.7312"
                            y="56.1934"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter8_d_2831_1177"
                            width="13"
                            x="37.4624"
                            y="0"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter9_d_2831_1177"
                            width="13"
                            x="37.4624"
                            y="37.4629"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter10_d_2831_1177"
                            width="13"
                            x="37.4624"
                            y="18.7305"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter11_d_2831_1177"
                            width="13"
                            x="37.4624"
                            y="56.1934"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter12_d_2831_1177"
                            width="13"
                            x="56.1936"
                            y="0"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter13_d_2831_1177"
                            width="13"
                            x="56.1936"
                            y="37.4629"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter14_d_2831_1177"
                            width="13"
                            x="56.1936"
                            y="18.7305"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                        <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="13"
                            id="filter15_d_2831_1177"
                            width="13"
                            x="56.1936"
                            y="56.1934"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"
                            />
                            <feBlend
                                in2="BackgroundImageFix"
                                mode="normal"
                                result="effect1_dropShadow_2831_1177"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2831_1177"
                                mode="normal"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            )
        case 'heart':
            return (
                <svg
                    fill={fill ? fill : '#8291A3'}
                    height={size ? size.h : '14'}
                    viewBox="0 0 512 512"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                </svg>
            )
        case 'options':
            return (
                <svg
                    fill="#664EF9"
                    height="18"
                    viewBox="0 0 18 18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6.91109 4.29814C6.91109 2.90551 5.937 1.73697 4.63453 1.4358V0.661897C4.63453 0.296309 4.33822 0 3.97264 0C3.60705 0 3.31074 0.296309 3.31074 0.661897V1.4358C2.00835 1.73689 1.03418 2.90551 1.03418 4.29814C1.03418 5.69077 2.00827 6.85931 3.31074 7.16048V17.3381C3.31074 17.7037 3.60705 18 3.97264 18C4.33822 18 4.63453 17.7037 4.63453 17.3381V7.16048C5.937 6.85931 6.91109 5.69077 6.91109 4.29814ZM2.35805 4.29814C2.35805 3.40781 3.08238 2.68348 3.97271 2.68348C4.86303 2.68348 5.58737 3.40781 5.58737 4.29814C5.58737 5.18846 4.86303 5.9128 3.97271 5.9128C3.08238 5.9128 2.35805 5.18846 2.35805 4.29814Z" />
                    <path d="M9.66188 8.89222V0.661897C9.66188 0.296309 9.36557 0 8.99998 0C8.63439 0 8.33808 0.296309 8.33808 0.661897V8.89222C7.03569 9.19331 6.06152 10.3619 6.06152 11.7546C6.06152 13.1472 7.03562 14.3157 8.33808 14.6169V17.3381C8.33808 17.7037 8.63439 18 8.99998 18C9.36557 18 9.66188 17.7037 9.66188 17.3381V14.6169C10.9643 14.3158 11.9384 13.1472 11.9384 11.7546C11.9384 10.3619 10.9643 9.19338 9.66188 8.89222ZM7.38539 11.7546C7.38539 10.8642 8.10973 10.1399 9.00005 10.1399C9.89038 10.1399 10.6147 10.8642 10.6147 11.7546C10.6147 12.6449 9.89038 13.3692 9.00005 13.3692C8.10973 13.3692 7.38539 12.6449 7.38539 11.7546Z" />
                    <path d="M16.9658 7.20151C16.9658 5.80888 15.9917 4.64034 14.6892 4.33918V0.661897C14.6892 0.296309 14.3929 0 14.0273 0C13.6617 0 13.3654 0.296309 13.3654 0.661897V4.33918C12.063 4.64027 11.0889 5.80888 11.0889 7.20151C11.0889 8.59415 12.063 9.76269 13.3654 10.0639V17.3381C13.3654 17.7037 13.6617 18 14.0273 18C14.3929 18 14.6892 17.7037 14.6892 17.3381V10.0639C15.9917 9.76269 16.9658 8.59415 16.9658 7.20151ZM12.4127 7.20151C12.4127 6.31119 13.1371 5.58685 14.0274 5.58685C14.9177 5.58685 15.6421 6.31119 15.6421 7.20151C15.6421 8.09184 14.9177 8.81618 14.0274 8.81618C13.1371 8.81618 12.4127 8.09184 12.4127 7.20151Z" />
                </svg>
            )
        case 'arrow':
            return (
                <svg
                    fill="none"
                    height={size ? size.h : '8'}
                    viewBox="0 0 11 8"
                    width={size ? size.w : '11'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1.75L5.5 6.25L10 1.75"
                        stroke={fill ? fill : '#664EF9'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            )
        case 'arrow-more':
            return (
                <svg
                    fill="none"
                    height="4"
                    viewBox="0 0 6 4"
                    width="6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.5 0.75L3 3.25L5.5 0.75"
                        stroke="#FEB700"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'metro':
            return (
                <svg
                    className={ClassName}
                    fill={fill ? fill : '#BDBDBD'}
                    height="13"
                    viewBox="0 0 20 13"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" />
                </svg>
            )
        case 'user':
            return (
                <svg
                    fill={fill ? fill : '#686868'}
                    height={size ? size.h : '16'}
                    viewBox="0 0 16 16"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_2831_1903)">
                        <path d="M8.001 0.794922C5.85814 0.794922 4.10645 2.54661 4.10645 4.68949C4.10645 6.83236 5.85814 8.58405 8.001 8.58405C10.1439 8.58405 11.8956 6.83236 11.8956 4.68949C11.8956 2.54661 10.1439 0.794922 8.001 0.794922Z" />
                        <path d="M14.6852 11.6969C14.5832 11.4418 14.4471 11.2037 14.2941 10.9826C13.5118 9.82616 12.3043 9.06086 10.9438 8.87378C10.7737 8.85679 10.5866 8.89077 10.4506 8.99282C9.73627 9.52004 8.88595 9.79214 8.00157 9.79214C7.1172 9.79214 6.26687 9.52004 5.55258 8.99282C5.41651 8.89077 5.22944 8.83976 5.05938 8.87378C3.69884 9.06086 2.47436 9.82616 1.70906 10.9826C1.556 11.2037 1.41993 11.4588 1.31791 11.6969C1.2669 11.799 1.2839 11.918 1.3349 12.0201C1.47097 12.2582 1.64102 12.4963 1.79408 12.7003C2.03217 13.0235 2.28728 13.3126 2.57641 13.5847C2.81449 13.8228 3.0866 14.0439 3.35873 14.265C4.70225 15.2684 6.31791 15.7956 7.98458 15.7956C9.65125 15.7956 11.2669 15.2684 12.6104 14.265C12.8825 14.0609 13.1546 13.8228 13.3927 13.5847C13.6649 13.3126 13.937 13.0235 14.1751 12.7003C14.3451 12.4793 14.4982 12.2582 14.6343 12.0201C14.7192 11.918 14.7362 11.7989 14.6852 11.6969Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2831_1903">
                            <rect
                                fill="white"
                                height="15"
                                transform="translate(0.5 0.794922)"
                                width="15"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )
        case 'pointer':
            return (
                <svg
                    fill="#BDBDBD"
                    height="7"
                    viewBox="0 0 6 7"
                    width="6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse cx="2.75" cy="3.20732" rx="2.75" ry="2.84209" />
                </svg>
            )
        case 'phone':
            return (
                <svg
                    fill={fill ? fill : '#664EF9'}
                    height={size ? size.h : '16'}
                    viewBox="0 0 9 16"
                    width={size ? size.w : '9'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.18253 0.349609H1.72797C0.787063 0.349609 0.0234375 1.11324 0.0234375 2.05415L0.0234375 13.6451C0.0234375 14.586 0.787063 15.3496 1.72797 15.3496H7.18253C8.12344 15.3496 8.88707 14.586 8.88707 13.6451V2.05415C8.88707 1.11324 8.12344 0.349609 7.18253 0.349609ZM4.45527 14.6678C3.88935 14.6678 3.43254 14.211 3.43254 13.6451C3.43254 13.0792 3.88935 12.6223 4.45527 12.6223C5.02119 12.6223 5.478 13.0792 5.478 13.6451C5.478 14.211 5.02116 14.6678 4.45527 14.6678ZM7.52345 11.9405H1.38709V2.39507H7.52345V11.9405Z" />
                </svg>
            )
        case 'mail':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '16'}
                    viewBox="0 0 18 16"
                    width={size ? size.w : '18'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.3926 15.0709C16.7973 15.0709 17.1479 14.9373 17.4459 14.6735L12.3462 9.57364C12.2239 9.66125 12.1053 9.74645 11.9932 9.82746C11.6116 10.1086 11.3018 10.3281 11.064 10.4853C10.8262 10.6429 10.5098 10.8035 10.1148 10.9675C9.71958 11.1317 9.35137 11.2135 9.0098 11.2135H8.9998H8.9898C8.6482 11.2135 8.27999 11.1317 7.88479 10.9675C7.48959 10.8035 7.17318 10.6429 6.9356 10.4853C6.69779 10.3281 6.38821 10.1087 6.00638 9.82746C5.89997 9.74946 5.78196 9.66387 5.65438 9.57227L0.553711 14.6735C0.85172 14.9373 1.20254 15.0709 1.60712 15.0709H16.3926Z" />
                    <path d="M1.01462 6.36228C0.633012 6.10786 0.294611 5.81649 0 5.48828V13.2473L4.49485 8.75249C3.59562 8.12471 2.43702 7.32889 1.01462 6.36228Z" />
                    <path d="M16.9964 6.36228C15.6282 7.2883 14.4654 8.08549 13.5078 8.75429L18.0008 13.2475V5.48828C17.7128 5.80989 17.378 6.10106 16.9964 6.36228Z" />
                    <path d="M16.3925 0.927734H1.60704C1.09122 0.927734 0.694647 1.10192 0.416834 1.44993C0.138792 1.7981 0 2.23353 0 2.75572C0 3.17753 0.184185 3.63456 0.552391 4.12695C0.920597 4.61914 1.3124 5.00575 1.7276 5.28696C1.95521 5.44778 2.64163 5.92497 3.78683 6.71838C4.40504 7.14678 4.94266 7.52018 5.40466 7.84241C5.79845 8.11679 6.13806 8.3544 6.41846 8.5516C6.45065 8.57418 6.50127 8.61039 6.56846 8.65843C6.64084 8.71042 6.73245 8.7764 6.84545 8.858C7.06307 9.01539 7.24386 9.14261 7.38785 9.2398C7.53164 9.33703 7.70585 9.44562 7.91024 9.56621C8.11445 9.68664 8.30707 9.77719 8.48785 9.83742C8.66867 9.89762 8.83606 9.92782 8.99005 9.92782H9.00005H9.01005C9.164 9.92782 9.33142 9.89762 9.51228 9.83742C9.69303 9.77719 9.88548 9.68683 10.0899 9.56621C10.294 9.44562 10.468 9.3368 10.6123 9.2398C10.7563 9.14261 10.9371 9.01542 11.1547 8.858C11.2675 8.7764 11.3591 8.71039 11.4315 8.65859C11.4987 8.61035 11.5493 8.57437 11.5817 8.5516C11.8001 8.3996 12.1405 8.16296 12.5982 7.84518C13.4309 7.26658 14.6573 6.41497 16.2826 5.28696C16.7714 4.94555 17.1797 4.53355 17.5079 4.05155C17.8356 3.56956 17.9998 3.06396 17.9998 2.53494C17.9998 2.09294 17.8406 1.71474 17.5227 1.39973C17.2046 1.08512 16.8278 0.927734 16.3925 0.927734Z" />
                </svg>
            )
        case 'viber':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '17'}
                    viewBox="0 0 16 17"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.90239 0.407538C6.63357 0.424676 3.90348 0.632959 2.37628 2.03228C1.24258 3.15939 0.84645 4.82104 0.800311 6.87884C0.760764 8.92872 0.714625 12.778 4.4255 13.8267V15.4218C4.4255 15.4218 4.40046 16.0611 4.8223 16.1929C5.34301 16.3577 5.63961 15.864 6.13396 15.3367L7.05673 14.2953C9.59437 14.5062 11.5388 14.0191 11.7629 13.9466C12.277 13.7819 15.1778 13.4121 15.6524 9.56214C16.1401 5.58695 15.4151 3.08227 14.11 1.94857L14.1034 1.94726C13.708 1.58474 12.1261 0.431267 8.58656 0.418084C8.58656 0.418084 8.32555 0.401606 7.90239 0.407538ZM7.94655 1.52607C8.30578 1.5241 8.52658 1.53926 8.52658 1.53926C11.519 1.54585 12.95 2.44885 13.2861 2.75205C14.3869 3.69394 14.9524 5.95276 14.5385 9.27212C14.143 12.4887 11.7899 12.693 11.3549 12.8314C11.1703 12.8907 9.45661 13.3126 7.29995 13.1741C7.29995 13.1741 5.69234 15.1126 5.19141 15.6136C5.11231 15.6993 5.02003 15.7256 4.96071 15.7124C4.87503 15.6927 4.84866 15.5872 4.85525 15.4422L4.86844 12.7932C1.72375 11.9231 1.9083 8.63936 1.94126 6.92563C1.98081 5.21191 2.30378 3.80665 3.25951 2.85751C4.54942 1.69086 6.86822 1.53267 7.94589 1.52607H7.94655ZM8.18384 3.2398C8.1579 3.23972 8.1322 3.24475 8.10822 3.25461C8.08423 3.26448 8.06243 3.27898 8.04406 3.29729C8.02569 3.3156 8.01111 3.33736 8.00117 3.36131C7.99122 3.38526 7.9861 3.41094 7.9861 3.43688C7.9861 3.48932 8.00693 3.53962 8.04402 3.5767C8.0811 3.61379 8.1314 3.63462 8.18384 3.63462C8.67386 3.62527 9.16089 3.71307 9.6168 3.89294C10.0727 4.07282 10.4885 4.34121 10.8401 4.68263C11.5586 5.3813 11.9086 6.31726 11.9217 7.54323C11.9217 7.5692 11.9269 7.59491 11.9368 7.61891C11.9467 7.6429 11.9613 7.66469 11.9797 7.68306C11.998 7.70142 12.0198 7.71598 12.0438 7.72592C12.0678 7.73586 12.0935 7.74097 12.1195 7.74097V7.73504C12.1719 7.73504 12.2222 7.71421 12.2593 7.67712C12.2964 7.64004 12.3172 7.58975 12.3172 7.5373C12.3417 6.96075 12.2485 6.38526 12.0434 5.84588C11.8383 5.30649 11.5255 4.8145 11.1242 4.39986C10.3398 3.63528 9.34983 3.2398 8.18318 3.2398H8.18384ZM5.57766 3.6946C5.43748 3.67462 5.29467 3.70249 5.17229 3.77369H5.16438C4.89414 3.93188 4.64499 4.12962 4.40771 4.39327C4.22974 4.60419 4.13022 4.81445 4.10385 5.01878C4.08834 5.13862 4.0996 5.26041 4.13681 5.37537L4.14999 5.38196C4.35315 5.97922 4.61824 6.55359 4.94094 7.09569C5.35923 7.85488 5.87314 8.55731 6.47011 9.18578L6.48989 9.21214L6.51625 9.23191L6.53602 9.25169L6.5558 9.27146C7.18673 9.86994 7.89102 10.386 8.65182 10.8072C9.52186 11.2818 10.0505 11.5059 10.3669 11.5982V11.6048C10.4591 11.6311 10.5435 11.6443 10.6292 11.6443C10.8993 11.6246 11.155 11.5151 11.3556 11.3332C11.6126 11.1025 11.8169 10.8468 11.9685 10.5765V10.5699C12.1201 10.2865 12.0674 10.0156 11.8499 9.83106C11.4115 9.44758 10.9369 9.10763 10.4328 8.81601C10.0966 8.63145 9.75388 8.7435 9.61546 8.92806L9.31885 9.3031C9.16725 9.48766 8.89042 9.46129 8.89042 9.46129L8.88251 9.46788C6.82604 8.94058 6.27897 6.8584 6.27897 6.8584C6.27897 6.8584 6.2526 6.57498 6.44375 6.42997L6.81286 6.13336C6.99082 5.98836 7.11606 5.64561 6.92491 5.30946C6.63367 4.80505 6.2937 4.33041 5.90985 3.89234C5.82636 3.78878 5.70849 3.71862 5.57766 3.6946ZM8.52593 4.28122C8.47348 4.2814 8.42326 4.3024 8.3863 4.3396C8.34934 4.37681 8.32867 4.42717 8.32885 4.47962C8.32902 4.53206 8.35002 4.58229 8.38723 4.61925C8.42444 4.65621 8.4748 4.67687 8.52724 4.6767C9.18686 4.68815 9.81502 4.96074 10.2739 5.43469C10.481 5.66309 10.6401 5.93066 10.742 6.22161C10.8439 6.51256 10.8865 6.82098 10.8671 7.12864C10.8673 7.18097 10.8882 7.2311 10.9253 7.26804C10.9624 7.30498 11.0125 7.32572 11.0649 7.32572L11.0715 7.33363C11.0975 7.33363 11.1233 7.3285 11.1473 7.31852C11.1713 7.30854 11.1932 7.29391 11.2115 7.27548C11.2299 7.25705 11.2444 7.23518 11.2543 7.21111C11.2642 7.18704 11.2693 7.16126 11.2692 7.13523C11.289 6.35088 11.0451 5.69175 10.5639 5.16445C10.0828 4.63715 9.41047 4.34054 8.55361 4.28122C8.54439 4.28057 8.53514 4.28057 8.52593 4.28122ZM8.8489 5.34835C8.82245 5.34757 8.79611 5.352 8.77139 5.3614C8.74666 5.3708 8.72402 5.38498 8.70477 5.40313C8.68552 5.42128 8.67004 5.44304 8.6592 5.46717C8.64836 5.4913 8.64238 5.51733 8.6416 5.54378C8.64082 5.57022 8.64526 5.59656 8.65466 5.62129C8.66406 5.64601 8.67824 5.66865 8.69638 5.6879C8.71453 5.70715 8.73629 5.72263 8.76043 5.73347C8.78456 5.74431 8.81059 5.75029 8.83703 5.75107C9.48957 5.78403 9.80595 6.11359 9.84549 6.79249C9.84721 6.84378 9.86879 6.8924 9.90569 6.92807C9.94259 6.96374 9.99191 6.98366 10.0432 6.98364H10.0498C10.0764 6.98281 10.1025 6.97664 10.1266 6.9655C10.1507 6.95435 10.1724 6.93847 10.1902 6.91878C10.208 6.89909 10.2217 6.87601 10.2305 6.85092C10.2392 6.82582 10.2428 6.79922 10.241 6.77272C10.1948 5.88949 9.71367 5.39448 8.85681 5.34835C8.85417 5.34829 8.85153 5.34829 8.8489 5.34835Z" />
                </svg>
            )
        case 'whatsApp':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '16'}
                    viewBox="0 0 16 16"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.3797 2.58852C12.6794 1.88305 11.8458 1.32375 10.9275 0.943094C10.0092 0.562442 9.0244 0.368024 8.03032 0.37113C3.86354 0.37113 0.472125 3.76254 0.472125 7.93219C0.472125 9.26453 0.821185 10.5673 1.48211 11.7118L0.40918 15.6306L4.41765 14.5786C5.52583 15.1823 6.76745 15.499 8.02937 15.4999H8.03223C12.199 15.4999 15.5933 12.1085 15.5933 7.93886C15.5958 6.94513 15.4014 5.96074 15.0213 5.04257C14.6412 4.1244 14.0829 3.29064 13.3788 2.58947L13.3797 2.58852ZM8.03223 14.2239C6.90604 14.224 5.80053 13.9213 4.83156 13.3474L4.60171 13.2101L2.22315 13.8328L2.85832 11.5143L2.70954 11.2759C2.07795 10.2752 1.74418 9.1155 1.74724 7.93219C1.74926 6.26518 2.41257 4.66707 3.59159 3.48858C4.77062 2.31009 6.36903 1.64751 8.03604 1.64625C9.71363 1.64625 11.2939 2.3024 12.4794 3.48787C13.0644 4.07077 13.5281 4.76382 13.8437 5.52697C14.1593 6.29013 14.3206 7.10826 14.3182 7.9341C14.3153 11.4028 11.4961 14.2229 8.03223 14.2229V14.2239ZM11.478 9.51536C11.2901 9.41998 10.3602 8.96411 10.1876 8.90116C10.015 8.83822 9.88911 8.80579 9.76132 8.99653C9.63638 9.18442 9.27301 9.61073 9.16238 9.73853C9.05175 9.86346 8.94207 9.88158 8.75419 9.78621C8.56631 9.69084 7.95498 9.49151 7.23397 8.84775C6.67318 8.34705 6.29265 7.72714 6.18202 7.53926C6.07139 7.35138 6.16962 7.24742 6.26595 7.15491C6.35274 7.07098 6.45383 6.9346 6.5492 6.82397C6.64457 6.71334 6.67414 6.63609 6.73708 6.50829C6.80003 6.38335 6.76951 6.27272 6.72182 6.17735C6.67414 6.08198 6.29551 5.15211 6.14101 4.77348C5.98937 4.40344 5.83105 4.45494 5.7147 4.44827C5.60407 4.44254 5.47913 4.44254 5.3542 4.44254C5.22926 4.44254 5.02326 4.49023 4.85063 4.67811C4.67801 4.86599 4.18876 5.32473 4.18876 6.2546C4.18876 7.18448 4.86494 8.08192 4.96031 8.20972C5.05568 8.33466 6.29265 10.2449 8.18768 11.0623C8.63784 11.2559 8.98976 11.3722 9.26348 11.4619C9.71649 11.6049 10.1275 11.584 10.4528 11.5363C10.8161 11.4829 11.5705 11.0804 11.7288 10.6388C11.8871 10.1973 11.8871 9.81959 11.8395 9.74139C11.7946 9.65746 11.6697 9.61073 11.479 9.5144L11.478 9.51536Z" />
                </svg>
            )
        case 'instagram':
            return (
                <svg
                    fill={fill ? fill : '#1E2123'}
                    height={size ? size.h : '25'}
                    viewBox="0 0 24 25"
                    width={size ? size.w : '24'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11.8054 6.56142C8.48024 6.56142 5.79665 9.24501 5.79665 12.5702C5.79665 15.8954 8.48024 18.579 11.8054 18.579C15.1306 18.579 17.8142 15.8954 17.8142 12.5702C17.8142 9.24501 15.1306 6.56142 11.8054 6.56142ZM11.8054 16.4755C9.65504 16.4755 7.90016 14.7206 7.90016 12.5702C7.90016 10.4198 9.65504 8.66494 11.8054 8.66494C13.9558 8.66494 15.7107 10.4198 15.7107 12.5702C15.7107 14.7206 13.9558 16.4755 11.8054 16.4755ZM18.0603 4.91493C17.284 4.91493 16.657 5.54189 16.657 6.31825C16.657 7.09462 17.284 7.72158 18.0603 7.72158C18.8367 7.72158 19.4636 7.09755 19.4636 6.31825C19.4639 6.1339 19.4277 5.95132 19.3573 5.78095C19.2868 5.61059 19.1835 5.4558 19.0531 5.32544C18.9228 5.19508 18.768 5.09173 18.5976 5.02128C18.4273 4.95084 18.2447 4.9147 18.0603 4.91493V4.91493ZM23.5183 12.5702C23.5183 10.953 23.533 9.35048 23.4422 7.73622C23.3513 5.86122 22.9236 4.19716 21.5525 2.82607C20.1785 1.45204 18.5173 1.02724 16.6423 0.936418C15.0252 0.845598 13.4226 0.860246 11.8084 0.860246C10.1912 0.860246 8.58864 0.845598 6.97438 0.936418C5.09938 1.02724 3.43532 1.45497 2.06423 2.82607C0.690202 4.20009 0.265398 5.86122 0.174577 7.73622C0.0837571 9.35341 0.0984056 10.956 0.0984056 12.5702C0.0984056 14.1845 0.0837571 15.7899 0.174577 17.4042C0.265398 19.2792 0.693132 20.9433 2.06423 22.3143C3.43825 23.6884 5.09938 24.1132 6.97438 24.204C8.59157 24.2948 10.1941 24.2802 11.8084 24.2802C13.4256 24.2802 15.0281 24.2948 16.6423 24.204C18.5173 24.1132 20.1814 23.6854 21.5525 22.3143C22.9265 20.9403 23.3513 19.2792 23.4422 17.4042C23.5359 15.7899 23.5183 14.1874 23.5183 12.5702V12.5702ZM20.9402 19.4784C20.7263 20.0116 20.4685 20.4101 20.0554 20.8202C19.6423 21.2333 19.2468 21.4911 18.7136 21.705C17.1726 22.3173 13.5134 22.1796 11.8054 22.1796C10.0974 22.1796 6.43532 22.3173 4.8943 21.7079C4.3611 21.494 3.96266 21.2362 3.55251 20.8231C3.13942 20.4101 2.88161 20.0145 2.66774 19.4813C2.05837 17.9374 2.19606 14.2782 2.19606 12.5702C2.19606 10.8622 2.05837 7.20009 2.66774 5.65908C2.88161 5.12587 3.13942 4.72743 3.55251 4.31728C3.96559 3.90712 4.3611 3.64638 4.8943 3.43251C6.43532 2.82314 10.0974 2.96083 11.8054 2.96083C13.5134 2.96083 17.1756 2.82314 18.7166 3.43251C19.2498 3.64638 19.6482 3.90419 20.0584 4.31728C20.4715 4.73036 20.7293 5.12587 20.9431 5.65908C21.5525 7.20009 21.4148 10.8622 21.4148 12.5702C21.4148 14.2782 21.5525 17.9374 20.9402 19.4784Z" />
                </svg>
            )
        case 'vk':
            return (
                <svg
                    fill={fill ? fill : '#1E2123'}
                    height={size ? size.h : '15'}
                    viewBox="0 0 25 15"
                    width={size ? size.w : '25'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24.2554 1.26839C24.4231 0.721422 24.2554 0.320312 23.4625 0.320312H20.836C20.1676 0.320312 19.8622 0.667314 19.6946 1.04843C19.6946 1.04843 18.3591 4.24671 16.4668 6.32048C15.8559 6.92391 15.5769 7.11446 15.2439 7.11446C15.0774 7.11446 14.8355 6.92391 14.8355 6.37694V1.26839C14.8355 0.612028 14.6427 0.320312 14.0857 0.320312H9.95847C9.54167 0.320312 9.29015 0.623791 9.29015 0.913154C9.29015 1.53423 10.2363 1.67773 10.3333 3.42803V7.22503C10.3333 8.05666 10.1812 8.2084 9.84589 8.2084C8.956 8.2084 6.79056 4.99835 5.50543 1.32367C5.25511 0.609676 5.0024 0.321489 4.33169 0.321489H1.70633C0.955376 0.321489 0.805664 0.66849 0.805664 1.0496C0.805664 1.73419 1.69555 5.12186 4.9509 9.60228C7.12112 12.6618 10.1765 14.3203 12.9599 14.3203C14.6283 14.3203 14.8343 13.9521 14.8343 13.317V11.0044C14.8343 10.2681 14.9936 10.1198 15.5218 10.1198C15.9098 10.1198 16.5781 10.3128 18.1364 11.7866C19.9161 13.5346 20.2108 14.3191 21.2108 14.3191H23.8362C24.586 14.3191 24.9608 13.951 24.7452 13.224C24.5093 12.5006 23.6589 11.4479 22.5307 10.2022C21.9175 9.49171 21.0012 8.72714 20.7222 8.34485C20.3329 7.85199 20.4455 7.63438 20.7222 7.1968C20.7234 7.19798 23.9224 2.77284 24.2554 1.26839Z" />
                </svg>
            )
        case 'facebook':
            return (
                <svg
                    fill={fill ? fill : '#1E2123'}
                    height={size ? size.h : '21'}
                    viewBox="0 0 21 21"
                    width={size ? size.w : '21'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.8047 0.320312C5.28266 0.320312 0.805664 4.79731 0.805664 10.3193C0.805664 15.3093 4.46166 19.4453 9.24266 20.1983V13.2103H6.70266V10.3193H9.24266V8.11631C9.24266 5.60831 10.7357 4.22531 13.0187 4.22531C14.1127 4.22531 15.2587 4.42031 15.2587 4.42031V6.87931H13.9947C12.7547 6.87931 12.3667 7.65131 12.3667 8.44231V10.3173H15.1377L14.6947 13.2083H12.3667V20.1963C17.1477 19.4473 20.8037 15.3103 20.8037 10.3193C20.8037 4.79731 16.3267 0.320312 10.8047 0.320312Z" />
                </svg>
            )
        case 'telegram':
            return (
                <svg
                    fill={fill ? fill : '#664EF9'}
                    height={size ? size.h : '15'}
                    viewBox="0 0 18 15"
                    width={size ? size.w : '18'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.0669 1.06967L1.42392 6.71627C0.424594 7.11765 0.430376 7.67512 1.24057 7.92372L5.00001 9.09648L13.6983 3.60845C14.1096 3.35821 14.4853 3.49283 14.1765 3.76702L7.12915 10.1272H7.1275L7.12915 10.128L6.86982 14.0031C7.24973 14.0031 7.41739 13.8288 7.63046 13.6232L9.4565 11.8475L13.2548 14.6531C13.9551 15.0387 14.4581 14.8405 14.6323 14.0047L17.1257 2.254C17.3809 1.23072 16.7351 0.767398 16.0669 1.06967Z" />
                </svg>
            )
        case 'search':
            return (
                <svg
                    fill="white"
                    height="18"
                    viewBox="0 0 18 18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" />
                </svg>
            )
        case 'list':
            return (
                <svg
                    fill={fill ? fill : '#BDBDBD'}
                    height="15"
                    viewBox="0 0 15 15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect height="3.22302" rx="1" width="14.5036" y="0.5" />
                    <rect height="3.22302" rx="1" width="14.5036" y="11.2773" />
                    <rect height="3.22302" rx="1" width="14.5036" y="5.88867" />
                </svg>
            )
        case 'sortIcon':
            return (
                <svg
                    className={ClassName}
                    fill={fill ? fill : '#7A7F86'}
                    height="16"
                    viewBox="0 0 15 16"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.6">
                        <path d="M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z" />
                        <path d="M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z" />
                        <path d="M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z" />
                        <path d="M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z" />
                        <path d="M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z" />
                    </g>
                </svg>
            )
        case 'table':
            return (
                <svg
                    fill={fill ? fill : '#BDBDBD'}
                    height="14"
                    viewBox="0 0 15 14"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect height="5.44444" rx="1" width="5.44444" x="0.00390625" />
                    <rect
                        height="5.44444"
                        rx="1"
                        width="5.44444"
                        x="0.00390625"
                        y="8.55469"
                    />
                    <rect height="5.44444" rx="1" width="5.44444" x="8.55957" />
                    <rect
                        height="5.44444"
                        rx="1"
                        width="5.44444"
                        x="8.55957"
                        y="8.55469"
                    />
                </svg>
            )
        case 'time':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '15'}
                    viewBox="0 0 15 15"
                    width={size ? size.w : '15'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.5 0C3.36443 0 0 3.36443 0 7.5C0 11.6356 3.36443 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36443 11.6356 0 7.5 0ZM7.5 13.3607C4.26835 13.3607 1.63934 10.7317 1.63934 7.5C1.63934 4.26851 4.26835 1.63934 7.5 1.63934C10.7317 1.63934 13.3607 4.26851 13.3607 7.5C13.3607 10.7317 10.7317 13.3607 7.5 13.3607Z" />
                    <path d="M8.14909 7.5093V4.36588C8.14909 4.01489 7.86467 3.73047 7.51382 3.73047C7.16286 3.73047 6.87842 4.01489 6.87842 4.36588V7.71229C6.87842 7.72228 6.88088 7.73166 6.88136 7.74165C6.87301 7.91443 6.93253 8.08985 7.06448 8.22183L9.43088 10.5881C9.67909 10.8363 10.0814 10.8363 10.3294 10.5881C10.5774 10.3399 10.5776 9.93757 10.3294 9.68953L8.14909 7.5093Z" />
                </svg>
            )
        case 'castle':
            return (
                <svg
                    fill={fill ? fill : '#686868'}
                    height={size ? size.h : '20'}
                    viewBox="0 0 16 20"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 8 0C5.2425 0 3 2.2425 3 5V7.5H2.375C1.34167 7.5 0.5 8.34083 0.5 9.375V18.125C0.5 19.1592 1.34167 20 2.375 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66667 5C4.66667 3.16167 6.16167 1.66667 8 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66667V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 8 16.6667C7.53917 16.6667 7.16667 16.2933 7.16667 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 8 10.8333C8.91917 10.8333 9.66667 11.5808 9.66667 12.5C9.66667 13.1142 9.32917 13.6458 8.83333 13.935Z" />
                </svg>
            )
        case 'fav':
            return (
                <svg
                    fill={fill ? fill : '#EB5757'}
                    height={size ? size.h : '14'}
                    viewBox="0 0 512 512"
                    width={size ? size.w : '16'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
            )
        case 'checked':
            return (
                <svg
                    fill={fill ? fill : 'white'}
                    height={size ? size.h : '15'}
                    viewBox="0 0 14 10"
                    width={size ? size.w : '15'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0.5 5.41478L4.95177 9.87505L13.5 1.33527L12.2728 0.125L4.95177 7.43749L1.71024 4.19599L0.5 5.41478Z" />
                </svg>
            )
        default:
            break
    }
}
