interface SketachAnimationSVG {
  svgProps: {
    width: string
    height: string
    viewBox: string
    fill: string
    xmlns: string
    className: string
  }
  paths: {
    d: string
    stroke: string
    strokeWidth: string
    strokeLinecap: string
    duration: number
    delay: number
  }[]
}

export const sketchAnimationSVG: Record<string, SketachAnimationSVG> = {
  topRight: {
    svgProps: {
      width: '119',
      height: '113',
      viewBox: '0 0 119 113',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'absolute -top-40 -left-16 translate-x-4',
    },
    paths: [
      {
        d: 'M1.96875 111.408C5.0562 91.6601 6.94121 69.3399 22.0038 54.4141C29.7556 46.7329 43.2415 41.6109 53.3227 47.7968C59.0804 51.3298 62.9373 58.2181 61.8793 65.1224C60.232 75.8728 45.3018 80.1171 36.0837 79.416C23.1651 78.4336 18.9685 66.1148 19.0863 54.7995C19.2764 36.5253 33.4665 18.2953 48.6325 9.13154C63.1377 0.367032 81.6024 -0.226327 97.3504 5.32221C101.63 6.83005 110.463 10.3749 113.99 13.5842',
        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 1.0,
        delay: 0,
      },
      {
        d: 'M108.184 18.4453C110.862 17.2187 113.804 16.2993 116.372 14.8377C116.929 14.5204 117.824 14.3835 117.123 13.681C115.194 11.7495 113.497 9.27085 112.778 6.60469',

        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 0.75,
        delay: 1.0,
      },
    ],
  },

  bottomRight: {
    svgProps: {
      width: '143',
      height: '139',
      viewBox: '0 0 143 139',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'absolute top-14 -left-14 -translate-x-4',
    },
    paths: [
      {
        d: 'M30.6162 1.51172C28.4588 21.3829 24.471 43.4248 35.1311 61.7557C40.6171 71.1895 52.3057 79.6441 63.6493 76.2944C70.1279 74.3814 75.6443 68.7339 76.4193 61.7922C77.626 50.9834 64.3145 43.0004 55.2315 41.2787C42.5023 38.8659 35.2449 49.6683 32.4143 60.6245C27.8428 78.3187 36.8006 99.613 49.0597 112.407C60.7847 124.644 78.459 130.022 95.1082 128.762C99.6327 128.42 109.084 127.295 113.325 125.115',
        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 1.0,
        delay: 0,
      },
      {
        d: 'M108.983 118.91C111.25 120.791 113.852 122.445 115.951 124.524C116.406 124.976 117.235 125.341 116.375 125.836C114.01 127.199 111.726 129.151 110.339 131.538',
        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 0.75,
        delay: 1.0,
      },
    ],
  },

  topLeft: {
    svgProps: {
      width: '119',
      height: '113',
      viewBox: '0 0 119 113',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'absolute -top-40 -left-34 -translate-x-4',
    },
    paths: [
      {
        d: 'M117.487 111.364C114.399 91.6162 112.514 69.296 97.4517 54.3702C89.7 46.6889 76.2141 41.5669 66.1328 47.7529C60.3752 51.2858 56.5183 58.1741 57.5762 65.0784C59.2236 75.8288 74.1538 80.0731 83.3719 79.3721C96.2904 78.3897 100.487 66.0709 100.369 54.7555C100.179 36.4813 85.9891 18.2514 70.8231 9.08759C56.3179 0.323087 37.8531 -0.270272 22.1052 5.27827C17.8256 6.78611 8.99294 10.331 5.46534 13.5403',
        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 1.0,
        delay: 0,
      },
      {
        d: 'M11.272 18.4014C8.59404 17.1748 5.65127 16.2554 3.08371 14.7938C2.52626 14.4765 1.63133 14.3395 2.33279 13.6371C4.26161 11.7055 5.95903 9.22691 6.67726 6.56075',
        stroke: '#00D46B',
        strokeWidth: '3',
        strokeLinecap: 'round',
        duration: 0.75,
        delay: 1.0,
      },
    ],
  },
}
