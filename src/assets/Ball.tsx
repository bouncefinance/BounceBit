export default function Ball(props: any) {
  return (
    <svg
      width="166"
      height="166"
      viewBox="0 0 166 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="82.9999"
        cy="82.6"
        rx="82.6"
        ry="82.6"
        fill="url(#paint0_linear_11_587)"
      />
      <path
        d="M142.36 85.1734C140.629 93.537 135.959 98.3947 128.349 99.7466C133.109 102.596 136.246 106.089 137.759 110.228C139.272 114.366 138.779 119.446 136.28 125.468C134.988 128.539 133.406 131.104 131.535 133.164C129.665 135.223 127.629 136.767 125.427 137.795C123.226 138.822 120.686 139.464 117.808 139.719C114.93 139.973 112.018 139.912 109.071 139.534C106.124 139.156 102.818 138.496 99.1544 137.553L93.8525 154.613L83.687 151.454L88.9057 134.661C85.3852 133.567 82.7077 132.711 80.8733 132.092L75.6338 148.951L65.4683 145.792L70.7702 128.732C69.9781 128.485 68.7934 128.105 67.2161 127.59C65.6388 127.076 64.4321 126.688 63.5959 126.429L50.394 122.326L56.2452 110.719L63.5723 112.996C65.7726 113.68 67.4022 112.939 68.4612 110.774L76.8195 83.8792L77.8756 84.2074C77.6254 84.0807 77.2803 83.949 76.8402 83.8123L82.8075 64.6115C83.1779 61.4008 81.6909 59.2758 78.3464 58.2364L71.0194 55.9593L74.4292 44.9874L88.4025 49.4034C91.2189 50.2786 93.3601 50.9196 94.8262 51.3264L100.066 34.4671L110.231 37.6264L105.096 54.1511C108.732 55.1833 111.43 55.973 113.19 56.52L118.284 40.1291L128.45 43.2884L123.21 60.1476C126.59 61.5402 129.514 62.9993 131.984 64.5249C134.453 66.0505 136.628 67.8267 138.507 69.8536C140.387 71.8805 141.661 74.1841 142.331 76.7644C143.001 79.3447 143.011 82.1477 142.36 85.1734ZM116.837 117.224C117.336 115.619 117.449 114.089 117.177 112.635C116.905 111.181 116.41 109.902 115.691 108.798C114.972 107.695 113.919 106.621 112.53 105.578C111.141 104.535 109.828 103.675 108.591 102.997C107.354 102.319 105.788 101.612 103.893 100.877C101.998 100.141 100.501 99.6023 99.4009 99.2604C98.3007 98.9185 96.8746 98.4998 95.1224 98.0041C93.3703 97.5085 92.3182 97.206 91.9662 97.0966L84.9386 119.709C85.2907 119.819 86.1013 120.083 87.3706 120.502C88.6398 120.921 89.6925 121.26 90.5286 121.52C91.3648 121.78 92.5413 122.109 94.0583 122.507C95.5753 122.905 96.8903 123.216 98.0031 123.439C99.1159 123.663 100.429 123.863 101.942 124.04C103.456 124.217 104.774 124.284 105.897 124.242C107.02 124.2 108.211 124.056 109.469 123.812C110.727 123.567 111.804 123.168 112.7 122.615C113.596 122.062 114.412 121.337 115.149 120.441C115.886 119.545 116.448 118.473 116.837 117.224ZM122.047 83.9225C122.504 82.4506 122.635 81.0606 122.438 79.7523C122.241 78.444 121.861 77.2988 121.298 76.3167C120.734 75.3346 119.872 74.382 118.712 73.4588C117.551 72.5356 116.455 71.7915 115.424 71.2266C114.393 70.6617 113.095 70.0628 111.531 69.4298C109.966 68.7968 108.707 68.3444 107.754 68.0727C106.801 67.8009 105.606 67.454 104.169 67.0318C102.732 66.6096 101.859 66.3507 101.551 66.2549L95.1681 86.7937C95.3881 86.8621 96.1438 87.1092 97.435 87.5349C98.7263 87.9607 99.7495 88.2787 100.504 88.4889C101.26 88.6991 102.374 88.9964 103.847 89.3808C105.32 89.7652 106.568 90.0187 107.591 90.1411C108.615 90.2636 109.824 90.3705 111.22 90.4617C112.615 90.5529 113.81 90.472 114.806 90.219C115.801 89.9659 116.803 89.6168 117.809 89.1717C118.816 88.7265 119.677 88.0526 120.392 87.1498C121.107 86.2471 121.659 85.1713 122.047 83.9225Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11_587"
          x1="151.99"
          y1="209.316"
          x2="-17.8901"
          y2="40.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6EFEF" />
          <stop offset="0.604167" />
          <stop offset="0.699807" stop-color="#252424" />
          <stop offset="1" stop-color="#F6EFEF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function BallBase(props: any) {
  return (
    <svg
      width="55"
      height="86"
      viewBox="0 0 55 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_11_611)">
        <path
          d="M130.872 44.75V32.225H143.048C144.208 32.225 145.312 32.325 146.361 32.525C147.466 32.675 148.432 32.975 149.26 33.425C150.088 33.875 150.751 34.5 151.248 35.3C151.745 36.1 151.993 37.125 151.993 38.375C151.993 40.625 151.248 42.25 149.757 43.25C148.266 44.25 146.361 44.75 144.042 44.75H130.872ZM117.868 23.075V76.625H146.527C149.177 76.625 151.745 76.325 154.23 75.725C156.77 75.125 159.006 74.2 160.939 72.95C162.927 71.7 164.501 70.1 165.66 68.15C166.82 66.15 167.4 63.8 167.4 61.1C167.4 57.75 166.489 54.9 164.666 52.55C162.899 50.15 160.194 48.475 156.549 47.525C159.2 46.375 161.188 44.9 162.513 43.1C163.893 41.3 164.583 39.05 164.583 36.35C164.583 33.85 164.114 31.75 163.175 30.05C162.292 28.35 161.022 27 159.365 26C157.709 24.95 155.721 24.2 153.402 23.75C151.082 23.3 148.515 23.075 145.699 23.075H117.868ZM130.872 67.475V52.775H145.036C147.852 52.775 150.116 53.375 151.828 54.575C153.54 55.725 154.396 57.675 154.396 60.425C154.396 61.825 154.119 62.975 153.567 63.875C153.07 64.775 152.38 65.5 151.497 66.05C150.613 66.55 149.591 66.925 148.432 67.175C147.272 67.375 146.057 67.475 144.787 67.475H130.872Z"
          fill="white"
        />
        <path
          d="M185.382 57.275C185.382 55.725 185.548 54.2 185.879 52.7C186.21 51.2 186.762 49.875 187.535 48.725C188.364 47.575 189.441 46.65 190.766 45.95C192.091 45.2 193.748 44.825 195.736 44.825C197.723 44.825 199.38 45.2 200.705 45.95C202.086 46.65 203.162 47.575 203.936 48.725C204.764 49.875 205.344 51.2 205.675 52.7C206.006 54.2 206.172 55.725 206.172 57.275C206.172 58.825 206.006 60.35 205.675 61.85C205.344 63.3 204.764 64.625 203.936 65.825C203.162 66.975 202.086 67.9 200.705 68.6C199.38 69.3 197.723 69.65 195.736 69.65C193.748 69.65 192.091 69.3 190.766 68.6C189.441 67.9 188.364 66.975 187.535 65.825C186.762 64.625 186.21 63.3 185.879 61.85C185.548 60.35 185.382 58.825 185.382 57.275ZM173.62 57.275C173.62 60.375 174.145 63.175 175.194 65.675C176.243 68.175 177.734 70.325 179.667 72.125C181.599 73.875 183.919 75.225 186.624 76.175C189.33 77.125 192.367 77.6 195.736 77.6C199.104 77.6 202.141 77.125 204.847 76.175C207.608 75.225 209.954 73.875 211.887 72.125C213.82 70.325 215.311 68.175 216.36 65.675C217.409 63.175 217.934 60.375 217.934 57.275C217.934 54.175 217.409 51.375 216.36 48.875C215.311 46.325 213.82 44.175 211.887 42.425C209.954 40.625 207.608 39.25 204.847 38.3C202.141 37.3 199.104 36.8 195.736 36.8C192.367 36.8 189.33 37.3 186.624 38.3C183.919 39.25 181.599 40.625 179.667 42.425C177.734 44.175 176.243 46.325 175.194 48.875C174.145 51.375 173.62 54.175 173.62 57.275Z"
          fill="white"
        />
        <path
          d="M265.753 76.625V37.85H253.991V58.175C253.991 62.125 253.273 64.975 251.838 66.725C250.402 68.425 248.083 69.275 244.88 69.275C242.064 69.275 240.104 68.5 238.999 66.95C237.895 65.35 237.343 62.95 237.343 59.75V37.85H225.581V61.7C225.581 64.1 225.802 66.3 226.244 68.3C226.741 70.25 227.569 71.925 228.729 73.325C229.888 74.675 231.462 75.725 233.45 76.475C235.493 77.225 238.088 77.6 241.236 77.6C243.721 77.6 246.15 77.1 248.525 76.1C250.899 75.1 252.832 73.475 254.323 71.225H254.571V76.625H265.753Z"
          fill="white"
        />
        <path
          d="M274.68 37.85V76.625H286.441V56.3C286.441 52.35 287.159 49.525 288.595 47.825C290.031 46.075 292.35 45.2 295.553 45.2C298.369 45.2 300.329 46 301.433 47.6C302.538 49.15 303.09 51.525 303.09 54.725V76.625H314.852V52.775C314.852 50.375 314.603 48.2 314.106 46.25C313.664 44.25 312.864 42.575 311.704 41.225C310.545 39.825 308.943 38.75 306.9 38C304.912 37.2 302.345 36.8 299.197 36.8C296.712 36.8 294.283 37.325 291.908 38.375C289.534 39.375 287.601 41 286.11 43.25H285.862V37.85H274.68Z"
          fill="white"
        />
        <path
          d="M352.934 51.5H364.447C364.282 49 363.619 46.85 362.459 45.05C361.3 43.2 359.781 41.675 357.904 40.475C356.082 39.225 353.983 38.3 351.609 37.7C349.29 37.1 346.86 36.8 344.32 36.8C340.841 36.8 337.749 37.325 335.043 38.375C332.337 39.425 330.046 40.9 328.168 42.8C326.291 44.65 324.855 46.875 323.861 49.475C322.923 52.025 322.453 54.8 322.453 57.8C322.453 60.7 322.978 63.375 324.027 65.825C325.076 68.225 326.539 70.3 328.417 72.05C330.294 73.8 332.558 75.175 335.209 76.175C337.915 77.125 340.869 77.6 344.072 77.6C349.759 77.6 354.425 76.25 358.07 73.55C361.714 70.85 363.923 66.925 364.696 61.775H353.348C352.962 64.175 351.995 66.1 350.449 67.55C348.958 68.95 346.805 69.65 343.989 69.65C342.166 69.65 340.62 69.275 339.35 68.525C338.08 67.775 337.059 66.825 336.286 65.675C335.568 64.475 335.043 63.15 334.712 61.7C334.381 60.25 334.215 58.825 334.215 57.425C334.215 55.975 334.381 54.525 334.712 53.075C335.043 51.575 335.595 50.225 336.368 49.025C337.197 47.775 338.246 46.775 339.516 46.025C340.786 45.225 342.36 44.825 344.237 44.825C349.262 44.825 352.161 47.05 352.934 51.5Z"
          fill="white"
        />
        <path
          d="M400.165 53.075H381.031C381.086 52.325 381.252 51.475 381.528 50.525C381.86 49.575 382.384 48.675 383.102 47.825C383.875 46.975 384.869 46.275 386.084 45.725C387.354 45.125 388.928 44.825 390.805 44.825C393.676 44.825 395.802 45.525 397.183 46.925C398.619 48.325 399.612 50.375 400.165 53.075ZM381.031 59.825H411.926C412.147 56.825 411.871 53.95 411.098 51.2C410.325 48.45 409.055 46 407.288 43.85C405.576 41.7 403.367 40 400.662 38.75C397.956 37.45 394.781 36.8 391.136 36.8C387.878 36.8 384.897 37.325 382.191 38.375C379.54 39.425 377.249 40.875 375.316 42.725C373.383 44.525 371.892 46.675 370.843 49.175C369.794 51.675 369.27 54.375 369.27 57.275C369.27 60.275 369.767 63.025 370.76 65.525C371.81 68.025 373.273 70.175 375.15 71.975C377.028 73.775 379.319 75.175 382.025 76.175C384.731 77.125 387.768 77.6 391.136 77.6C395.996 77.6 400.137 76.6 403.561 74.6C406.984 72.6 409.524 69.275 411.181 64.625H400.827C400.441 65.825 399.392 66.975 397.68 68.075C395.968 69.125 393.925 69.65 391.551 69.65C388.237 69.65 385.697 68.875 383.93 67.325C382.163 65.775 381.197 63.275 381.031 59.825Z"
          fill="white"
        />
        <path
          d="M6.17821 11C3.31914 11 1.00141 13.0987 1.00141 15.6875C1.00141 18.2763 3.31914 20.375 6.17821 20.375H23.4342C26.2933 20.375 28.611 18.2763 28.611 15.6875C28.611 13.0987 26.2933 11 23.4342 11H6.17821Z"
          fill="white"
        />
        <path
          d="M52.8334 26.336C55.5162 25.441 56.8898 22.7462 55.9014 20.317C54.913 17.8878 51.9369 16.644 49.2542 17.539L4.38856 32.5061C1.70577 33.4011 0.332197 36.0959 1.32059 38.5251C2.30899 40.9543 5.28507 42.1981 7.96785 41.3031L52.8334 26.336Z"
          fill="white"
        />
        <path
          d="M52.8334 64.4939C55.5162 63.5989 56.8898 60.9041 55.9014 58.4749C54.913 56.0457 51.9369 54.8019 49.2542 55.6969L4.38856 70.664C1.70577 71.559 0.332197 74.2538 1.32059 76.683C2.30899 79.1122 5.28507 80.356 7.96785 79.461L52.8334 64.4939Z"
          fill="white"
        />
        <path
          d="M33.7878 76.625C30.9287 76.625 28.611 78.7237 28.611 81.3125C28.611 83.9013 30.9287 86 33.7878 86H51.0438C53.9029 86 56.2206 83.9013 56.2206 81.3125C56.2206 78.7237 53.9029 76.625 51.0438 76.625H33.7878Z"
          fill="white"
        />
        <path
          d="M52.9021 45.0638C55.5706 44.1345 56.9019 41.4223 55.8755 39.0061C54.8492 36.5898 51.8539 35.3844 49.1854 36.3137L4.31984 51.9387C1.65134 52.868 0.320112 55.5802 1.34646 57.9965C2.3728 60.4128 5.36806 61.6182 8.03656 60.6888L52.9021 45.0638Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_611">
          <rect
            width="73.5"
            height="85.26"
            fill="white"
            transform="translate(0.800049 0.600098)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}