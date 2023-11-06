const PlayListIcon = () => {
    return (
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47619 5.12211H15.9524M8.47619 0.916748H15.9524M1 14.0001H15.9524M1 9.32746H15.9524" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 0.916748L4.7381 3.25306L1 5.58937V0.916748Z" stroke="white" strokeLinejoin="round" />
        </svg>
    )
}

const SearchIcon = () => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10.0546" cy="9.19524" rx="8.30535" ry="8.1469" stroke="white" strokeWidth="1.69852" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.2163 15.7625L18.6426 18.0995" stroke="white" strokeWidth="1.69852" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const AddIcon = ({width = "21", height = "23"}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4027_1795)">
                <path d="M9.97583 19.4143C5.56583 19.4143 1.97583 15.8243 1.97583 11.4143C1.97583 7.00431 5.56583 3.41431 9.97583 3.41431C14.3858 3.41431 17.9758 7.00431 17.9758 11.4143C17.9758 15.8243 14.3858 19.4143 9.97583 19.4143ZM9.97583 1.41431C8.66261 1.41431 7.36225 1.67296 6.149 2.17551C4.93574 2.67806 3.83335 3.41465 2.90476 4.34324C1.0294 6.2186 -0.0241699 8.76214 -0.0241699 11.4143C-0.0241699 14.0665 1.0294 16.61 2.90476 18.4854C3.83335 19.414 4.93574 20.1506 6.149 20.6531C7.36225 21.1556 8.66261 21.4143 9.97583 21.4143C12.628 21.4143 15.1715 20.3607 17.0469 18.4854C18.9223 16.61 19.9758 14.0665 19.9758 11.4143C19.9758 10.1011 19.7172 8.80073 19.2146 7.58747C18.7121 6.37422 17.9755 5.27182 17.0469 4.34324C16.1183 3.41465 15.0159 2.67806 13.8027 2.17551C12.5894 1.67296 11.289 1.41431 9.97583 1.41431ZM10.9758 6.41431H8.97583V10.4143H4.97583V12.4143H8.97583V16.4143H10.9758V12.4143H14.9758V10.4143H10.9758V6.41431Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_4027_1795">
                    <rect width="20.7597" height="21.7033" fill="white" transform="translate(0.000732422 0.928711)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const PlayIcon = () => {
    return (
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5711_1405)">
                <path d="M9.9751 19.1082C5.5651 19.1082 1.9751 15.5182 1.9751 11.1082C1.9751 6.69815 5.5651 3.10815 9.9751 3.10815C14.3851 3.10815 17.9751 6.69815 17.9751 11.1082C17.9751 15.5182 14.3851 19.1082 9.9751 19.1082ZM9.9751 1.10815C8.66188 1.10815 7.36152 1.36681 6.14826 1.86936C4.93501 2.37191 3.83262 3.1085 2.90403 4.03709C1.02867 5.91245 -0.0249023 8.45599 -0.0249023 11.1082C-0.0249023 13.7603 1.02867 16.3039 2.90403 18.1792C3.83262 19.1078 4.93501 19.8444 6.14826 20.347C7.36152 20.8495 8.66188 21.1082 9.9751 21.1082C12.6273 21.1082 15.1708 20.0546 17.0462 18.1792C18.9215 16.3039 19.9751 13.7603 19.9751 11.1082C19.9751 9.79494 19.7164 8.49458 19.2139 7.28132C18.7113 6.06806 17.9748 4.96567 17.0462 4.03709C16.1176 3.1085 15.0152 2.37191 13.8019 1.86936C12.5887 1.36681 11.2883 1.10815 9.9751 1.10815Z" fill="white" />
                <path d="M7.92374 14.694V7.52599C7.92389 7.43631 7.94816 7.34832 7.994 7.27124C8.03985 7.19416 8.10558 7.13082 8.18431 7.08788C8.26305 7.04493 8.35188 7.02396 8.44151 7.02714C8.53113 7.03033 8.61825 7.05756 8.69374 7.10599L14.2697 10.689C14.3403 10.7342 14.3984 10.7965 14.4387 10.8701C14.4789 10.9436 14.5 11.0261 14.5 11.11C14.5 11.1938 14.4789 11.2764 14.4387 11.3499C14.3984 11.4235 14.3403 11.4858 14.2697 11.531L8.69374 15.115C8.61825 15.1634 8.53113 15.1907 8.44151 15.1938C8.35188 15.197 8.26305 15.1761 8.18431 15.1331C8.10558 15.0902 8.03985 15.0268 7.994 14.9498C7.94816 14.8727 7.92389 14.7837 7.92374 14.694Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_5711_1405">
                    <rect width="20.7597" height="21.7033" fill="white" transform="translate(0 0.622559)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const NavPlayIcon = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.41603 14.6094C4.21217 14.6091 4.01192 14.5556 3.83498 14.4544C3.43654 14.2286 3.18884 13.7903 3.18884 13.3145V3.68561C3.18884 3.20848 3.43654 2.77152 3.83498 2.54574C4.01613 2.44163 4.22193 2.38809 4.43086 2.39072C4.63978 2.39335 4.84417 2.45205 5.02265 2.56068L13.252 7.4867C13.4236 7.59424 13.5649 7.74358 13.6629 7.92071C13.7609 8.09784 13.8124 8.29696 13.8124 8.49939C13.8124 8.70183 13.7609 8.90095 13.6629 9.07808C13.5649 9.25521 13.4236 9.40455 13.252 9.51209L5.02132 14.4394C4.83867 14.5499 4.62946 14.6086 4.41603 14.6094Z"
                className="fill-white group-hover:fill-[#3E14B5] transition-colors" />
        </svg>
    )
}

