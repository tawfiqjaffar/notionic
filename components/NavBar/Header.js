import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { CollectionIcon, HomeIcon, MailIcon, MenuIcon, NewspaperIcon, SearchIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import ThemeSwitcher from './ThemeSwitcher.js'
import LangSwitcher from './LangSwitcher.js'
import { motion } from 'framer-motion'

const NavBar = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: t.NAV.INDEX,
      to: BLOG.path || '/',
      icon: <HomeIcon className="inline-block mb-1 h-5 w-5"/>,
      show: true
    },
    {
      id: 1,
      name: t.NAV.NEWSLETTER,
      to: '/newsletter',
      icon: <NewspaperIcon className="inline-block mb-1 h-5 w-5"/>,
      show: BLOG.pagesShow.newsletter
    },
    {
      id: 2,
      name: t.NAV.NOTES,
      to: '/notes',
      icon: <CollectionIcon className="inline-block mb-1 h-5 w-5"/>,
      show: BLOG.pagesShow.notes
    },
    {
      id: 3,
      name: t.NAV.PROJECTS,
      to: '/projects',
      icon: <SparklesIcon className="inline-block mb-1 h-5 w-5"/>,
      show: BLOG.pagesShow.projects
    },
    {
      id: 4,
      name: t.NAV.ABOUT,
      to: BLOG.path || '/about',
      icon: <UserIcon className="inline-block mb-1 h-5 w-5"/>,
      show: true
    },
    {
      id: 5,
      name: t.NAV.CONTACT,
      to: '/contact',
      icon: <MailIcon className="inline-block mb-1 h-5 w-5"/>,
      show: BLOG.pagesShow.contact
    },
    {
      id: 6,
      name: t.NAV.SEARCH,
      to: '/search',
      icon: <SearchIcon className="inline-block mb-1 h-5 w-5"/>,
      show: true
    }
  ]
  return (
    <motion.div className="flex">
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-1">
        {links.map(
          (link) =>
            link.show && (
              <Link passHref href={link.to} key={link.id} scroll={false}>
                <li
                  className={`${
                    activeMenu === link.to ? 'bg-gray-200 dark:bg-gray-700' : ''
                  } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                >
                  <div className="font-light">
                    {link.icon}
                    <span className="inline-block m-1">{link.name}</span>
                  </div>
                </li>
              </Link>
            )
        )}
      </ul>

      <ThemeSwitcher/>
      <LangSwitcher/>

      {/* Mobile Phone Menu */}
      <div className="md:hidden mr-2 block ">
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className="hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3"
        >
          <MenuIcon className="inline-block mb-1 h-5 w-5"/>
        </button>
        {showMenu && (
          <div className="absolute right-0 w-40 mr-4 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none">
            <div className="py-1">
              {links.map(
                (link) =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to} scroll={false}>
                      <a
                        onClick={() => setShowMenu((showMenu) => !showMenu)}
                        className="hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5"
                      >
                        {link.icon}
                        <span className="m-1">{link.name}</span>
                      </a>
                    </Link>
                  )
              )}
            </div>
            <div className="px-4 py-4">
              <Social/>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Header = ({
  navBarTitle,
  fullWidth
}) => {
  const [showTitle, setShowTitle] = useState(false)
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })

    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link passHref href="/" scroll={false}>
            <a aria-label={BLOG.title}>
              <motion.div className="h-6 hover:text-blue-500 dark:hover:text-blue-500 fill-current">
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
              </motion.div>
            </a>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              <span className="font-normal">{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar/>
      </div>
    </>
  )
}

export default Header
