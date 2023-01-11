import Link from 'next/link'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Page404 = ({ statusCode }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 900 900"
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,728.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M0 6400 l0 -880 344 0 344 0 6 123 c3 67 8 295 12 507 3 212 8 393
10 403 5 16 40 17 544 17 481 0 538 -2 544 -16 3 -9 6 -1487 6 -3285 l0 -3269
380 0 380 0 0 3285 0 3285 975 0 975 0 0 355 0 355 -2260 0 -2260 0 0 -880z"
                />
                <path
                  d="M4702 6903 l3 -378 418 -3 417 -2 0 -2910 0 -2910 -680 0 -680 0 0
1065 0 1065 -405 0 -405 0 0 -1415 0 -1415 1470 0 1470 0 0 3640 0 3640 -805
0 -805 0 2 -377z"
                />
                <path
                  d="M6450 6925 l0 -355 243 0 c133 0 401 -3 594 -7 l353 -6 2 -516 3
-516 378 -3 377 -2 0 880 0 880 -975 0 -975 0 0 -355z"
                />
              </g>
            </svg>
            {/* <svg */}
            {/*   xmlns='http://www.w3.org/2000/svg' */}
            {/*   width='24' */}
            {/*   height='24' */}
            {/*   viewBox='0 0 100 100' */}
            {/*   className='h-6 hover:text-blue-500 fill-current dark:text-white' */}
            {/* > */}
            {/*   <g transform='translate(0.000000,100) scale(0.080000,-0.080000)'> */}
            {/*     <path d='M762 1203 c-6 -15 -13 -46 -17 -68 -4 -22 -13 -49 -20 -61 -15 -23 -122 -69 -257 -109 -49 -14 -88 -28 -88 -29 0 -2 33 -20 73 -40 49 -24 87 -36 115 -36 28 0 42 -4 42 -13 0 -34 -295 -517 -390 -639 -40 -52 -4 -28 86 56 49 46 105 109 124 141 19 31 64 98 100 148 77 108 125 186 173 283 20 39 46 78 59 86 13 8 69 34 126 58 107 45 118 57 110 111 -3 21 -10 25 -78 34 l-75 10 -5 45 c-5 42 -7 45 -36 48 -26 3 -33 -1 -42 -25z' /> */}
            {/*     <path d='M754 616 c-40 -19 -88 -39 -108 -46 -43 -14 -45 -30 -7 -72 25 -28 33 -31 80 -30 39 1 54 -3 58 -15 7 -18 -30 -140 -58 -192 -36 -67 6 -93 135 -84 l86 6 0 -26 c0 -14 -4 -37 -10 -51 -5 -14 -8 -26 -6 -26 7 0 110 68 129 85 11 10 17 30 17 60 0 62 -22 70 -150 57 -52 -5 -98 -6 -103 -2 -4 3 3 31 16 61 13 30 32 78 42 108 10 30 28 70 41 89 26 38 30 63 14 93 -17 31 -91 25 -176 -15z' /> */}
            {/*   </g> */}
            {/* </svg> */}
          </div>

          <p className="text-sm md:text-base font-semibold uppercase mb-4">
            {t.ERROR.MESSAGE}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            {statusCode
              ? `${statusCode} - ${t.ERROR.TITLE}`
              : `Error - ${t.ERROR.TITLE}`}
          </h1>

          <p className="max-w-screen-md md:text-lg text-center mb-12">
            {t.ERROR.HELP_TEXT}
          </p>

          <Link href="/" scroll={false}>
            <a className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none px-8 py-3">
              {t.ERROR.BACK_TO_HOME}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page404