const LogOutIcon = () => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.875 2.375H5.54165C5.12172 2.375 4.71899 2.54181 4.42206 2.83875C4.12513 3.13568 3.95831 3.53841 3.95831 3.95833V15.0417C3.95831 15.4616 4.12513 15.8643 4.42206 16.1613C4.71899 16.4582 5.12172 16.625 5.54165 16.625H11.875M15.0416 9.5L11.875 6.33333M15.0416 9.5L11.875 12.6667M15.0416 9.5H7.12498"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white group-hover:stroke-[#3E14B5] transition-colors"
            />
        </svg>
    )

}

const PencilIcon = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.31586 14.2858H4.76886L12.0036 7.05106L9.55059 4.59806L2.31586 11.8328V14.2858ZM3.62413 12.3757L9.55059 6.44926L10.1524 7.05106L4.22593 12.9775H3.62413V12.3757ZM12.3699 2.70106C12.3094 2.64042 12.2375 2.59231 12.1584 2.55949C12.0793 2.52666 11.9944 2.50977 11.9088 2.50977C11.8231 2.50977 11.7383 2.52666 11.6591 2.55949C11.58 2.59231 11.5081 2.64042 11.4476 2.70106L10.2505 3.89813L12.7035 6.35114L13.9006 5.15407C13.9612 5.09355 14.0093 5.02167 14.0422 4.94254C14.075 4.86341 14.0919 4.77858 14.0919 4.69291C14.0919 4.60723 14.075 4.5224 14.0422 4.44327C14.0093 4.36414 13.9612 4.29226 13.9006 4.23174L12.3699 2.70106Z" fill="black" />
        </svg>
    )

}

const MinusIcon = () => {
    return (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 19C5.59 19 2 15.41 2 11C2 6.59 5.59 3 10 3C14.41 3 18 6.59 18 11C18 15.41 14.41 19 10 19ZM10 1C8.68678 1 7.38642 1.25866 6.17317 1.7612C4.95991 2.26375 3.85752 3.00035 2.92893 3.92893C1.05357 5.8043 0 8.34784 0 11C0 13.6522 1.05357 16.1957 2.92893 18.0711C3.85752 18.9997 4.95991 19.7362 6.17317 20.2388C7.38642 20.7413 8.68678 21 10 21C12.6522 21 15.1957 19.9464 17.0711 18.0711C18.9464 16.1957 20 13.6522 20 11C20 9.68678 19.7413 8.38642 19.2388 7.17317C18.7362 5.95991 17.9997 4.85752 17.0711 3.92893C16.1425 3.00035 15.0401 2.26375 13.8268 1.7612C12.6136 1.25866 11.3132 1 10 1Z" fill="white" />
            <rect x="5" y="10" width="10" height="2" fill="white" />
        </svg>

    )
}

const SaveIcon = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="majesticons:save-line">
                <path id="Vector" d="M8 4H4V20H20V8L16 4H14M8 4V8H14V4M8 4H14M12 12C11.333 12 10 12.4 10 14C10 15.6 11.333 16 12 16C12.667 16 14 15.6 14 14C14 12.4 12.667 12 12 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>

    )
}

const TrashIcon = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.60004 5.39998H7.00002V4.59998C7.00002 4.17564 7.16859 3.76868 7.46864 3.46862C7.7687 3.16857 8.17566 3 8.6 3H13.4C13.8243 3 14.2313 3.16857 14.5313 3.46862C14.8314 3.76868 14.9999 4.17564 14.9999 4.59998V5.39998H17.3999C17.6121 5.39998 17.8156 5.48426 17.9656 5.63429C18.1156 5.78432 18.1999 5.9878 18.1999 6.19997C18.1999 6.41214 18.1156 6.61562 17.9656 6.76565C17.8156 6.91567 17.6121 6.99996 17.3999 6.99996H16.5999V17.3999C16.5999 17.8242 16.4313 18.2312 16.1313 18.5312C15.8312 18.8313 15.4243 18.9998 14.9999 18.9998H7.00002C6.57567 18.9998 6.16871 18.8313 5.86866 18.5312C5.5686 18.2312 5.40003 17.8242 5.40003 17.3999V6.99996H4.60004C4.38787 6.99996 4.18439 6.91567 4.03436 6.76565C3.88433 6.61562 3.80005 6.41214 3.80005 6.19997C3.80005 5.9878 3.88433 5.78432 4.03436 5.63429C4.18439 5.48426 4.38787 5.39998 4.60004 5.39998ZM7.00002 6.99996V17.3999H14.9999V6.99996H7.00002ZM8.6 5.39998H13.4V4.59998H8.6V5.39998ZM8.6 8.59994H10.2V15.7999H8.6V8.59994ZM11.8 8.59994H13.4V15.7999H11.8V8.59994Z" fill="white" />
        </svg>

    )
}

const ShareIcon = () => {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1496 14.0065L7.67168 12.1097C7.21761 12.5951 6.62803 12.9327 5.97956 13.0787C5.33109 13.2246 4.65371 13.1721 4.03545 12.9281C3.4172 12.684 2.88666 12.2596 2.51278 11.71C2.1389 11.1604 1.93896 10.5111 1.93896 9.8464C1.93896 9.18171 2.1389 8.53238 2.51278 7.98281C2.88666 7.43324 3.4172 7.00883 4.03545 6.76474C4.65371 6.52065 5.33109 6.46817 5.97956 6.61412C6.62803 6.76007 7.21761 7.09769 7.67168 7.58312L11.1505 5.68635C10.9533 4.90442 11.048 4.07741 11.4169 3.36034C11.7859 2.64327 12.4037 2.08538 13.1545 1.79124C13.9054 1.4971 14.7378 1.48692 15.4956 1.76259C16.2534 2.03826 16.8847 2.58087 17.2711 3.28869C17.6575 3.99652 17.7724 4.82096 17.5944 5.60748C17.4164 6.394 16.9576 7.0886 16.3041 7.56106C15.6506 8.03353 14.8472 8.25143 14.0445 8.17391C13.2418 8.09639 12.495 7.72878 11.944 7.13999L8.46518 9.03675C8.5987 9.56798 8.5987 10.124 8.46518 10.6552L11.944 12.552C12.4953 11.9635 13.2423 11.5962 14.045 11.5191C14.8477 11.442 15.651 11.6603 16.3042 12.133C16.9575 12.6058 17.4159 13.3006 17.5936 14.0872C17.7713 14.8738 17.6559 15.6981 17.2692 16.4058C16.8826 17.1134 16.2511 17.6557 15.4931 17.9311C14.7352 18.2064 13.9029 18.1959 13.1522 17.9014C12.4014 17.607 11.7839 17.0489 11.4152 16.3317C11.0466 15.6145 10.9521 14.7875 11.1496 14.0056V14.0065ZM5.25227 11.5026C5.69162 11.5026 6.11297 11.328 6.42364 11.0174C6.7343 10.7067 6.90883 10.2853 6.90883 9.84599C6.90883 9.40664 6.7343 8.98528 6.42364 8.67462C6.11297 8.36395 5.69162 8.18942 5.25227 8.18942C4.81292 8.18942 4.39156 8.36395 4.0809 8.67462C3.77023 8.98528 3.5957 9.40664 3.5957 9.84599C3.5957 10.2853 3.77023 10.7067 4.0809 11.0174C4.39156 11.328 4.81292 11.5026 5.25227 11.5026ZM14.3634 6.53286C14.8027 6.53286 15.2241 6.35833 15.5347 6.04766C15.8454 5.73699 16.0199 5.31564 16.0199 4.87629C16.0199 4.43694 15.8454 4.01559 15.5347 3.70492C15.2241 3.39426 14.8027 3.21972 14.3634 3.21972C13.924 3.21972 13.5027 3.39426 13.192 3.70492C12.8813 4.01559 12.7068 4.43694 12.7068 4.87629C12.7068 5.31564 12.8813 5.73699 13.192 6.04766C13.5027 6.35833 13.924 6.53286 14.3634 6.53286ZM14.3634 16.4722C14.8027 16.4722 15.2241 16.2977 15.5347 15.9871C15.8454 15.6764 16.0199 15.255 16.0199 14.8157C16.0199 14.3763 15.8454 13.955 15.5347 13.6443C15.2241 13.3336 14.8027 13.1591 14.3634 13.1591C13.924 13.1591 13.5027 13.3336 13.192 13.6443C12.8813 13.955 12.7068 14.3763 12.7068 14.8157C12.7068 15.255 12.8813 15.6764 13.192 15.9871C13.5027 16.2977 13.924 16.4722 14.3634 16.4722Z" fill="white" />
        </svg>

    )
}

export {
    PlayListIcon,
    SearchIcon,
    AddIcon,
    PlayIcon,
    NavPlayIcon,
    LogOutIcon,
    PencilIcon,
    MinusIcon,
    SaveIcon,
    TrashIcon,
    ShareIcon
}